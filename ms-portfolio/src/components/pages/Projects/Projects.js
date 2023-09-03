import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Projects.module.scss";
import Transition from "../../features/Transition/Transition";


const leftGalleryItems = [
  {
    image: "/Portfolio1.png",
    description: "Full-Stack e-commerce App",
    techStack: "NestJS / React / MySQL",
    url: "https://github.com/SiwsON1/Great_Shirt_App",
  },
  {
    image: "/Portfolio3.png",
    description: "Simple Chat-App",
    techStack: "WebSocket / NestJS",
    url: "https://github.com/SiwsON1/Chat-with-friends",
  },
  {
    image: "/Portfolio2.png",
    description: "Full-Stack CRUD App",
    techStack: "NestJS / React / MongoDB",
    url: "https://github.com/SiwsON1/Announcements_Wall/",
  },
  {
    image: "/Portfolio4.png",
    description: "Full-Stack Concert App",
    techStack: "MongoDB / CloudDB / WebSocket",
    url: "https://github.com/SiwsON1/rest-api-practice",
  },
  {
    image: "/Portfolio9.png",
    description: "Weather-checking App",
    techStack: "React / External API",
    url: "https://github.com/SiwsON1/Weather-app/",
  },
  {
    image: "/Portfolio11.png",
    description: "Component for customizing T-shirt products",
    techStack: "React",
    url: "https://github.com/SiwsON1/react-product-personalizer",
  },
  {
    image: "/Portfolio13.png",
    description: "Pizzeria",
    techStack: "CSS / JavaScript / Html",
    url: "https://github.com/SiwsON1/project-pizzeria",
  },
];

const rightGalleryItems = [
  {
    image: "/Portfolio6.png",
    description: "Frontend Blog App",
    techStack: "React / Redux",
    url: "https://github.com/SiwsON1/react-workshop-blog",
  },
  {
    image: "/Portfolio5.png",
    description: "Dashboard for waitstaff",
    techStack:
      "This application serves as an extension to existing pizzeria module",
    extraInfo: "React / Redux",
    url: "https://github.com/SiwsON1/pizzeria-waiters-app",
  },
  {
    image: "/Portfolio7.png",
    description: "Secured Application",
    techStack: "React / Redux / Express",
    url: "https://github.com/SiwsON1/PortraitMaster-Vulnerabilities",
  },
  {
    image: "/Portfolio8.png",
    description: "Real-Time To-Do List",
    techStack: "React / Socket.io",
    url: "https://github.com/SiwsON1/PortraitMaster-Vulnerabilities",
  },
  {
    image: "/Portfolio10.png",
    description: "To-do list with column-based categorization",
    techStack: "React / Webpack",
    url: "https://github.com/SiwsON1/react-prework",
  },
  {
    image: "/Portfolio12.png",
    description: "Music service application",
    techStack: "CSS / JavaScript / Handlebars / Bootstrap",
    url: "https://github.com/SiwsON1/Project-musicService",
  },
];

const Projects = () => {
  useEffect(() => {
    // Dla lewej galerii
    gsap.registerPlugin(ScrollTrigger);

    const itemsLeft = gsap.utils.toArray(
      `.${styles.galleryLeft.replace("+", "\\+")} .${styles.galleryItem.replace(
        "+",
        "\\+"
      )}`
    );
    itemsLeft.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -70 },
        {
          opacity: 1,
          x: -10,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top bottom ",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    });

    // Dla prawej galerii
    const itemsRight = gsap.utils.toArray(
      `.${styles.galleryRight} .${styles.galleryItem}`
    );
    itemsRight.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: 70 },
        {
          opacity: 1,
          x: 10,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Transition />
      <div className={styles.content}>
        <div className={styles.portfolio}>
          <div className={styles.container1}>
            <h1 className="text-4xl font-bold mt-20 text-white text-center">
              My Work
            </h1>
            <main className={`${styles.gallery} flex`}>
              <div
                data-speed="0.2"
                className={`${styles.galleryLeft} flex flex-col items-center`}
              >
                {leftGalleryItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`${styles.galleryItem} ${styles.hoverContainer}`}
                    >
                      <img src={item.image} alt={item.description} />
                      <div className={`${styles.hoverOverlay}`}>
                        <div className={`${styles.hoverContent} text-xs sm:text-xs md:text-base lg:text-xl`}>
                          <p>{item.description}</p>
                          <p>{item.techStack}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div
                data-speed="0.9"
                className={`${styles.galleryRight} flex flex-col items-center`}
              >
                <div className={`${styles.textBlock} ${styles.galleryItem}`}>
                  <p>
                    This section showcases a curated collection of my projects,
                    mostly focused on educational growth. For more details and
                    live demos, visit the linked GitHub repositories. Projects
                    are listed from newest to oldest, allowing you to track my
                    learning journey as a web developer.
                  </p>
                </div>
                {rightGalleryItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`${styles.galleryItem} ${styles.hoverContainer}`}
                    >
                      <img src={item.image} alt={item.description}/>
                      <div className={`${styles.hoverOverlay}`}>
                        <div className={`${styles.hoverContent}  text-xs sm:text-xs md:text-base lg:text-xl`}>
                          <p>{item.description}</p>
                          <p>{item.techStack}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
