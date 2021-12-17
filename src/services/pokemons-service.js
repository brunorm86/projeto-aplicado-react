
export const fetchAllPokemons = async () => {

    try {

        const data = await fetch("https://pokedex2.p.rapidapi.com/pokedex/uk", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "pokedex2.p.rapidapi.com",
                "x-rapidapi-key": "f23a5b4efemsh2f567ab218c6abfp144a96jsn291e402a5725"
            },
        });

        const listaPoke = await data.json();
        return listaPoke;

    } catch (erro) {
        console.error(erro.message);
    }
};