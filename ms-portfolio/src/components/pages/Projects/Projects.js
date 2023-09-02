import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Projects.module.scss";
import Transition from "../../features/Transition/Transition";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    // Dla lewej galerii
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
            scrub: 0.3,

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
                <a
                  href="https://github.com/SiwsON1/Great_Shirt_App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio1.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>Full-Stack e-commerce App</p>
                        <p>NestJS / React / MySQL</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/SiwsON1/Chat-with-friends"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio3.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>Simple Chat-App</p>
                        <p>WebSocket / NestJS</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/SiwsON1/Announcements_Wall/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio2.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>Full-Stack CRUD App</p>
                        <p>NestJS / React / MongoDB</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/SiwsON1/rest-api-practice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio4.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>Full-Stack Concert App</p>
                        <p>MongoDB / CloudDB / WebSocket</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/SiwsON1/Weather-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio9.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>Weather-checking App</p>
                        <p>React / External API</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                    href="https://github.com/SiwsON1/react-product-personalizer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`${styles.galleryItem} ${styles.hoverContainer}`}
                    >
                      <img src="/Portfolio11.png" alt="Alt" />
                      <div className={`${styles.hoverOverlay}`}>
                        <div className={`${styles.hoverContent}`}>
                          <p>Component for customizing T-shirt products</p>
                          <p>React</p>
                        </div>
                      </div>
                    </div>
                </a>
                <a
                    href="https://github.com/SiwsON1/project-pizzeria"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`${styles.galleryItem} ${styles.hoverContainer}`}
                    >
                      <img src="/Portfolio13.png" alt="Alt" />
                      <div className={`${styles.hoverOverlay}`}>
                        <div className={`${styles.hoverContent}`}>
                          <p>Pizzeria</p>
                          <p>CSS / JavaScript / Html</p>
                        </div>
                      </div>
                    </div>
                </a>
              </div>
              <div
                data-speed="0.3"
                className={`${styles.galleryRight} flex flex-col items-center`}
              >
                <div className={`${styles.textBlock} ${styles.galleryItem}`}>
                  <p>
                  This section showcases a curated collection of my projects, mostly focused on educational growth. For more details and live demos, visit the linked GitHub repositories. Projects are listed from newest to oldest, allowing you to track my learning journey as a web developer.
                  </p>
                </div>
                <a
                  href="https://github.com/SiwsON1/react-workshop-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio6.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>Frontend Blog App</p>
                        <p>React / Redux</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/SiwsON1/pizzeria-waiters-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio5.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>Dashboard for waitstaff </p>
                        <p>This application serves as an extension to existing pizzeria module</p>
                        <p>React / Redux</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/SiwsON1/PortraitMaster-Vulnerabilities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio7.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>Secured Application</p>
                        <p>React / Redux / Express</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/SiwsON1/PortraitMaster-Vulnerabilities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio8.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>Real-Time To-Do List</p>
                        <p>React / Socket.io</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/SiwsON1/react-prework"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${styles.galleryItem} ${styles.hoverContainer}`}
                  >
                    <img src="/Portfolio10.png" alt="Alt" />
                    <div className={`${styles.hoverOverlay}`}>
                      <div className={`${styles.hoverContent}`}>
                        <p>To-do list with column-based categorization</p>
                        <p>React / Webpack</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                    href="https://github.com/SiwsON1/Project-musicService"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`${styles.galleryItem} ${styles.hoverContainer}`}
                    >
                      <img src="/Portfolio12.png" alt="Alt" />
                      <div className={`${styles.hoverOverlay}`}>
                        <div className={`${styles.hoverContent}`}>
                          <p>Music service application</p>
                          <p>CSS / JavaScript / Handlebars / Bootstrap</p>
                        </div>
                      </div>
                    </div>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
