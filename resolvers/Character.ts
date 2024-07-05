import { Character, Episode } from "../types.ts";
import { GraphQLError } from "graphql"

const Character = {
    episode: async(parent: Character): Promise<Episode[]> =>{
        const epidosesPromesa: Promise<Episode>[] = parent.episode.map(async element => {
            
            const response = await fetch(element);
            
            if(!response) throw new GraphQLError("Episodio no encontrado");

            const data = await response.json();
            
            const episodio: Episode = {
                id: data.id,
                name: data.name,
                characters: data.characters,
                air_date: data.air_date,
                episode: data.episode,
                url: data.url,
                created: data.created
            }
            return episodio;
        });

        const episodes: Episode[] = await Promise.all(epidosesPromesa);

        return episodes;
    }
}

export default Character;