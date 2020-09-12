import React,{useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';
const AppID = "05988213";
const AppKey = "455d284461aba187df103ce514f9cb84" ;



function App() {

  const [recipes, setReceipes] = useState([]);
 const [search, setSearch] = useState("");
 const [query,setQuery] = useState("chicken");
 useEffect(() => {
      getResponse();
     },[query]);

const upDatesearch = e => {
setSearch(e.target.value);
}
const getSearch = e =>{
e.preventDefault();
setQuery(search);
setSearch('');
}

  const getResponse = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppID}&app_key=${AppKey}`);
    const data = await response.json();
    console.log(data.hits);
    setReceipes(data.hits);
  }

return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Receipe</h1>
       <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text" value={search} onChange ={upDatesearch} />
         <button className="search-btn" type="submit">
         Search
         </button>
         </form>
         <div className="recipes">
         {recipes.map(recipe =>(
           <Recipe 
              key = {recipe.recipe.label}
              title={recipe.recipe.label}
              calories = {recipe.recipe.calories}
              image = {recipe.recipe.image}
              ingredients = {recipe.recipe.ingredients}
           />
         ))}
         </div>
      </header>
    </div>
  );
}

export default App;
