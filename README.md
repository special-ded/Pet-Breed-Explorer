### Pawsome Pals: Cat & Dog Breed Explorer

A modern, responsive web application built to explore various cat and dog breeds. Discover random breeds on the homepage and dive into detailed views for each one, complete with image galleries.


<img src="https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js" alt="Next.js Badge"/>

<img src="https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript" alt="TypeScript Badge"/>

<img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind_CSS Badge"/>

<img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel Badge"/>


Live Demo: https://pet-breed-explorer-pi.vercel.app/

### 🚀 Features

Homepage: Displays a grid of random cat and dog breed cards fetched from their respective APIs.

Breed Cards: Each card features a high-quality image and the name of the breed.

Dynamic Breed Pages: Click any card to navigate to a dedicated page with detailed information and a gallery of images for that specific breed.

Fully Responsive: Seamless experience on desktop, tablet, and mobile devices, designed with Tailwind CSS.

Type-Safe: Built with TypeScript for improved developer experience and code reliability.

### 🛠 Tech Stack

This project was built using the following technologies:

Framework: Next.js 15+ (Using the App Router)

Language: TypeScript

Styling: Tailwind CSS

HTTP Client: Native fetch API

Deployment Platform: Vercel

APIs:

The Dog API - For all dog breed data and images.

The Cat API - For all cat breed data and images.
    
### 🔧 Key Implementation Details

Data Fetching: Utilizes Next.js 15's enhanced fetch API with async/await in Server Components for efficient server-side rendering (SSR) and static site generation (SSG).

Dynamic Routing: Implements Next.js's dynamic routes (app/breed/[breedId]/page.tsx) to create a unique page for each breed based on its ID.

TypeScript Integration: Full type safety is enforced with custom interfaces for API responses (e.g., DogBreed, CatBreed), ensuring data structure consistency.

Responsive Grid: The homepage uses a responsive Tailwind CSS grid (grid-cols-1 sm:grid-cols-2 md:grid-cols-3) that adapts to different screen sizes.

Error Handling: API fetch calls are wrapped in try-catch blocks to gracefully handle potential network errors.
