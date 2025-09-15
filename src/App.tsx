import React, { useState } from 'react';
import { Play } from 'lucide-react';



import PosterUrl from './assets/backgroundImage.png';
import userAvatar from './assets/user.png';
import AIToolsCarousel from './Components/MoviesCarsole';
// ===============================
// Types
// ===============================
interface MovieBannerProps {
  title?: string;
  description?: string;
  duration?: string;
  rating?: number;
  releaseYear?: number;
  genre?: string[];
  director?: string;
  cast?: string[];
  trailerUrl?: string;
  backgroundImage?: string;
  userAvatar?: string;
  userName?: string;
}


// ===============================
// Main Home Page
// ===============================
export default function App() {
  // Banner Component
  const MainBanner: React.FC<MovieBannerProps> = ({
    title = "Lorem ipsum dolor sit amet",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in",
    duration = "14hr",
    trailerUrl = "#",
    // userAvatar = "../assets/user.png",
    userName = "James Smith",
  }) => {
    return (
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}  <div className="absolute ">
          <img
            src={PosterUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>


        <div className="relative z-10 flex flex-col justify-end h-screen">
          <div className="flex items-center justify-between pl-8 pb-10 md:pb-14 lg:pb-20">

            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {title}
              </h1>

              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
                {description}

              </p>

              {/* Actions */}
              <div className="flex items-center gap-4 flex-wrap">
                {/* Play Button */}
                <button
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 md:px-7 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-colors duration-200 shadow-lg"
                  onClick={() => window.open(trailerUrl, "_blank")}
                >
                  <Play className="w-5 h-5 md:w-6 md:h-6" />
                  Play
                </button>

                {/* User Info */}
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-md px-3 py-2 md:px-4 md:py-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                    <img
                      src={userAvatar || "/placeholder.svg"}
                      alt={userName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        target.nextElementSibling?.classList.remove("hidden")
                      }}
                    />
                  </div>
                  <span className="text-sm md:text-base font-medium hidden sm:block">
                    {userName}
                  </span>
                </div>
              </div>
            </div>


            <div className="text-white text-sm md:text-base font-medium px-4 py-3  
                      bg-gradient-to-r from-transparent to-white/20 backdrop-blur-md 
                      border-r-4 border-orange-500 shadow-md self-center">
              Duration: {duration}
            </div>
          </div>
        </div>
      </div>


    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-900 via-black to-gray-900">
      <MainBanner />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        {sectionHeader()}
        <AIToolsCarousel />

      </div>
    </div>
  );
}


export const sectionHeader = () => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-12">
    {/* Title */}
    <h1 className="text-2xl sm:text-3xl lg:text-4xl  text-white tracking-tight">
      Explore and Learn AI Tools
    </h1>
  </div>
);


