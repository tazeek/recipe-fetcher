from scraper import Scraper

# URL link:
webpage = "https://www.walderwellness.com/recipes/?fwp_paged={}"
box_tag = ".archive-post.facet-post"
title_tag = ".title"

# Page number
curr_num = 1

# Start!
recipe_scraper = Scraper()
curr_recipe_set = set()

while True:

    # Get the page
    page_soup = recipe_scraper.perform_scraping(webpage.format(curr_num))

    # Get the recipes for that page
    extracted_recipes = recipe_scraper.start_extraction(page_soup, box_tag, title_tag)

    if not extracted_recipes:
        break

    # Join the recipes
    curr_recipe_set = curr_recipe_set | extracted_recipes

# Save the recipes
print(curr_recipe_set)

