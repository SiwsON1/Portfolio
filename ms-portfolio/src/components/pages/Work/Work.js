import React from "react";
import Transition from "../../features/Transition/Transition";
const Portfolio = [
  {
    image: "/adshop.png",
    title: "AdShop – Exclusive Discounts",
    Description: "A WordPress site for a platform offering exclusive discounts across categories like hotels and health.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://ad-shop.pl/"
  },
  {
    image: "/adhotel.png",
    title: "AdAwards – Hotel Marketing",
    Description: "Showcasing tailored marketing strategies for the hospitality industry, including campaigns and web development.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://adhotel.pl/"
  },
  {
    image: "/admeble.png",
    title: "AdAwards – Furniture Marketing",
    Description: "A site focusing on branding, SEO, and e-commerce for furniture brands, featuring successful projects.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://admeble.przedprojekt.com/"
  },
  {
    image: "/gumarkepno.png",
    title: "Gumar Kępno – Truck Services",
    Description: "Comprehensive services for trucks, including tachograph calibration, electromechanics, and mobile service.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://www.gumarkepno.pl/"
  },
  {
    image: "/queenscarlet.png",
    title: "Queen Scarlet – Beauty Clinic",
    Description: "A website for a modern beauty clinic offering treatments like cryolipolysis and laser collagen stimulation.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://marcin.przedprojekt.com/QueenScarlet2/"
  },
  {
    image: "/dombezwad.png",
    title: "Dom Bez Wad – Energy Solutions",
    Description: "Thermal modernization and renewable energy solutions, including insulation and heat pumps.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://dombezwad.przedprojekt.com/"
  },
  {
    image: "/multikon.png",
    title: "Multikon – Furniture Accessories",
    Description: "Showcasing a manufacturer of high-quality furniture accessories like legs and chair frames.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "http://www.multikon.eu/"
  },
  {
    image: "/stys-glass.png",
    title: "Stys-Glass – Glass Processing",
    Description: "Highlights advanced services like glass tempering, balustrades, and custom mirrors.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://stys-glass.pl/"
  },
  {
    image: "/maciejanka.png",
    title: "Maciejanka – Guesthouse",
    Description: "Features amenities and event hosting at a three-star guesthouse near Kobyla Góra.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://maciejanka.pl/"
  },
  {
    image: "/piwlegnica.png",
    title: "Veterinary Inspectorate",
    Description: "Provides administrative and legal information for the Veterinary Inspectorate in Legnica.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://www.piwlegnica.pl/"
  },
  {
    image: "/katex.png",
    title: "Katex – Recycling",
    Description: "A platform for recycling catalytic converters with transparent pricing and eco-friendly methods.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://katex.info/"
  },
  {
    image: "/inbc.png",
    title: "INBC – Insurance Broker",
    Description: "Provides tailored insurance solutions for corporate clients and various sectors.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://inbc.pl/"
  },
  {
    image: "/rcomservice.png",
    title: "RCOM SERVICE – IT Solutions",
    Description: "Features IT and security services like LAN setup, monitoring, and server installation.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://rcom-service.pl/"
  },
  {
    image: "/zielonapietruszka.png",
    title: "Zielona Pietruszka – Restaurant",
    Description: "Showcases a cozy restaurant offering fresh dishes, including vegetarian and gluten-free options.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://zielonapietruszka.com.pl/"
  },
  {
    image: "/partytales.png",
    title: "PartyTales – Event Decorations",
    Description: "Features services like balloon sets, light decorations, and accessory rentals for themed events.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://partytales.pl/"
  },
  {
    image: "/maxnetcv.png",
    title: "Maxnet – Internet Provider",
    Description: "Highlights services and pricing for a local fiber-optic internet and telecom provider.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://maxnetboleslawiec.pl/"
  },

  {
    "image": "/magiaorientuCV.png",
    "title": "Magia Orientu – Website for a Massage Therapist",
    "Description": "A WordPress-based website designed for a massage therapist specializing in oriental treatments.",
    "techStack": "WordPress / Custom CSS / Elementor",
    "url": "https://magiaorientu-boleslawiec.pl/"
},
   {
    "image": "/Portfolio0.png",
    "title": "Fence Configurator for Galabau Darius",
    "Description": "A Next.js application for a fencing and gardening company, showcasing services and projects with an instant quote feature, gallery, and admin panel. Built with Next.js, React, and secured by Clerk.",
    "techStack": "Next.js / React / Clerk / Tailwind",
    "url": "https://galabau-darius.de/",
    },
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
      <Transition />
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
            className="flex flex-col items-center p-4 transition duration-300 hover:bg-main2 rounded-lg group"
          >
            <div className="sm:flex sm:flex-col md:flex-row lg:flex-row xl:flex-row items-start">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover sm:h-full sm:w-full md:h-32 lg:h-32 xl:h-32 md:w-40 lg:w-40 xl:w-40 mb-4 sm:mb-4 md:mb-0 lg:mb-0 xl:mb-0 rounded border-2 border-transparent group-hover:border-main"
              />
              <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ml-4">
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
