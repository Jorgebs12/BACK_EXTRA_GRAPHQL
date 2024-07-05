import { Character, Episode } from "../types.ts";
import { GraphQLError } from "graphql"

const Episode = {
    characters: async(parent: Episode): Promise<Character[]> => {
        const ch: Promise<Character>[] = parent.characters.map(async element => {
            
            const response = await fetch(element);

            if(!response) throw new GraphQLError("Personaje no encontrado");

            
            const data = await response.json();
            
            const character ={
                id: data.id,
                name: data.name,
                episode: data.episode,
                status: data.status,
                species: data.species,
                type: data.type,
                gender: data.gender,
                //origin: Location;
                //location: data.location,
                image: data.image,
                created: data.created
            }

            return character;
        })

        const characters = await Promise.all(ch);
        return characters;
    }
}
export default Episode;