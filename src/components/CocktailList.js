import React from 'react'
import Cocktail from './Cocktail'
const CocktailList = ({cocktails, loading}) => {


    if(loading){
        return <h2 className="loading-title">
                Loading...
        </h2>
    }
    if(cocktails.length < 1) {
        return (
            <h2 className="empty-title">
                No cocktails matched your search terms.
            </h2>
        )
    }
    return (
        <section className="cocktail-section">
            <h1>Cocktails</h1>
            <div className="cocktail-list">
        {
            cocktails && cocktails.map((item) => {
                return <Cocktail key={item.id}
                {...item}
                 />
            })
        }
            </div>
        </section>
    )
}

export default CocktailList
