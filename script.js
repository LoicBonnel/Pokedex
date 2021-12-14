const bouton = document.getElementById("Search");

function number(){
    // Sélectionner l'élément input et récupérer sa valeur

    // Afficher la valeur
    alert(input);
}


const searchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon-species/';
    let num = document.getElementById("recherche").value;

    fetch(url + num)
        .then(response => response.json())
        .then(data => {
            console.log(data.names[4].name);
        })
}

bouton.addEventListener("click", searchPokemon);