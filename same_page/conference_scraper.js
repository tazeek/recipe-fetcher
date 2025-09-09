function scrapeACL2025() {
    // Link: https://2025.aclweb.org/program/main_papers/

    // Get the section
    let papers_section  = document.getElementsByClassName('page__content')[0];
    output_str = "";
    
    [...papers_section.getElementsByTagName('li')].forEach(sec => {
        let full_text = sec.innerText.split("\n");
        
        output_str += full_text[0] + "\t" + full_text[1] +  "\t" + "ACL2025\n"
    });

    console.log(output_str);

    copy(output_str);
}

function scrapeICLR2025() {
    // Link: https://iclr.cc/virtual/2025/papers.html
    // NOTE: ICML also has this

    // Get the section
    section = "ICML2025" + "\n"
    output_str = "";

    [...document.getElementsByClassName('myCard col-sm-6 col-lg-4')].forEach(card => {
        title = card.getElementsByClassName('card-title')[0].innerText;
        authors = card.getElementsByClassName('card-subtitle text-muted')[0].innerText;

        output_str = output_str + title + "\t" + authors + "\t" + section
    });

    console.log(output_str);

    copy(output_str);
}

function scrapeSIRIG2025() {
    // Link: https://sigir2025.dei.unipd.it/accepted-papers.html

    output_str = "";

    [...document.getElementsByClassName('accepted-paper-item')].forEach(section => {
        let title = section.getElementsByClassName('accepted-paper-title')[0].innerText;
        let authors = section.getElementsByClassName('accepted-paper-author')[0].innerText;

        output_str = output_str + title + "\t" + authors + "\t" + "SIGIR2025\n"
    });

    console.log(output_str);
    copy(output_str);
}

function scrapeIJCAI2025() {

    output_str = '';

    [...document.getElementsByClassName('paper')].forEach(paper => {

        let title = paper.innerText.split("\n")[0];
        title = title.substring(title.indexOf(":") + 1).trim();

        let authors = paper.getElementsByClassName('info')[0];
        authors = authors.substring(authors.indexOf(":") + 1).trim();
        
        output_str = output_str + title + "\t" + authors + "\t" + "IJCAI2025\n"

    });

    console.log(output_str);
    copy(output_str);
}

function scrapeCOLM2025() {
    output_str = ''

    content_section = document.getElementsByClassName('content')[0];

    [...content_section.getElementsByTagName('p')].forEach(paper => {
        let title = paper.innerText.split("\n")[0];

        let authors = paper.getElementsByTagName('em')[0].innerText;

        console.log(paper);

        output_str = output_str + title + "\t" + authors + "\t" + "COLM2025\n"
    });

    console.log(output_str);
    copy(output_str);
}