
export const getImagen = async() => {

    try {

        const apiKey = 'S8TJ8IQ1tQgUeA4vJf9ApqqasSUcq3Wr';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

       return url
        
    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontro la imagen xd'
    }
    
    
    
}

 getImagen();



