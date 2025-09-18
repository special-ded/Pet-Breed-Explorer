import Image from 'next/image';
import Link from 'next/link';
import {Breed} from '@/lib/types';
import {getBreedWithImages} from "@/lib/api";

function getPlaceholderImage(type: 'dog' | 'cat'): string {
    return type === 'dog'
        ? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=300&fit=crop'
        : 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop'
}

export async function BreedCard({breed}: { breed: Breed }) {
    const breedWithImages = await getBreedWithImages(breed.id, breed.type)
    const firstImageUrl = breedWithImages.images[0]?.url || getPlaceholderImage(breed.type);

    return (
        <Link href={`/breed/${breed.type}/${breed.id}`} className="block group">
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <div className="relative h-48 w-full">
                    <Image
                        src={firstImageUrl}
                        alt={breed.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                        className="absolute top-2 right-2 bg-white text-gray-800 px-2 py-1 rounded-full text-xs font-semibold capitalize">
                        {breed.type}
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {breed.name}
                    </h3>

                    {breed.temperament && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                            {breed.temperament}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}

