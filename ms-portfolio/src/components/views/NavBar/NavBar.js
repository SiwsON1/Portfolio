import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaLinkedin, FaUserAlt, FaGithub, FaProjectDiagram, FaCode } from 'react-icons/fa';
import '../../../styles/global.scss';

const Navbar = () => {
  const [activeHref, setActiveHref] = useState(null);

  const handleMouseOver = (href) => {
    setActiveHref(href);
  };

  const handleMouseOut = () => {
    setActiveHref(null);
  };

  return (
    <nav className="h-full w-full rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 p-3 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <RouterLink to="/" className="text-2xl font-bold text-center md:text-left cursor-pointer">
          Marcin Siwonia
        </RouterLink>

        <div className="flex space-x-4 md:justify-end">
          {[
            { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/marcinsiwonia', tooltip: 'LinkedIn', newTab: true },
            { Icon: FaGithub, href: 'https://github.com/SiwsON1', tooltip: 'GitHub', newTab: true },
            { Icon: FaUserAlt, href: '/aboutMe', tooltip: 'About Me', newTab: false },
            { Icon: FaCode, href: '/skills', tooltip: 'Skills', newTab: false },
            { Icon: FaProjectDiagram, href: '/projects', tooltip: 'Projects', newTab: false },
          ].map(({ Icon, href, tooltip, newTab }, index) => (
            <div
              key={index}
              className={`group hover:bg-black hover:w-36 transition-all ease-in-out duration-300 active:opacity-90 focus-visible:outline-black focus-visible:outline-offset-1 flex items-center ${activeHref === href ? 'text-yellow-400' : 'text-white'}`}
              onMouseOver={() => handleMouseOver(href)}
              onMouseOut={handleMouseOut}
            >
              {newTab ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center`}>
                  <Icon size={24} className={`h-9 w-auto animate-fadeIn ${activeHref === href ? 'text-gold' : 'text-white'}`} />
                  {activeHref === href && (
                    <div className={'ml-3 text-white'}>
                      {tooltip}
                    </div>
                  )}
                </a>
              ) : (
                <RouterLink to={href} className={`flex items-center`}>
                  <Icon size={24} className={`h-9 w-auto animate-fadeIn ${activeHref === href ? 'text-gold' : 'text-white'}`} />
                  {activeHref === href && (
                    <div className={'ml-3 text-white'}>
                      {tooltip}
                    </div>
                  )}
                </RouterLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;