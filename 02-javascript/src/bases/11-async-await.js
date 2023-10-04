//Uso del async y await para especificar la asyncronia del componente 
const getImangen = async () => {

    try {
        
        const apiKey = 'S8TJ8IQ1tQgUeA4vJf9ApqqasSUcq3Wr'
    
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    
        const { data } = await respuesta.json()
    
    
        const { url } = await data.images.original
    
        console.log(url)
    
        const img = document.createElement('img');
    
        img.src = url;
    
        document.body.append(img)

    } catch (error) {
        //manejo del error
        console.error(error)
        
    }


}

getImangen()