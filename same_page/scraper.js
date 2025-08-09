

// Paste into console within the web page

function scrapeVernaBanana() {
    //Link: https://www.vernabanana.com/recipes
    home_page = "https://www.vernabanana.com/recipes"

    // Get the collection squares
    squares_classname = "food-recipe_container w-dyn-item";
    recipe_obj = document.getElementsByClassName(squares_classname);

    // Go one by one
    for (i = 0; i < recipe_obj.length; i++) {
    
        // Extract the title

        // Extract the web link
        web_link = home_page + recipe_obj[i].getElementsByTagName('a')[0].getAttribute("href");
    }

    // Sort by alphabetical order

    // Copy to clipboard

}