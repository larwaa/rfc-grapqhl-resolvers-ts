import type   { MealResolvers } from './../../types.generated.js';
    export const Meal: MealResolvers = {
    /* Implement Meal resolver logic here */
        foods: async (_parent, _arg, _ctx) => { /* Meal.foods resolver is required because Meal.foods exists but MealMapper.foods does not */ },
        related: async (_parent, _arg, _ctx) => { /* Meal.related resolver is required because Meal.related exists but MealMapper.related does not */ },
        diet: async (_parent, _arg, _ctx) => { /* Meal.diet resolver is required because Meal.diet exists but MealMapper.diet does not */ }
    };