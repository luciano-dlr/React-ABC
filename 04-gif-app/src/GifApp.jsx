import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


 export const GifApp = () => {
    
    const [categories,setCategories] = useState(['One Punch','Dragon Ball','leonardo']);

    
    const apiKey = 'LDUkHhGns7VGICYhK8IAuJ8RaonsQk5C'

    return (
        <>
            <h1>Gif App</h1>

            <AddCategory onAddCategories={setCategories}/>
            
            
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}


