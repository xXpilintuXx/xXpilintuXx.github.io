import React from 'react'

export const GifGridItem = ( { id, title, url} ) => {
    
    
    
    
    
    return (
        <>
        
        <div className="col s2 m2">
        <div className="card">
            <div className="card-image">
            <img src= {
                url
            }></img>
            <span className="card-title">{title}</span>
            </div>
          </div>
          </div>
          
        </>
    )
}
