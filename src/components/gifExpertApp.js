import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Attack On Titan'])

    // const handleAdd = () => {
    //     setCategories( arr => [...arr, 'Tom&Jerry'])
    // }

    return (
        <>
        <h1>Gif Expert App</h1>
        <hr />
        <AddCategory setCategories={ setCategories } />
        <ol>
            {
                categories.map( (category, i) => 
                    <GifGrid 
                    key = {category + i}
                    category={ category } />
                )
            }
        </ol>
        </>
    )
}
