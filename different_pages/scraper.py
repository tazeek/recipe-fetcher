
from bs4 import BeautifulSoup

import requests
import random
import time

class Scraper():

    def __init__(self, args):

        self._user_agents = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Safari/605.1.15",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        ]

        self._box_tag = args["box_tag"]
        self._title_tag = args["title_tag"]

        return None

    def _sleep(self):
        time.sleep(random.uniform(2,6))
        return None

    def perform_scraping(self, url):

        headers = {"User-Agent": random.choice(self._user_agents)}
        response = requests.get(url, headers=headers)

        return BeautifulSoup(response.text, "html.parser")
    
    def start_extraction(self, page_soup):

        # Check for recipe tag
        recipe_tags = page_soup.select(self._box_tag)

        if not recipe_tags:
            return set()
        
        recipe_set = set()

        for tag in recipe_tags:

            # Get the href
            a_tag = tag.find("a")

            # Get the title
            title = tag.select(self._title_tag)

            recipe_set.add((title[0].text, a_tag.get("href")))

        self._sleep()

        return recipe_set
        

    
