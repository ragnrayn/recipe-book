import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { recipeService } from './services/recipe';

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.get().then((data) => setRecipes(data));
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="cards">
          {
            recipes.map((recipe: any, index: number) => {
              if (index < 10) {
                return (
                  <div key={index} className="card__main">
                    <div className='card'>
                      <div className="card__title">
                        { recipe.title }
                      </div>
                      <div className="card__source">
                        Source: { recipe.source }
                      </div>
                      <div className="card__category">
                        Category: { recipe.category }
                      </div>
                      <div className="card__url">
                        <a href={ recipe.url } target={'_blank'}>Go to recipe</a>
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
