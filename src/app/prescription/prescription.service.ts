import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  public recipe : Object;

  constructor() { }

  selectRecipe(recipe: Object) {
    this.recipe = recipe;
    console.log(this.recipe);
  }
}
