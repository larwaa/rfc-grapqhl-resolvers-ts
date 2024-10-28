import type   { MealResolvers } from './../../types.generated.js';
    export const Meal: MealResolvers = {
    /* Implement Meal resolver logic here */
        diet: async (_parent, _arg, _ctx) => { /* should not be required to add this resolver, as this is resolved by a different schema. */ },
        foods: async (_parent, _arg, _ctx) => { /* Meal.foods resolver is required because Meal.foods exists but MealMapper.foods does not */ },
        related: async (_parent, _arg, _ctx) => { 
            _parent.diet // undefined, but should be a string because `related` has a `@requires(fields: diet)` directive.
         }
    };