

// Paste into console within the web page

function scrapeVernaBanana() {
    //Link: https://www.vernabanana.com/recipes
    home_page = "https://www.vernabanana.com"

    // Get the collection squares
    squares_classname = ".food-recipe_container";

    // TODO: Can we do the same with getElementsbyID
    recipe_obj = document.querySelectorAll(squares_classname);

    let recipe_metadata = [];

    recipe_obj.forEach(el => {

        let title = el.getElementsByClassName('recipe-list-card_heading')[0].innerText;
        let web_link = home_page + el.getElementsByClassName('recipe-link_wrapper')[0].getAttribute("href");

        recipe_metadata.push({title, web_link});
    });

    // Sort by alphabetical order
    recipe_metadata.sort((a,b) => 
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    )

    console.log(recipe_metadata)

    // Copy to clipboard

}