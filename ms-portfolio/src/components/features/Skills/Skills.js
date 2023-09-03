import React from 'react';
import 'devicon/devicon.min.css';
import Transition from '../Transition/Transition';

const skills = {
    frontend: [
      { name: 'HTML', icon: 'devicon-html5-plain ' },
      { name: 'RWD', icon: 'devicon-css3-plain ' },
      { name: 'CSS', icon: 'devicon-css3-plain ' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain ' },
      { name: 'NPM', icon: 'devicon-npm-original-wordmark ' },
      { name: 'GIT', icon: 'devicon-git-plain ' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain ' },
      { name: 'React', icon: 'devicon-react-original ' },
      { name: 'Webpack', icon: 'devicon-webpack-plain ' }
    ],
    backend: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain ' },
      { name: 'Jira', icon: 'devicon-jira-plain '  },
      { name: 'TypeScript', icon: 'devicon-typescript-plain ' },
      { name: 'NestJS', icon: 'devicon-nestjs-plain ' },
      { name: 'Prisma', icon: 'devicon-prisma-plain ' },
      { name: 'MySQL', icon: 'devicon-mysql-plain ' },
      { name: 'Express', icon: 'devicon-express-original ' },
      { name: 'Ajax', icon: 'devicon-javascript-plain ' },
      { name: 'Node', icon: 'devicon-nodejs-plain ' },
      { name: 'WebSocket', icon: 'devicon-javascript-plain ' },
      { name: 'Redux', icon: 'devicon-redux-original ' },
      { name: 'SQL', icon: 'devicon-postgresql-plain ' },
      { name: 'Postman', icon: '' },
      { name: 'Scrum', icon: '' },
      { name: 'BPMN 2.0', icon: '' },
      { name: 'Mongoose', icon: 'devicon-mongodb-plain' }
    ]
  };

  const Skills = () => (
    <div  className="p-8">
      <Transition />
    <h1 className="text-4xl font-bold mb-20 mt-20 text-center">Skills</h1>
    <div className="flex flex-col sm:flex-row flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="relative flex flex-col p-4 w-full sm:w-[calc(50%-0.5rem)] h-auto md:h-[50vh] flex-shrink-0 mb-4 sm:mb-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
        <h2 className="text-2xl text-center font-bold mt-2 mb-5">Frontend Development</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full w-full justify-items-center space-y-4 sm:space-y-2">
          {skills.frontend.map((skill, index) => (
            <li key={index} className="flex items-center">
              <i className={`fa ${skill.icon} fa-lg text-xl`}></i>
              <span className="ml-2">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex flex-col p-4 w-full sm:w-[calc(50%-0.5rem)] h-auto md:h-[50vh] flex-shrink-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
        <h2 className="text-2xl text-center font-bold mb-5">Backend Development</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full w-full justify-items-center space-y-4 sm:space-y-2">
          {skills.backend.map((skill, index) => (
            <li key={index} className="flex items-center">
              <i className={`fa ${skill.icon} fa-lg text-xl`}></i>
              <span className="ml-2">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );

  export default Skills;