

// Paste into console within the web page

function scrapeVernaBanana() {
    //Link: https://www.vernabanana.com/recipes
    home_page = "https://www.vernabanana.com/recipes"

    // Get the collection squares
    squares_classname = ".food-recipe_container";
    recipe_obj = document.querySelectorAll(squares_classname);

    let recipe_metadata = [];

    recipe_obj.forEach(el => {

        let title = el.querySelector('.recipe-list-card_heading text-clamp').innerText;
        let web_link = home_page + el.querySelector('a').getAttribute("href");

        console.log(title);
        //recipe_metadata.push({title, web_link});
    });

    //console.log(recipe_metadata);

    // Sort by alphabetical order

    // Copy to clipboard

}