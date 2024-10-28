import type   { MealResolvers } from './../../types.generated.js';
    export const Meal: MealResolvers = {
    /* Implement Meal resolver logic here */
        foods: async (_parent, _arg, _ctx) => { /* Meal.foods resolver is required because Meal.foods exists but MealMapper.foods does not */ },
        related: async (_parent, _arg, _ctx) => { 
            _parent.diet // undefined, but should be string as `related` has the `@requires(fields: "diet")` directive. 
         },
        // should not be added as a field resolver as it's defined as an `@external` field in the schema
        diet: async (_parent, _arg, _ctx) => { /* Meal.diet resolver is required because Meal.diet exists but MealMapper.diet does not */ }
    };