// write your CatList component here

import React from "react"

const CatList = (props) => {
    return (
        <div>
            {props.catPics.map(pic => {
                return <img src={pic.url} />
            })}

        </div>
    )
}

export default CatList