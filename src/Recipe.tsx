// Recipe.tsx
import React from "react";

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div className="recipe">
      <h2>{recipeData.name}</h2>
      <img src={recipeData.image} alt={recipeData.name} />
      <h3>Ingredients:</h3>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
