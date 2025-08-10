

// Paste into console within the web page

function escapeForSheets(text) {
  // Replace any double quotes with two double quotes (Sheets escaping rule)
  return text.replace(/"/g, '""')
    .replace(/[\r\n]+/g, '');;
}

function prepareOutput(recipe_metadata) {
    // Sort by alphabetical order
    recipe_metadata.sort((a,b) => 
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    )

    // Removing duplicates
    let unique = new Set();

    let filtered_recipes = recipe_metadata.filter(recipe => {
        let title = recipe.title.toLowerCase();
        
        // For empty title
        if (!title) return false;

        // For duplicates
        if (unique.has(title)) return false;

        unique.add(title);
        return true;
    });
    
    // Prepare the final string
    let combined_output = filtered_recipes.map(
        recipe => {
        let title = escapeForSheets(recipe.title);
        let web_link = escapeForSheets(recipe.web_link);
        return `=HYPERLINK("${web_link}", "${title}")`

    }).join("\n");

    // Copy to clipboard
    copy(combined_output)
}

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

    return  prepareOutput(recipe_metadata) 
    
}

function scrapeCardamomAndDill() {
    // Link: https://cardamomanddill.com/recipes/

    // Prepare the JSON list
    let recipe_metadata = [];

    // Get the collection links
    [...document.getElementsByTagName('p')].slice(2)
    .forEach(p => {

        // Get the links
        [...p.getElementsByTagName('a')]
        .forEach(link => {
            let title = link.innerText;
            let web_link = link.getAttribute('href');

            recipe_metadata.push({title, web_link})
        });
    });

    return prepareOutput(recipe_metadata)
}


