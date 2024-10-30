import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from "../Section";

const semesters = [
  {
    id: 1,
    title: 'Semester 1',
    subjects: [
      { name: 'Mathematics I', link: 'https://drive.google.com/file/d/18Kg0PfCNb6jwu1uGgto8Znw4X2dNEIcE/view?usp=sharing' },
      { name: 'Physics', link: 'https://drive.google.com/file/d/18vTCnrVdVLQL_3jAB7AIKdraXHP7gyN_/view?usp=sharing' },
      { name: 'Computer Programming', link: 'link' },
      { name: 'Fire & Enviroment Health Safety', link: 'https://drive.google.com/file/d/1YsT35KWec8Q1wkeEGFxpnqs9hq2RSAb3/view?usp=sharing' },
      { name: 'YOUTUBE_LINKS', link: 'https://drive.google.com/file/d/1cPsvgseF4QJcET6mLonJpAE1A9NXVIqF/view?usp=sharing' },
    ],
  },
  {
    id: 2,
    title: 'Semester 2',
    subjects: [
      { name: 'Mathematics II', link: 'https://drive.google.com/file/d/1sQ6Dz0Y40h4xXc4rc_G_h2l1gJ8bAZO4/view?usp=sharing' },
      { name: 'OOP With C++', link: 'https://drive.google.com/file/d/1WZseGoRcjRzxx-CJaLPoEXRpQSFE8XYc/view?usp=sharing' },
      { name: 'YOUTUBE_LINKS', link: 'https://drive.google.com/file/d/1P8CSF2DAs1gWjNBr3QUPJsfFd7tq7eGQ/view?usp=sharing' },
      // { name: 'Web Technology', link: 'link' },
      // { name: 'Digital Electronics', link: 'link' },
    ],
  },

  {
    id: 3,
    title: 'Semester 3',
    subjects: [
      { name: 'Discrete Mathematics', link: 'https://drive.google.com/file/d/1NWcLgkz7LCbDR7nM5QgMPPBrLdjl0gzd/view?usp=sharing' },
      { name: 'Computer Organization', link: 'https://drive.google.com/file/d/1C6HmWE5UVluVGBS3l4BJvg8SIuR-kq9r/view?usp=sharing' },
      { name: 'Operating Systems', link: 'https://drive.google.com/file/d/1PkHtqAAZboQNLfNe0cVMc_CkEXdKMwTb/view?usp=sharing' },
      { name: 'JAVA(Practical)', link: 'https://drive.google.com/file/d/1Z_RJEH8AtZKy1w__RyE2PIr42T6c_Gnl/view?usp=sharing' },
      { name: 'Entrepreneurship Development', link: 'https://drive.google.com/file/d/1lIrV-plRydtOBWnGibOmtnwBwZO3W0R4/view?usp=sharing' },
      { name: 'YOUTUBE_LINKS', link: 'https://drive.google.com/file/d/1QkuyLCa_OAd-g3g-36Jc7l_NNy0Nzy9L/view?usp=sharing' },
    ],
  },
  {
    id: 4,
    title: 'Semester 4',
    subjects: [
      { name: 'Mathematics - III', link: 'https://drive.google.com/file/d/17XmlqHJgZIE7GAnR_Zk9NLlUly13XVLf/view?usp=sharing' },
      // { name: 'Computer Networks', link: '/sem4/computer-networks' },
      // { name: 'Microprocessor & Interfacing', link: '/sem4/software-engineering' },
      // { name: 'Database Management Systems', link: '/sem4/microprocessors' },
      { name: 'FAI', link: 'https://drive.google.com/file/d/1XWuY_3-zm7LEQJdk0ZCKBuBwKyCti64C/view?usp=sharing' },
      { name: 'YOUTUBE_LINKS', link: 'https://drive.google.com/file/d/1nlRW8-NCsXUyR2cghzztLQ39HTRaKlGg/view?usp=sharing' },
    ],
  },
  // {
  //   id: 5,
  //   title: 'Semester 5',
  //   subjects: [
  //     { name: 'Compiler Design', link: '/sem5/compiler-design' },
  //     { name: 'Web Technologies', link: '/sem5/web-technologies' },
  //     { name: 'Mobile Computing', link: '/sem5/mobile-computing' },
  //     { name: 'Cloud Computing', link: '/sem5/cloud-computing' },
  //     { name: 'Machine Learning', link: '/sem5/machine-learning' },
  //     { name: 'Big Data Analytics', link: '/sem5/big-data-analytics' },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'Semester 6',
  //   subjects: [
  //     { name: 'Distributed Systems', link: '/sem6/distributed-systems' },
  //     { name: 'Network Security', link: '/sem6/network-security' },
  //     { name: 'Cyber Security', link: '/sem6/cyber-security' },
  //     { name: 'Embedded Systems', link: '/sem6/embedded-systems' },
  //     { name: 'Data Mining', link: '/sem6/data-mining' },
  //     { name: 'Software Testing', link: '/sem6/software-testing' },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: 'Semester 7',
  //   subjects: [
  //     { name: 'Information Retrieval', link: '/sem7/information-retrieval' },
  //     { name: 'IoT', link: '/sem7/iot' },
  //     { name: 'Blockchain Technology', link: '/sem7/blockchain-technology' },
  //     { name: 'Quantum Computing', link: '/sem7/quantum-computing' },
  //     { name: 'Robotics', link: '/sem7/robotics' },
  //     { name: 'Natural Language Processing', link: '/sem7/nlp' },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: 'Semester 8',
  //   subjects: [
  //     { name: 'Deep Learning', link: '/sem8/deep-learning' },
  //     { name: 'Augmented Reality', link: '/sem8/augmented-reality' },
  //     { name: 'Virtual Reality', link: '/sem8/virtual-reality' },
  //     { name: 'Edge Computing', link: '/sem8/edge-computing' },
  //     { name: 'Project Management', link: '/sem8/project-management' },
  //     { name: 'Entrepreneurship', link: '/sem8/entrepreneurship' },
  //   ],
  // },
];


const Cse = () => {
  const [activeSemester, setActiveSemester] = useState(null);

  const toggleSemester = (id) => {
    setActiveSemester(activeSemester === id ? null : id);
  };

  return (
    <Section id="">
    <div className="container relative bg-n-8 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-n-1">
          Computer Science & Engineering
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {semesters.map((semester) => (
            <div
              key={semester.id}
              className="bg-white rounded-lg shadow-lg"
            >
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-6 rounded-t-lg cursor-pointer flex justify-between items-center"
                onClick={() => toggleSemester(semester.id)}
              >
                <h2 className="text-xl font-semibold">{semester.title}</h2>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeSemester === semester.id ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </div>
              {activeSemester === semester.id && (
                <div className="p-6">
                  <ul className="space-y-4">
                    {semester.subjects.map((subject, index) => (
                      <li key={index}>
                        <Link
                          to={subject.link}
                          className="text-indigo-600 hover:underline"
                        >
                          {subject.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </Section>
  );
};

export default Cse;