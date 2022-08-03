import { Products } from "./products";
import { Cities } from "./cities.model";
import {Categories} from "./categories.model";
import {Coverimages} from "./coverimages.model";

export class Stores {
  id!: number;
  title!: string;
  slug!: string;
  location!: string;
  description!: string;
  adresse!: string;
  Products:Products;
  cities: Cities;
  categories: Categories;
  coverimages: Coverimages;
  number1!: string;
  number2!: string;
  views!: number;
  location2!: string;

  constructor() {
    this.Products = new Products();
    this.cities = new Cities();
    this.categories = new Categories();
    this.coverimages = new Coverimages();
  }
}
