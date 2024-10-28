import type   { FoodResolvers } from './../../types.generated.js';
    export const Food: FoodResolvers = {
    /* Implement Food resolver logic here */
        meals: async (_parent, _arg, _ctx) => { /* Food.meals resolver is required because Food.meals exists but FoodMapper.meals does not */ }
    };