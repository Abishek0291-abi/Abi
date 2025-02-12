   javascript
   import React from 'react';
   import { useSelector, useDispatch } from 'react-redux';
   import { removeFavorite } from '../redux/slices/favoritesSlice';

   const Favorites = () => {
     const favorites = useSelector((state) => state.favorites);
     const dispatch = useDispatch();

     return (
       <div>
         <h2>Favorites</h2>
         {favorites.map((recipe) => (
           <div key={recipe.uri}>
             <h3>{recipe.label}</h3>
             <button onClick={() => dispatch(removeFavorite(recipe))}>Remove</button>
           </div>
         ))}
       </div>
     );
   };

   export default Favorites;
