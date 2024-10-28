import type   { FoodResolvers } from './../../types.generated.js';
    export const Food: FoodResolvers = {
    /* Implement Food resolver logic here */
        meals: async (_parent, _arg, _ctx) => { return [{
            id: "breakfast",
        }] }
    };