export type Location = {
    name: string;
    url: string;
}

export type Origin = {
    name: string;
    url: string;
}

export type Character = {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    created: string;
}

export type Episode = {
    ids: string;
    name: string;
    air_date: string;
    episode: string;
    characters: Character[];
    url: string;
    created: string;
}