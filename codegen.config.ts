import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
    generates: {
        "./current/types.ts": {
            schema: "./current/schema.graphql",
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
        },
        "./server-preset/": defineConfig({
            emitLegacyCommonJSImports: false,
            typesPluginsConfig: {
                federation: true,
            }
        }, {
            schema: "./server-preset/**/schema.graphql",
        })
    }
}

export default config;