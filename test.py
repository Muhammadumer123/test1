print('helllo')
from openpyxl import load_workbook
dir = './new file.xlsx'
workbook = load_workbook(dir)
workbook.security.lockstructure = False
workbook.save(dir)
workbook.close()