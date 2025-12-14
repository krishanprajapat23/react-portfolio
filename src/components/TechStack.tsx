// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";



// importing all the tech images.
import HTMLImg from "../assets/images/html.webp";
import CSSImg from "../assets/images/css.webp";
import SCSSImg from "../assets/images/scss.webp";
import JSImg from "../assets/images/js.webp";
import TSCImg from "../assets/images/tsc.webp";
import BootstrapImg from "../assets/images/bootstrap.webp";
import TailwindImg from "../assets/images/tailwind.webp";
import ReactImg from "../assets/images/react.webp";
import GitImg from "../assets/images/github.webp";
import PSImg from "../assets/images/ps.webp";
import FigmaImg from "../assets/images/figma.webp";

interface Tech {
  id: number;
  title: string;
  imageSrc: string;
}

const techData: Tech[] = [
  { id: 1, title: "HTML5", imageSrc: HTMLImg },
  { id: 2, title: "CSS3", imageSrc: CSSImg },
  { id: 3, title: "SCSS", imageSrc: SCSSImg },
  { id: 4, title: "JavaScript", imageSrc: JSImg },
  { id: 5, title: "TypeScript", imageSrc: TSCImg },
  { id: 6, title: "Bootstrap", imageSrc: BootstrapImg },
  { id: 7, title: "Tailwind CSS", imageSrc: TailwindImg },
  { id: 8, title: "React", imageSrc: ReactImg },
  { id: 9, title: "GitHub", imageSrc: GitImg },
  { id: 10, title: "Photoshop", imageSrc: PSImg },
  { id: 11, title: "Figma", imageSrc: FigmaImg },
];

const TechStack = () => {
  return (
    <section id="techstack" className="group w-full py-20">
      <div className="container mx-auto px-4">
        <div className="p-2 mb-5">
          <h2 className="text-center capitalize">
            <span className="group-hover:text-(--primary-color) transition-colors">Technologies</span> I work with.
          </h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          allowTouchMove={false}
          simulateTouch={false}
          keyboard={false}
          mousewheel={false}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: true,
            stopOnLastSlide: false,
          }}
          speed={8000}
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          freeMode={false}
          breakpoints={{
            390: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          className="w-full py-10 select-none"
        >
          {techData.map((tech) => (
            <SwiperSlide key={tech.id}>
              <div className="group/img-wrapper m-2 overflow-hidden aspect-square rounded-md">
                <img
                  src={tech.imageSrc}
                  alt={tech.title}
                  title={tech.title}
                  className="h-full w-full object-cover transition-transform duration-2000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/img-wrapper:scale-[1.15] group-hover/img-wrapper:rotate-[5deg]"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechStack;
