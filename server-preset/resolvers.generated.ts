/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated.js';
    import    { getFoods as Query_getFoods } from './meals/resolvers/Query/getFoods.js';
import    { Food } from './meals/resolvers/Food.js';
import    { Meal } from './meals/resolvers/Meal.js';
    export const resolvers: Resolvers = {
      Query: { getFoods: Query_getFoods },
      
      
      Food: Food,
Meal: Meal
    }