import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronRight } from "lucide-react";
import PosterImg from "../assets/Poster.png";
import { useState } from "react";
import user from "../assets/user.png";
interface ToolCard {
  id: number;
  title: string;
  image: string;
  rating: number;
  author: string;
  category: string;
}

const toolsData: ToolCard[] = Array(6).fill({
  id: 1,
  title: "MIDWAY",
  image: "../assets/Poster.png",
  rating: 4.5,
  author: "James Smith",
  category: "AI Video",
}).map((item, i) => ({ ...item, id: i + 1 }));

export default function AIToolsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "free",
    slides: { perView: 4.5, spacing: 16 },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 1.2, spacing: 12 } },
      "(max-width: 1024px)": { slides: { perView: 2.5, spacing: 14 } },
      "(max-width: 1280px)": { slides: { perView: 3.5, spacing: 15 } },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const nextSlide = () => instanceRef.current?.next();
  const prevSlide = () => instanceRef.current?.prev();

  const isAtStart = currentSlide === 0;
  const isAtEnd =
    loaded && instanceRef.current
      ? currentSlide >=
        instanceRef.current.track.details.slides.length -
          Math.ceil(instanceRef.current.options.slides?.perView || 1)
      : false;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 relative">
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {toolsData.map((tool) => (
          <div key={tool.id} className="keen-slider__slide">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer relative">
              {/* Image */}
              <div className="relative w-full h-[480px] overflow-hidden">
                <img
                  src={PosterImg || "/placeholder.svg"}
                  alt={tool.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Glass Effect Text */}
            <div className="absolute flex items-center bottom-3 left-3 bg-black/40 backdrop-blur-md rounded-full text-white p-2 gap-2">
  <img src={user} alt={tool.author} className="w-10 h-10 rounded-full object-cover" />
  <p className="text-sm truncate pr-2">{tool.author}</p>
</div>

            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      {!isAtEnd && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-0 bottom-0 w-15
                     bg-gradient-to-l from-transparent to-black/20
                     backdrop-blur-sm
                     flex items-center justify-center
                     transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>
      )}

      {/* Prev Button */}
      {!isAtStart && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-0 bottom-0 w-15
                     bg-gradient-to-r from-transparent to-black/20
                     backdrop-blur-md
                     flex items-center justify-center
                     transition-all duration-300 z-10 group"
          aria-label="Previous slide"
        >
          <ChevronRight className="w-10 h-10 text-white rotate-180 group-hover:scale-110 transition-transform duration-200" />
        </button>
      )}
    </div>
  );
}
