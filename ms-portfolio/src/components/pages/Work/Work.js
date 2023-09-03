import React from "react";

const Portfolio = [
  {
    image: "/Portfolio1.png",
    title: "Full-Stack e-commerce App",
    Description:
      "The app allows users to browse products, manage a shopping cart, and place orders, all while interfacing with a MySQL database for robust data storage.",
    techStack: "NestJS / React / MySQL",
    url: "https://github.com/SiwsON1/Great_Shirt_App",
  },
  {
    image: "/Portfolio3.png",
    title: "Simple Chat-App",
    Description:
      "Real-time chat application with a frontend that prompts for a username and then displays a live message feed. Built with event-driven server-client communication, the server maintains a message array and notifies all clients when a new message is added.",
    techStack: "WebSocket / NestJS",
    url: "https://github.com/SiwsON1/Chat-with-friends",
  },
  {
    image: "/Portfolio2.png",
    title: "Full-Stack CRUD App",
    Description:
      "Developed a comprehensive classifieds board that offers end-to-end user functionalities, from seamless browsing and searching of listings to user authentication and CRUD operations for posts. The platform enables real-time updates and uses advanced filtering techniques to improve user experience.",
    techStack: "NestJS / React / MongoDB",
    url: "https://github.com/SiwsON1/Announcements_Wall/",
  },
  {
    image: "/Portfolio4.png",
    title: "Full-Stack Concert App",
    Description:
      "New Wave Festival ticket ordering application. Built on React and Redux, this platform offers real-time seat availability to ensure a smooth ticket booking experience for festival-goers.",
    techStack: "MongoDB / CloudDB / WebSocket",
    url: "https://github.com/SiwsON1/rest-api-practice",
  },
  {
    image: "/Portfolio9.png",
    title: "Weather-checking App",
    Description:
      "This project is a simple weather-checking application built with React. Users can enter a city name to fetch real-time weather conditions and temperature data from an external API.",
    techStack: "React / External API",
    url: "https://github.com/SiwsON1/Weather-app/",
  },
  {
    image: "/Portfolio11.png",
    title: "Component for customizing T-shirt products",
    Description:
      "The app allows users to select various attributes like color and size, updating the product image and price in real-time. It serves as a practical exercise for understanding React states, parameters, and component re-rendering",
    techStack: "React",
    url: "https://github.com/SiwsON1/react-product-personalizer",
  },
  {
    image: "/Portfolio13.png",
    title: "Pizzeria",
    Description:
      "This is a web-based platform for a pizzeria, enabling users to order pizza and other menu items. The project is implemented using JavaScript, HTML, CSS, and other front-end technologies..",
    techStack: "CSS / JavaScript / HTML",
    url: "https://github.com/SiwsON1/project-pizzeria",
  },
  {
    image: "/Portfolio6.png",
    title: "Frontend Blog App",
    Description:
      "This project focuses on CRUD functionality, allowing users to create, read, update, and delete posts.",
    techStack: "React / Redux",
    url: "https://github.com/SiwsON1/react-workshop-blog",
  },
  {
    image: "/Portfolio5.png",
    title: "Dashboard for waitstaff",
    Description:
      "The Pizzeria Table Management System is a full-stack application designed to optimize restaurant operations by enabling real-time table management.The app streamlines table booking, status updates, and billing, enhancing overall efficiency and staff productivity",
    techStack: "React / Redux",
    url: "https://github.com/SiwsON1/pizzeria-waiters-app",
  },
  {
    image: "/Portfolio7.png",
    title: "Secured Application",
    Description:
      "The project involves a photography competition website where the primary functionalities include displaying submitted photos on the home page and a form on the 'Submit a photo' page for users to enter the contest",
    techStack: "React / Redux / Express",
    url: "https://github.com/SiwsON1/PortraitMaster-Vulnerabilities",
  },
  {
    image: "/Portfolio8.png",
    title: "Real-Time To-Do List",
    Description:
      "This project is a Real-Time To-Do List application built with React and Socket.IO. The server and each client maintain a synchronized array of tasks, making the list shareable across multiple users in real-time",
    techStack: "React / Socket.io",
    url: "https://github.com/SiwsON1/To-do-socketio",
  },
  {
    image: "/Portfolio10.png",
    title: "To-do list with column-based categorization",
    Description:
      "This is a simple React application that functions as a to-do list with column-based categorization.",
    techStack: "React / Webpack",
    url: "https://github.com/SiwsON1/react-prework",
  },
  {
    image: "/Portfolio12.png",
    title: "Music service application",
    Description:
      "This is a web-based music service application that aims to provide a user-friendly platform to explore, search, and discover music tracks. The project includes three main pages: Home, Search, and Discover.",
    techStack: "CSS / JavaScript / Handlebars / Bootstrap",
    url: "https://github.com/SiwsON1/Project-musicService",
  },
];
const Work = () => {
  return (
    <div className="mt-40 items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-12">My Work</h1>
      <p className="text-center mb-24 w-1/2 mx-auto md:text-lg">
        This section showcases a curated collection of my projects, mostly
        focused on educational growth. For more details and live demos, visit
        the linked GitHub repositories. Projects are listed from newest to
        oldest, allowing you to track my learning journey as a web developer.
      </p>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-2 lg:grid-cols-2 gap-y-24 gap-x-2">
        {Portfolio.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="flex flex-col items-center p-4 transition duration-300 hover:bg-main3 rounded-lg group"
          >
            <div className="flex items-start">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover h-32 w-40 mb-4 rounded border-2 border-transparent group-hover:border-main" // Dodano group-hover:border-2 i group-hover:border-blue-500
              />
              <div className="w-1/2 ml-4">
                <h3 className="text-xl font-bold mb-2 text-center text-pink">
                  {project.title}
                </h3>
                <p>{project.Description}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-4">
              {project.techStack.split(" / ").map((tech, i) => (
                <span
                  key={i}
                  className="m-1 px-3 py-1 text-sm font-bold text-center rounded-full bg-main text-pink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
