const {
    buildSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = require('graphql');
const gadgetGraphQLType = require('../../modules/GraphQL/gadgetType');
const Gadget = require('./../../modules/GraphQL/model');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        gadget: {
            type: gadgetGraphQLType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return Gadget.findById(args.id);
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery
});