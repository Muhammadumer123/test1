#define BLYNK_TEMPLATE_ID "TMPL4_cpkyhBv"
#define BLYNK_TEMPLATE_NAME "IoT"
#define BLYNK_AUTH_TOKEN "pnWVmwbqzaitlzlgEW3vwTGLPSW62TRR"


#define BLYNK_PRINT Serial
#include <WiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleEsp32.h>

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "Wokwi-GUEST";
char pass[] = "";

BlynkTimer timer;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(15,INPUT);

  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  //timer.setInterval(time In Mili Seconds, function name)
  timer.setInterval(1000L, myTimerEvent);

}

BLYNK_WRITE(V1){
  int data = param.asInt();
  Serial.print("data..  ");
  Serial.println(data);

}

void myTimerEvent(){
  int T = random(10, 50);

  //Blynk.virtualWrite(datastream, data)
  Blynk.virtualWrite(V0, T); //V0 is datastream //T is data

}

void loop() {
  // put your main code here, to run repeatedly:

  Blynk.run();
  timer.run(); // Initiates BlynkTimer

}
