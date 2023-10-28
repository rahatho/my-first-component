import {recipes} from "./data.js";

export default function RecipeList(){
  const recipesList = recipes.map(recipe => {
      return (
      <li key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {getIngredients(recipe)}
        </ul>
    </li>);
  }
        );
  return (
   <div>
    <h1>Recipes</h1>
    <ul>
      {recipesList}
    </ul>
   </div>
  );
  }

 


function getIngredients(recipe){
  const ingredientList = recipe.Ingredients?.map( x => 
     <li key={x}>{x}</li>);
  return ingredientList;
}

