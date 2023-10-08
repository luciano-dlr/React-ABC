import { useState } from 'react';




export const AddCategory = ({onAddCategories}) => {

   


    const [inputValue, setinputValue] = useState('')

    const handleInputChange = ({ target }) => {

        setinputValue(target.value)

    }

    const onSubmit =(event) => {

        event.preventDefault()
        if(inputValue.trim().length <= 1) return;

        onAddCategories((categories) => [inputValue,...categories])
        setinputValue('')
        
    }

    return (
        <form onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleInputChange}
            />

        </form>
    )
}

