import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { recipeService } from './services/recipe';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const getSearchText = (e: any) => {
    setSearch(e.target.value);
  }

  const searchByTitle = () => {
    if (!search) {
      recipeService.get().then((data) => setRecipes(data));
    }
    setRecipes(recipes.filter((recipe: any) => recipe.title.startsWith(search)));
  }

  useEffect(() => {
    recipeService.get().then((data) => setRecipes(data));
  }, [])

  return (
    <div className="App">
      <div className="navbar">
        <div className="container">
          <div className="navbar__search">
            <input type="text" onChange={(e) => getSearchText(e)} placeholder='Search' className='search__bar' />
            <button type='button' onClick={() => searchByTitle()} >Search</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cards">
          {
            recipes.map((recipe: any, index: number) => {
              if (index) {
                return (
                  <div key={index} className="card__main">
                    <div className='card'>
                      <div className="card__title">
                        {recipe.title}
                      </div>
                      <div className="card__source">
                        Source: {recipe.source}
                      </div>
                      <div className="card__category">
                        Category: {recipe.category}
                      </div>
                      <div className="card__url">
                        <a href={recipe.url} target={'_blank'}>Go to recipe</a>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
