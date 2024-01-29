import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Tortilla de patatas',
      imageUrl: 
        'https://s1.eestatic.com/2021/10/30/cocinillas/recetas/623450882_214590339_600x315.jpg',
      ingredients: ['Potatoes', 'Onion', 'Egg']
    },
    {
      id: 'r2',
      title: 'Macarrones con chorizo',
      imageUrl: 
        'https://www.rebanando.com/uploads/media/macarrones-con-chorizo-2.jpg?1392730107',
      ingredients: ['Macarrones', 'Chorizo', 'Tomate']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
