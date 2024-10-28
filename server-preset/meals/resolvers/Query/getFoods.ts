
        import type   { QueryResolvers } from './../../../types.generated.js';
        export const getFoods: NonNullable<QueryResolvers['getFoods']> = async (_parent, _arg, _ctx) => { 
                return [{
                        id: "apple",
                        name: "Pink Lady"
                }, {
                        id: "orange",
                        name: "Cevita"
                }]
         };