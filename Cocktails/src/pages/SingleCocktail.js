import React, { useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strCategory: category,
          strGlass: glass,
          strDrinkThumb: image,
          strAlcoholic: info,
          strInstructions: instr,
          strIngredient1,
          strIngredient2,
          strIngredient3,
        } = data.drinks[0];
        const ingredient = [strIngredient1, strIngredient2, strIngredient3];
        const newCocktail = {
          name,
          category,
          glass,
          image,
          info,
          instr,
          ingredient,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
    } catch (error) {}
    setLoading(false);
  };
  React.useEffect(() => {
    fetchData();
  }, [id]);
  if (loading) return <Loading />;
  if (!cocktail)
    return <h2 className="section-title">No Cocktail to Display</h2>;
  const { name, info, category, glass, image, ingredient, instr } = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn  btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">Info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">Category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions : </span>
            {instr}
          </p>
          <p>
            <span className="drink-data">Ingredients</span>
            {ingredient.map((item, ind) => {
              if (item) return <span key={ind}>{item}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
