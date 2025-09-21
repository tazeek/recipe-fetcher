from openpyxl import load_workbook
import openpyxl

import os

def collect_data():
    
    all_files = []

    # Load files
    for file in os.listdir("."):

        # Ignore non-xlsx files
        if not file.endswith(".xlsx"):
            continue
        
        # Load file
        print(file)
        wb = load_workbook("beyondkimchee.xlsx")
        ws = wb.active

        # Get all the values
        current_recipes = [
            cell.value
            for row in ws.iter_rows(values_only=False)
            for cell in row
            if "HYPERLINK" in cell.value
        ]

        print(current_recipes)
        print("\n")

    return None


def tabulate_data():
    ...

def store_data():
    ...

# Load all the files
combined_files = collect_data()
quit()

# Tabulated data
tabulated_data = tabulate_data()

store_data()