export const typeDefs = `#graphql
    
    type Location {
        name: String!,
        url: String!
    }

    type Origin {
        name: String!,
        url: String!
    }

    type Character {
        id: ID!,
        name: String!,
        status: String!,
        species: String!,
        type: String!,
        gender: String!,
        origin: Origin!,
        location: Location!,
        image: String!,
        created: String!,
        episode: [Episode!]!
    }

    type Episode {
        id: ID!,
        name: String!,
        characters: [Character!]!
        air_date: String!,
        episode: String!,
        url: String!,
        created: String!,
    }

    type Query {
        character(id: ID!): Character 
        charactersByIds(ids: [ID!]!): [Character] 
    } 
`