import React, { useState, useEffect } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("ab");

  const api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  useEffect(() => {
    setLoading(true);
    const getCocktails = async () => {
      const result = await fetch(api);
      const data = await result.json();
    
      const { drinks } = data;
      
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
      
    };
    getCocktails();
  }, [searchTerm]);
  return (
    <section className="section section-home">
      <SearchForm setSearchTerm={setSearchTerm}></SearchForm>
      <CocktailList loading={loading} cocktails={cocktails}></CocktailList>
    </section>
  );
};

export default Home;
