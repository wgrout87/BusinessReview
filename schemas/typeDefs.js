const { gql } = require('apollo-server');

const typeDefs = gql`
    type Business {
        businessId: ID!
        name: String
        address: String
        avgStars: Float
        photos(first: Int = 3, offset: Int = 0): [Photo!]!
        reviews(first: Int = 3, offset: Int = 0): [Review!]!
    }

    type User {
        userId: ID!
        name: String
        photos: [Photo!]!
        reviews: [Review!]!
    }

    type Photo {
        business: Business!
        user: User!
        photoId: ID!
        url: String
    }

    type Review {
        reviewId: ID!
        stars: Float
        text: String
        user: User!
        business: Business!
    }

    type Query {
        allBusinesses(first: Int = 10, offset: Int = 0): [Business!]!
        businessBySearchTerm(
          search: String!
          first: Int = 10
          offset: Int = 0
          orderBy: BusinessOrdering = name_asc
        ): [Business!]!
        userById(id: ID!): User
    }

    enum BusinessOrdering {
        name_asc
        name_desc
    }
`;

module.exports = typeDefs;
