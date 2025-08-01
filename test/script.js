// Ensure the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the HTML elements where values will be displayed
  const armSpanElement = document.getElementById("arm-span-value");
  const heightElement = document.getElementById("height-value");

  // Initial demo values
  let currentArmSpan = 170.0;
  let currentHeight = 175.0;

  /**
   * Function to update the measurement display.
   * This function will be called whenever new data is received.
   * @param {number} armSpan - The new arm span value.
   * @param {number} height - The new height value.
   */
  function updateMeasurements(armSpan, height) {
    // Update the arm span display, formatting to two decimal places
    armSpanElement.innerHTML = `${armSpan.toFixed(
      2
    )} <span class="unit">c m</span>`;
    // Update the height display, formatting to two decimal places
    heightElement.innerHTML = `${height.toFixed(
      2
    )} <span class="unit">c m</span>`;
  }

  // Call the update function with initial demo values
  updateMeasurements(currentArmSpan, currentHeight);

  // --- Auto-Updating Demo Values ---
  // This section simulates receiving new data every 2 seconds.
  // In your final application, you will replace this with actual
  // communication logic (HTTP, MQTT, WebSockets, etc.) from Arduino.
  setInterval(() => {
    // Generate new random values for demonstration purposes
    // Arm span range: 150cm to 200cm
    currentArmSpan = Math.random() * 50 + 150;
    // Height range: 160cm to 210cm
    currentHeight = Math.random() * 50 + 160;

    // Update the dashboard with the new demo values
    updateMeasurements(currentArmSpan, currentHeight);

    console.log(
      `Updated: Arm Span = ${currentArmSpan.toFixed(
        2
      )} CM, Height = ${currentHeight.toFixed(2)} CM`
    );
  }, 2000); // Update every 2000 milliseconds (2 seconds)

  // --- End Auto-Updating Demo Values ---

  // --- Future Integration Placeholder ---
  // This is where you would add your actual code to receive data from Arduino.
  // The `updateMeasurements` function is ready to be called with real data.
  //
  // Example of how you might call it if you receive data:
  // function handleArduinoData(data) {
  //     if (data.armSpan !== undefined && data.height !== undefined) {
  //         updateMeasurements(data.armSpan, data.height);
  //     }
  // }
  //
  // For HTTP polling, MQTT, or WebSockets, you would set up listeners
  // or fetch calls that, upon receiving new data, would then call `updateMeasurements`.
  // --- End Future Integration Placeholder ---
});
