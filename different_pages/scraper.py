
from bs4 import BeautifulSoup

import requests
import random
import time

class Scraper():

    def __init__(self):

        self._user_agents = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Safari/605.1.15",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        ]

        return None

    def _sleep():
        time.sleep(random.uniform(2,6))
        return None

    def perform_scraping(self, url):

        headers = {"User-Agent": random.choice(self._user_agents)}
        response = requests.get(url, headers=headers)

        return BeautifulSoup(response.text, "html.parser")
    
    def start_extraction(page_soup, tag_name_box, title_tag):

        # Check for recipe tag
        recipe_tags = page_soup.select(tag_name_box)

        if not recipe_tags:
            return set()
        
        recipe_set = set()

        for tag in recipe_tags:

            # Get the href
            a_tag = tag.find("a")

            # Get the title
            title = tag.select(title_tag)

            recipe_set.add((title[0].text, a_tag.get("href")))

        return recipe_set
        

    
