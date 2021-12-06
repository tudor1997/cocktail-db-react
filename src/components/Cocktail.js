import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({name,image, id,glass,info}) => {
    return (
        <article className="cocktail">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h5>{name}</h5>
                <h6>{glass}</h6>
                <small>{info}</small>
                <Link className="details" to={`/cocktail/${id}`}>Details</Link>
            </div>
        </article>
    )
}

export default Cocktail
