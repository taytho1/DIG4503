//declaring the constant axios in order to include axios in the file
const axios = require('axios');
//fetching the api that information will be pulled from
axios('https://pokeapi.co/api/v2/pokemon/vaporeon')
//if the link works then the .then will run
    .then(function (response) {
//declaring the constant pokemon and setting it equal to the data from the api
        const pokemon = response.data;
//logging the pokemons name and id inside of the console
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
//incase the link does not work the .catch will run to catch errors
    .catch(function (error) {
//logging the errors in the console
        console.log("Error: " + error);
    });