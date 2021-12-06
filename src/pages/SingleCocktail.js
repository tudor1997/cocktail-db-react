import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
const SingleCocktail = () => {
  const {id} = useParams();
  const api = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getDetails = async () => {
      const result = await fetch(api);
      const data = await result.json();

 

      if(data.drinks) {
          const {
            strDrink:name,
            strDrinkThumb:image,
             strCategory:category, 
             strGlass:glass,
             strAlcoholic:info,
            strInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0]

        const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
        
        const newCocktail = {name, image, info ,category, glass, instructions, ingredients};

        setDetails(newCocktail);
      }else{
        setDetails(null);
      }
      setLoading(false);
    }
    getDetails();
    
  },[id])


  if(loading){
    return <h2 className="loading-title">
      Loading...
    </h2>
  }
  if(!details){
    return <h2 className="null">
      Data can't be retrieved
    </h2>
  }else{
    const {name, image, category, info, glass, instructions, ingredients} = details;
    return (
      <section className="details-section">
        <Link className="back-btn" to="/" >Back Home</Link>
        <h1>{name}</h1>
        <div className="details-container">
        <div className="img-container">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <p><span>Name:</span> {name}</p>
          <p><span>Category:</span> {category}</p>
          <p><span>Glass:</span> {glass}</p>
          <p><span>Type:</span> {info}</p>
          <p><span>Instructions:</span> {instructions}</p>
          <ul className="ingredients">
           <span> Ingredients:</span>
            {ingredients && ingredients.map((item, index) =>{
              return item ? <li key={index}>{item}</li> : null;
            })}
          </ul>
        </div>
        </div>
      </section>
  )
  }
   
}

export default SingleCocktail
