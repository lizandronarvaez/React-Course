
export const getApi = async () => {

    try {

        const url = 'https://rickandmortyapi.com/api/character';
        const resp = await fetch(url);
        const { results } = await resp.json();
        return results
    } catch (error) {
        // manejo del error
        console.error(error)
        return "No se encontro los datos"
    }



}

getApi();



