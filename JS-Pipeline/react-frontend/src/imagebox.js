import React, {useState,useEffect} from 'react'

export const Imagebox = (props) => {
    

    return (
        <div>
            {props.imgSrc && (
          <img
            src={props.imgSrc}
          />
        )}
        </div>
    )
}
