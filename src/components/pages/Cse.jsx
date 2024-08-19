import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const semesters = [
  {
    id: 1,
    title: 'Semester 1',
    subjects: [
      { name: 'Mathematics I', link: '/sem1/math1' },
      { name: 'Physics I', link: '/sem1/physics1' },
      { name: 'Chemistry', link: '/sem1/chemistry' },
      { name: 'Programming Basics', link: '/sem1/programming-basics' },
      { name: 'Engineering Mechanics', link: '/sem1/engineering-mechanics' },
      { name: 'English Communication', link: '/sem1/english-communication' },
    ],
  },
  {
    id: 2,
    title: 'Semester 2',
    subjects: [
      { name: 'Mathematics II', link: '/sem2/math2' },
      { name: 'Physics II', link: '/sem2/physics2' },
      { name: 'Environmental Studies', link: '/sem2/environmental-studies' },
      { name: 'Data Structures', link: '/sem2/data-structures' },
      { name: 'Digital Electronics', link: '/sem2/digital-electronics' },
      { name: 'Professional Ethics', link: '/sem2/professional-ethics' },
    ],
  },
  // Add semesters 3 to 8 similarly
  {
    id: 3,
    title: 'Semester 3',
    subjects: [
      { name: 'Mathematics III', link: '/sem3/math3' },
      { name: 'Computer Organization', link: '/sem3/computer-organization' },
      { name: 'Operating Systems', link: '/sem3/operating-systems' },
      { name: 'Discrete Mathematics', link: '/sem3/discrete-mathematics' },
      { name: 'Object-Oriented Programming', link: '/sem3/oop' },
      { name: 'Database Systems', link: '/sem3/database-systems' },
    ],
  },
  {
    id: 4,
    title: 'Semester 4',
    subjects: [
      { name: 'Theory of Computation', link: '/sem4/theory-of-computation' },
      { name: 'Computer Networks', link: '/sem4/computer-networks' },
      { name: 'Software Engineering', link: '/sem4/software-engineering' },
      { name: 'Microprocessors', link: '/sem4/microprocessors' },
      { name: 'Algorithm Design', link: '/sem4/algorithm-design' },
      { name: 'Artificial Intelligence', link: '/sem4/artificial-intelligence' },
    ],
  },
  {
    id: 5,
    title: 'Semester 5',
    subjects: [
      { name: 'Compiler Design', link: '/sem5/compiler-design' },
      { name: 'Web Technologies', link: '/sem5/web-technologies' },
      { name: 'Mobile Computing', link: '/sem5/mobile-computing' },
      { name: 'Cloud Computing', link: '/sem5/cloud-computing' },
      { name: 'Machine Learning', link: '/sem5/machine-learning' },
      { name: 'Big Data Analytics', link: '/sem5/big-data-analytics' },
    ],
  },
  {
    id: 6,
    title: 'Semester 6',
    subjects: [
      { name: 'Distributed Systems', link: '/sem6/distributed-systems' },
      { name: 'Network Security', link: '/sem6/network-security' },
      { name: 'Cyber Security', link: '/sem6/cyber-security' },
      { name: 'Embedded Systems', link: '/sem6/embedded-systems' },
      { name: 'Data Mining', link: '/sem6/data-mining' },
      { name: 'Software Testing', link: '/sem6/software-testing' },
    ],
  },
  {
    id: 7,
    title: 'Semester 7',
    subjects: [
      { name: 'Information Retrieval', link: '/sem7/information-retrieval' },
      { name: 'IoT', link: '/sem7/iot' },
      { name: 'Blockchain Technology', link: '/sem7/blockchain-technology' },
      { name: 'Quantum Computing', link: '/sem7/quantum-computing' },
      { name: 'Robotics', link: '/sem7/robotics' },
      { name: 'Natural Language Processing', link: '/sem7/nlp' },
    ],
  },
  {
    id: 8,
    title: 'Semester 8',
    subjects: [
      { name: 'Deep Learning', link: '/sem8/deep-learning' },
      { name: 'Augmented Reality', link: '/sem8/augmented-reality' },
      { name: 'Virtual Reality', link: '/sem8/virtual-reality' },
      { name: 'Edge Computing', link: '/sem8/edge-computing' },
      { name: 'Project Management', link: '/sem8/project-management' },
      { name: 'Entrepreneurship', link: '/sem8/entrepreneurship' },
    ],
  },
];


const Cse = () => {
  const [activeSemester, setActiveSemester] = useState(null);

  const toggleSemester = (id) => {
    setActiveSemester(activeSemester === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-n-8 py-10">
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
  );
};

export default Cse;
