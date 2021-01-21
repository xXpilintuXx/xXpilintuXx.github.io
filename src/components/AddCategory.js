import React, { useState } from 'react'
import ProtoTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2  ) {
            setCategories( cat => [inputValue, ...cat]);
            setInputValue('');
        }
        
    }

    return (
        <nav>
        <div className="nav-wrapper">
        <form onSubmit= { handleSubmit }>
            <div className="input-field">
                <input id="search" type="search" required
                onChange= { handleInputChange }
                value = { inputValue }
                ></input>
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
                </div>
            {/* <input 
                type="text"
                value= {inputValue}
                onChange={ handleInputChange }
                /> */}
        </form>
        </div>
        </nav>
    )
}


AddCategory.ProtoTypes = {
    setCategories: ProtoTypes.func.isRequired
}
