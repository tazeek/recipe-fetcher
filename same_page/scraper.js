

// Paste into console within the web page

function scrapeVernaBanana() {
    //Link: https://www.vernabanana.com/recipes
    home_page = "https://www.vernabanana.com"

    // Get the collection squares
    squares_classname = ".food-recipe_container";
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
    
    // Prepare the final string
    let combined_output = recipe_metadata.map(
        recipe => `${recipe.title}\t${recipe.web_link}`
    ).join("\n");

    // Copy to clipboard
    copy(combined_output)

}