export interface Breed {
    id: string;
    name: string;
    temperament?: string;
    origin?: string;
    life_span?: string;
    weight?: { imperial: string; metric: string };
    bred_for?: string;
    breed_group?: string;
    description?: string;
    type: 'dog' | 'cat';
    image?: BreedImage
}

export interface BreedImage {
    id: string;
    url: string;
    width: number;
    height: number;
}