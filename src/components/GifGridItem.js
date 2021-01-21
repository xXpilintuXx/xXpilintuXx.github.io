import React from 'react'

export const GifGridItem = ( { id, title, url} ) => {
    
    
    
    
    
    return (
        <>
        
        <div className="col s6 m3">
        <div className="card">
            <div className="card-image">
            <img src= {
                url
            }
            alt={
                title
            }></img>
            </div>
          </div>
          </div>
          
        </>
    )
}
