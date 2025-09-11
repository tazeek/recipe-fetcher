from scraper import Scraper
import openpyxl

def save_file(file_name, recipe_set):

    wb = openpyxl.Workbook()

    ws = wb.active
    ws.title = "Recipes"

    ws.append(["Hyperlink"])

    for name, url in recipe_set:
        ws.append([f'=HYPERLINK("{url}", "{name}")'])
    
    wb.save(f"{file_name}.xlsx")

    return None

# URL link:
webpage = "https://www.recipetineats.com/recipes/?fwp_paged={}"
file_name = "tineats"

box_tag = ".entry-title"
title_tag = ".entry-title-link"

# Page number
curr_num = 1

# Start!
recipe_scraper = Scraper()
curr_recipe_set = set()

while True:

    # Get the page
    print(f"Scraping done for {curr_num}. Sleeping.....")
    page_soup = recipe_scraper.perform_scraping(webpage.format(curr_num))

    # Get the recipes for that page
    extracted_recipes = recipe_scraper.start_extraction(page_soup, box_tag, title_tag)

    if not extracted_recipes:
        break

    # Join the recipes
    curr_recipe_set = curr_recipe_set | extracted_recipes

    curr_num += 1

# Save the recipes
save_file(file_name, curr_recipe_set)

