import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes?: Recipe[];

  
  constructor(private recipesService: RecipesService) {

  }

  // IONIC + ANGULAR LIFECYLES

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('On Inithialize method called');
  }
 
  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
    // console.log(this.recipes);
    console.log('Recipes Loaded!');
    console.log('On ionic view will enter method called'); 
  }

  ionViewDidEnter() {
    console.log('On ionic view did enter method called'); 
  }

  ionViewWillLeave() {
    console.log('On ionic view will leave method called'); 
  }

  ionViewDidLeave() {
    console.log('On ionic view did leave method called'); 
  }

  ngOnDestroy() {
    console.log('On Destroy method called'); 
  }
}
