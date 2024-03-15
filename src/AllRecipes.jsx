import { useEffect } from "react";
import Recipe from "./Recipe";
import { useState } from "react";

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('items.json')
        .then(response => response.json())
        .then(data => setRecipes(data))
    } ,[])
    return (
        <div className="grid grid-cols-2 space-y-4 w-3/5 gap-4">
          {
            recipes.map(recipe => <Recipe 
                key={recipe.id} 
                recipe={recipe}
                ></Recipe>)
          }
        </div>
    );
};

export default AllRecipes;