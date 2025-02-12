  javascript
   import React, { useEffect } from 'react';
   import { useSelector, useDispatch } from 'react-redux';
   import { fetchRecipes } from '../redux/slices/recipeSlice';

   const RecipeList = () => {
     const dispatch = useDispatch();
     const { recipes, status, error } = useSelector((state) => state.recipes);

     useEffect(() => {
       dispatch(fetchRecipes({ query: 'pizza' }));
     }, [dispatch]);

     if (status === 'loading') return <p>Loading...</p>;
     if (status === 'failed') return <p>Error: {error}</p>;

     return (
       <div>
         {recipes.map((recipe) => (
           <div key={recipe.uri}>
             <h2>{recipe.label}</h2>
             <img src={recipe.image} alt={recipe.label} />
             <p>{recipe.source}</p>
           </div>
         ))}
       </div>
     );
   };

   export default RecipeList;
   
