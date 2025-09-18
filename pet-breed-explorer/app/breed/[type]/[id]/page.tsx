import Link from 'next/link';
import { BreedGallery } from '@/components/BreedGallery';
import { getBreedWithImages } from '@/lib/api';

export default async function BreedPage({ params }: {params: Promise<{ type: string; id: string }>}) {
    const { type, id } = await params;
    const { breed, images } = await getBreedWithImages(id, type as 'dog' | 'cat');
    console.log(images)
    if (!breed) {
        return (
            <div className="container mx-auto p-4 min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Breed Not Found</h1>
                    <p className="text-gray-600 mb-6">The requested breed does not exist.</p>
                    <Link
                        href="/"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 min-h-screen">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6">
                <Link
                    href="/"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                    ← Back to All Breeds
                </Link>
            </nav>

            {/* Breed Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">{breed.name}</h1>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold capitalize">
            {breed.type}
          </span>
                </div>

                {/* Breed Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {breed.temperament && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">Temperament</h3>
                            <p className="text-gray-600">{breed.temperament}</p>
                        </div>
                    )}

                    {breed.origin && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">Origin</h3>
                            <p className="text-gray-600">{breed.origin}</p>
                        </div>
                    )}

                    {breed.life_span && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">Lifespan</h3>
                            <p className="text-gray-600">{breed.life_span}</p>
                        </div>
                    )}

                    {breed.weight && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">Weight</h3>
                            <p className="text-gray-600">
                                {breed.weight.imperial} lbs ({breed.weight.metric} kg)
                            </p>
                        </div>
                    )}
                </div>

                {/* Additional Details */}
                <div className="space-y-4">
                    {breed.bred_for && (
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Bred For</h3>
                            <p className="text-gray-600">{breed.bred_for}</p>
                        </div>
                    )}

                    {breed.breed_group && (
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Breed Group</h3>
                            <p className="text-gray-600">{breed.breed_group}</p>
                        </div>
                    )}

                    {breed.description && (
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
                            <p className="text-gray-600 leading-relaxed">{breed.description}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Breed Images Gallery */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{breed.name} Gallery</h2>
                <BreedGallery images={images} breedName={breed.name} />
            </div>
        </div>
    );
}
