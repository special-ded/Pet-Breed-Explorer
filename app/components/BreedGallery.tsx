import Image from 'next/image'
import {BreedImage} from '@/lib/types';

export function BreedGallery({images, breedName}: { images: BreedImage[]; breedName: string }) {
    if (images.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">No images available for this breed.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image) => (
                <div key={image.id} className="relative group overflow-hidden rounded-lg cursor-pointer">
                    <Image
                        src={image.url}
                        width={400}
                        height={300}
                        alt={`${breedName} image`}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                </div>
            ))}
        </div>
    );
}