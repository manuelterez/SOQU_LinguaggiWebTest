async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);

    const Elements = document.getElementsByClassName('item_text');

    for (let i = 0; i < 36; i++) {
        Elements[i].textContent = json.programming_languages_popular[i];
    }

    console.log(Elements);

    let immagine = document.getElementsByClassName("eltdf-normal-logo")[0];

    immagine.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRya3oD5cFtFtEatozD-_BMlZ7QGZqbVocQ&s";

    let wikipediaUrlBase = "https://it.wikipedia.org/wiki/";


    for (let i = 0; i < 36; i++) {


        let linkwikipedia = document.createElement("a");

        linkwikipedia.textContent = json.programming_languages_popular[i];

        linkwikipedia.href = wikipediaUrlBase + encodeURIComponent(json.programming_languages_popular[i]);

        linkwikipedia.target = "_blank";


        Elements[i].innerHTML = '';
        Elements[i].appendChild(linkwikipedia);
    }


}

exampleFetch();

exampleFetch();