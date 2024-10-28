import type   { FoodResolvers } from './../../types.generated.js';
    export const Food: FoodResolvers = {
    /* Implement Food resolver logic here */
        __resolveReference: async (_parent, _args, _ctx) => { return {
            id: "apple",
            name: "Pink Lady"
        }},
        meals: async (_parent, _arg, _ctx) => {
            return [{
                id: "breakfast",
                
            }]
        }
    };