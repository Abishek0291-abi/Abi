  javascript
   import React, { useState } from 'react';
   import { useDispatch } from 'react-redux';
   import { fetchRecipes } from '../redux/slices/recipeSlice';

   const SearchBar = () => {
     const [query, setQuery] = useState('');
     const dispatch = useDispatch();

     const handleSearch = () => {
       dispatch(fetchRecipes({ query }));
     };

     return (
       <div>
         <input
           type="text"
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           placeholder="Search recipes..."
         />
         <button onClick={handleSearch}>Search</button>
       </div>
     );
   };

   export default SearchBar;
