import React from "react";
import Transition from "../../features/Transition/Transition";
const Portfolio = [
  {
    image: "/adshop.png",
    title: "AdShop – Exclusive Discounts and Offers",
    Description: "A WordPress-based website created for AdShop, a platform connecting users with exclusive discounts and offers across various categories, including hotels, health & beauty, and interior design. The site features a user-friendly search system, highlighted deals, and an intuitive interface for effortless navigation and engagement.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://ad-shop.pl/"
},

  {
    image: "/adhotel.png",
    title: "AdAwards – Marketing and Event Services for Hotels",
    Description: "A WordPress-based website showcasing AdAwards' expertise in providing tailored marketing and event solutions for the hospitality industry. Featuring a portfolio of successful campaigns, including Google Ads, TikTok promotions, and custom web development, the site emphasizes innovative strategies designed to elevate hotel brands and drive engagement.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://adhotel.pl/"
},

  {
    image: "/admeble.png",
    title: "AdAwards – Furniture Industry Marketing Agency",
    Description: "A WordPress-based website showcasing AdAwards' expertise in marketing for the furniture industry. The site highlights services such as branding, web development, SEO, e-commerce solutions, and video production. With a modern design and client-focused approach, the platform features a portfolio of successful projects, client testimonials, and detailed service descriptions tailored to elevate furniture brands.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://admeble.przedprojekt.com/"
},

  {
    image: "/gumarkepno.png",
    title: "Gumar Kępno – Truck Service and Maintenance",
    Description: "A WordPress-based website for Gumar Kępno, a trusted truck service provider with over 35 years of experience. The site highlights their comprehensive services, including tachograph calibration, truck electromechanics, mobile service, and tire vulcanization. Designed for user convenience, it features detailed service descriptions, customer reviews, and easy access to contact information.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://www.gumarkepno.pl/"
},

  {
    image: "/queenscarlet.png",
    title: "Queen Scarlet – Advanced Beauty Treatments",
    Description: "A WordPress-based website created for Queen Scarlet, a modern beauty clinic specializing in innovative treatments. The site showcases their services, including cryolipolysis, endermology, and laser collagen stimulation, performed with state-of-the-art equipment like LPG, Schwarz, and CoolTech. Designed to reflect luxury and professionalism, the platform offers detailed treatment descriptions, easy appointment booking, and customer-focused navigation.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://marcin.przedprojekt.com/QueenScarlet2/"
},

  {
    image: "/dombezwad.png",
    title: "Dom Bez Wad – Thermal Modernization and Renewable Energy Solutions",
    Description: "A WordPress-based website for Dom Bez Wad, specializing in thermal modernization and renewable energy installations. The site highlights their comprehensive services, including insulation, heat pumps, and solar panels, designed to enhance energy efficiency and comfort. With an emphasis on sustainability and tailored solutions, the platform showcases their expertise in creating eco-friendly and cost-effective spaces.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://dombezwad.przedprojekt.com/"
},

  {
    image: "/multikon.png",
    title: "Multikon – Furniture Accessories Manufacturer",
    Description: "A WordPress-based website created for Multikon, a leading manufacturer of high-quality furniture accessories. With over 15 years of industry experience, the website showcases their extensive product range, including furniture legs, chair frames, and advanced mechanisms. The site combines a modern design with user-friendly navigation, offering detailed product descriptions and an intuitive contact form for seamless customer engagement.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "http://www.multikon.eu/"
},

  {
    image: "/stys-glass.png",
    title: "Stys-Glass – Glass Processing and Production",
    Description: "A WordPress-based website created for Stys-Glass, a leader in the glass processing industry. The site highlights their advanced services such as glass tempering, balustrade production, and custom mirror designs. Featuring a comprehensive portfolio, an overview of their cutting-edge machinery, and detailed service descriptions, the website emphasizes precision, innovation, and customer satisfaction.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://stys-glass.pl/"
},

  {
    image: "/maciejanka.png",
    title: "Maciejanka – Guesthouse and Event Hall",
    Description: "A WordPress-based website designed for Maciejanka, a three-star guesthouse near Kobyla Góra. The site highlights the property’s serene location, family-friendly amenities, and services for events like conferences and family gatherings. With features like a gallery, detailed pricing, and contact information, the website serves as a comprehensive platform for bookings and showcasing the charm of this picturesque destination.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://maciejanka.pl/"
},

  {
    image: "/piwlegnica.png",
    title: "Powiatowy Inspektorat Weterynarii w Legnicy",
    Description: "A WordPress-based website designed for the County Veterinary Inspectorate in Legnica. The site provides essential administrative information, legal regulations, and updates on veterinary services. With a focus on accessibility, the website includes features like downloadable forms, news updates, and details on emergency animal slaughter procedures, ensuring transparency and ease of use for the public.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://www.piwlegnica.pl/"
},

  {
    image: "/katex.png",
    title: "Katex – Recycling and Purchase of Catalytic Converters",
    Description: "A WordPress-based website designed for a company specializing in the recycling of catalytic converters and ceramic monoliths. The site emphasizes their eco-friendly approach, innovative recycling methods, and transparent pricing based on the latest market rates for precious metals. Featuring detailed service descriptions, a blog for industry updates, and a user-friendly interface, it serves as an essential resource for clients interested in sustainable recycling solutions.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://katex.info/"
},

  {
    image: "/inbc.png",
    title: "INBC – Independent Insurance Broker",
    Description: "A WordPress-based website created for a licensed insurance broker offering professional advisory and negotiation services. The site provides comprehensive information on insurance options for various sectors, including corporate clients, transportation, renewable energy, and more. With a clear and modern design, the website features a FAQ section, detailed service descriptions, and a contact form for easy customer interaction.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://inbc.pl/"
},

  {
    image: "/rcomservice.png",
    title: "RCOM SERVICE – Website for IT and Security Services",
    Description: "A WordPress-based website developed for a company specializing in IT support, security systems, and monitoring solutions. The site features detailed service descriptions, a portfolio of completed projects, and a contact form for quick customer inquiries. With a clean and professional design, it highlights the company's expertise in system installation, alarm systems, LAN networks, and server room construction.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://rcom-service.pl/"
},

  {
    image: "/zielonapietruszka.png",
    title: "Zielona Pietruszka – Website for a Restaurant",
    Description: "A WordPress-based website created for a cozy restaurant in Zgorzelec. The site highlights the restaurant’s fresh and homemade cuisine, its warm interior, and a wide variety of dishes, including vegetarian and gluten-free options. Featuring an intuitive navigation, the website includes a daily menu section, a gallery, and contact information to enhance user experience.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://zielonapietruszka.com.pl/"
},
  {
    image: "/partytales.png",
    title: "PartyTales – Website for Event Decoration Services",
    Description: "A WordPress-based website designed for a company specializing in event decorations and themed parties. The site highlights the company’s services, such as light decorations, balloon sets, and a rental service for event accessories. With a focus on creativity and storytelling, the website features an elegant, user-friendly design, a gallery of past projects, and a blog for event inspiration.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://partytales.pl/"
  },
  {
    image: "/maxnetcv.png",
    title: "Maxnet – Website for a Local Internet Provider",
    Description: "A professional website designed for a local internet provider offering fiber-optic internet, television, and telecommunication services. Built to showcase the company’s services, pricing packages, and contact details. The site features an intuitive navigation system, service descriptions, customer support options, and a modern, responsive design tailored to the needs of individual and business clients.",
    techStack: "WordPress / Custom CSS / Elementor",
    url: "https://maxnetboleslawiec.pl/"
  },

  {
    "image": "/magiaorientuCV.png",
    "title": "Magia Orientu – Website for a Massage Therapist",
    "Description": "A WordPress-based website designed for a massage therapist specializing in oriental treatments. The site features service descriptions, a photo gallery, a pricing section, and a contact form. Built to reflect a calming and aesthetic design tailored to the theme of oriental massages.",
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
