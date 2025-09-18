import axios from "axios";
import {Breed, BreedImage} from "@/lib/types";

const DOG_API_BASE = 'https://api.thedogapi.com/v1';
const CAT_API_BASE = 'https://api.thecatapi.com/v1';
const DEFAULT_LIMIT = 10;

const apiCall = async <T>(url: string, params?: any): Promise<T> => {
    try {
        const response = await axios.get(url, {params});
        return response.data;
    } catch (error) {
        console.error(`API Error (${url}):`, error);
        throw error;
    }
};

export const dogAPI = {
    getRandomBreeds: async (limit: number = DEFAULT_LIMIT): Promise<Breed[]> => {
        const breeds = await apiCall<any[]>(`${DOG_API_BASE}/breeds`, {limit});
        return breeds.map(breed => ({...breed, type: 'dog' as const}));
    },

    getBreedById: async (id: string): Promise<Breed | null> => {
        try {
            const breed = await apiCall<any>(`${DOG_API_BASE}/breeds/${id}`);
            return {...breed, type: 'dog' as const};
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                return null;
            }
            throw error;
        }
    },

    getBreedImages: async (breedId: string, limit: number = DEFAULT_LIMIT): Promise<BreedImage[]> => {
        return apiCall<BreedImage[]>(`${DOG_API_BASE}/images/search`, {
            breed_id: breedId,
            limit
        });
    }
};

export const catAPI = {
    getRandomBreeds: async (limit: number = DEFAULT_LIMIT): Promise<Breed[]> => {
        const breeds = await apiCall<any[]>(`${CAT_API_BASE}/breeds`, {limit});
        return breeds.map(breed => ({...breed, type: 'cat' as const}));
    },

    getBreedById: async (id: string): Promise<Breed | null> => {
        try {
            const breed = await apiCall<any>(`${CAT_API_BASE}/breeds/${id}`);
            return {...breed, type: 'cat' as const};
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                return null;
            }
            throw error;
        }
    },

    getBreedImages: async (breedId: string, limit: number = DEFAULT_LIMIT): Promise<BreedImage[]> => {
        return apiCall<BreedImage[]>(`${CAT_API_BASE}/images/search`, {
            breed_ids: breedId,
            limit
        });
    }
};

export const getAllRandomBreeds = async (limit: number = 20): Promise<Breed[]> => {
    try {
        const halfLimit = Math.ceil(limit / 2);
        const [dogBreeds, catBreeds] = await Promise.all([
            dogAPI.getRandomBreeds(halfLimit),
            catAPI.getRandomBreeds(halfLimit)
        ]);

        return [...dogBreeds, ...catBreeds].sort(() => Math.random() - 0.5);
    } catch (error) {
        console.error('Error fetching all breeds:', error);
        return [];
    }
};

export const getBreedWithImages = async (id: string, type: 'dog' | 'cat') => {
    try {
        const api = type === 'dog' ? dogAPI : catAPI;
        const [breed, images] = await Promise.all([
            api.getBreedById(id),
            api.getBreedImages(id)
        ]);

        return {breed, images: images || []};
    } catch (error) {
        console.error('Error fetching breed with images:', error);
        return {breed: null, images: []};
    }
};