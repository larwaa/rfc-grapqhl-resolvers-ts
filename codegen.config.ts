import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./schema.graphql",
    generates: {
        "./types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                federation: true,
                useIndexSignature: true,
                /**
                 * Adding `avoidOptionals` doesn't fix the issue as now every single field resolver must be implemented,
                 * even for the fields are returned from the parent resolver.
                 */
                // avoidOptionals: true,
                mappers: {
                    Food: "./mappers.js#FoodMapper",
                    Meal: "./mappers.js#MealMapper",
                }
            },
        }
    }
}

export default config;