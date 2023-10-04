const apiKey = 'S8TJ8IQ1tQgUeA4vJf9ApqqasSUcq3Wr'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
    .then(resp => resp.json())
    .then(({data}) =>{
        console.log(data.images.original)

        const {url} = data.images.original
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn)