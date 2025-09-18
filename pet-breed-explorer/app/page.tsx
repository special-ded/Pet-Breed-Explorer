import { BreedCard } from '@/components/BreedCard';
import { getAllRandomBreeds } from '@/lib/api';

export default async function HomePage() {
    const breeds = await getAllRandomBreeds(20);

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Pet Breed Explorer</h1>
                <p className="text-gray-600">Discover amazing cat and dog breeds</p>
            </header>

            {breeds.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500">No breeds found. Please try again later.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {breeds.map((breed) => (
                        <BreedCard key={`${breed.type}-${breed.id}`} breed={breed} />
                    ))}
                </div>
            )}
        </div>
    );
}