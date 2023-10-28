import {recipes} from "./data.js";

export default function RecipeList(){
  
  return (
   <div>
    <h1>Recipes</h1>
     {recipes.map(recipe=>
      <Recipe
        id={recipe.id}
        name={recipe.name}
        ingredients={recipe.Ingredients}/>
        )}

   </div>
  );
  }

 function Recipe({id, name, ingredients}){
   return <div key={id}>
    <h2>{name}</h2>
    <ul>
      {ingredients.map(ingredient=><li key={ingredient}>{ingredient}</li>)}
    </ul>
   </div>
 }




