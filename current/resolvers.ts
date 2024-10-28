import { Resolvers } from "./types.js";

const resolvers: Resolvers = {
    Meal: {
        /**
         * This works as expected, `_parent` has the type `{ id: string, diet: string }`, where `id` is the key field of the type `Meal`,
         * and `related` has a `@requires(fields: diet)` directive. The return type of `related` is `[Meal!]!`, which in this
         * domain means that we should only return `{ id: string }[]` as the `Meal` type is resolved by a different schema.
         */
        related: async (_parent, _args, _context) => {
            return [{
              id: "pie"
            }]
        }
    },
    Food: {
        meals: async (_parent, _args, _context) => {
            return [{
                id: "breakfast",
            }]
        }
    },
    Query: {
        getFoods: async (_parent, _args, _context) => {
            return [{
                id: "apple",
                name: "Pink Lady"
            }, {
                id: "orange",
                name: "Cevita"
            }]
        }
    }
}

export { resolvers };