import { printSubgraphSchema } from "@apollo/subgraph";
import SchemaBuilder from "@pothos/core";
import DirectivesPlugin from "@pothos/plugin-directives";
import FederationPlugin from "@pothos/plugin-federation";


const builder = new SchemaBuilder({
    plugins: [DirectivesPlugin, FederationPlugin]
})

type FoodType = {
    id: string;
    name: string;
}

type MealType = {
    id: string;
}


const MealRef = builder.externalRef("Meal", builder.selection<MealType>("id"))

const Meal = MealRef.implement({
    externalFields: (t) => ({
        id: t.id({ nullable: false }),
        diet: t.string({ nullable: false })
    }),
    fields: (t) => ({
        foods: t.field({
            nullable: false,
            type: t.listRef(Food),
            requires: builder.selection<{ diet: string }>("diet"),
            resolve: async (parent, args, ctx) => {
                if (parent.diet === "vegan") {
                    return [{
                        id: "apple",
                        name: "Pink Lady"
                    }]
                }
                // no food for anyone else #govegan #veganforlife #veganism #veganfood #veganfoodshare
                // hashtags curtesy of Copilot.
                return []
            }
        }),
        related: t.field({
            nullable: false,
            type: t.listRef(MealRef),
            requires: builder.selection<{ diet: string }>("diet"),
            resolve: async (parent, args, ctx) => {
                return [{
                    id: "pie"
                }]
            }
        })
    })
})


const Food = builder.objectRef<FoodType>("Food").implement({
    fields: (t) => ({
        id: t.exposeID("id", { nullable: false }),
        name: t.exposeString("name", { nullable: false})
    })
})


builder.asEntity(Food, {
    key: builder.selection<{ id: string }>("id"),
    resolveReference: async (parent, args, ctx) => {
        return {
            id: "apple",
            name: "Pink Lady"
        }
    }
})

console.log(printSubgraphSchema(builder.toSchema()))
