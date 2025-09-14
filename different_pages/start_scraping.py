from scraper import Scraper
import openpyxl

def save_file(file_name, recipe_set):

    # Re-order it
    recipe_set = sorted(recipe_set, key=lambda x: x[0])

    wb = openpyxl.Workbook()

    ws = wb.active
    ws.title = "Recipes"

    ws.append(["Hyperlink"])

    for name, url in recipe_set:
        ws.append([f'=HYPERLINK("{url}", "{name}")'])
    
    wb.save(f"{file_name}.xlsx")

    return None

def page_scrape(webpage, recipe_scraper):

    curr_recipe_set = set()
    curr_num = 1

    while True:

        # Get the page
        print(f"Scraping done for {curr_num}. Sleeping.....")
        page_soup = recipe_scraper.perform_scraping(webpage.format(curr_num))

        # Get the recipes for that page
        extracted_recipes = recipe_scraper.start_extraction(page_soup)

        if not extracted_recipes:
            break

        # Join the recipes
        curr_recipe_set = curr_recipe_set | extracted_recipes

        curr_num += 1

    return curr_recipe_set

def iterate_pages(scraper, webpage_origin, multiple_pages):

    if not multiple_pages:
        return page_scrape(webpage_origin, scraper)
    
    curr_recipe_set = set()

    for page in multiple_pages:
        curr_recipe_set = curr_recipe_set | page_scrape(webpage_origin.format(page, "{}"), scraper)
    
    return curr_recipe_set

# URL link:
webpage = "https://www.recipetineats.com/recipes/?fwp_paged={}"
multiple_pages = []

file_name = "tineats"

args = {
    'box_tag' : ".entry-title",
    'title_tag' : ".entry-title-link"
}

# Page number
curr_num = 1

# Start!
recipe_scraper = Scraper(args)
curr_recipe_set = set()

# Single page vs Multiple page
if multiple_pages:
    ...

# Save the recipes
save_file(file_name, curr_recipe_set)

