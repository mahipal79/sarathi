import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from "../Section";
const semesters = [
  {
    id: 3,
    title: 'Semester 3',
    subjects: [
      { name: 'Applied Chemistry', link: 'https://drive.google.com/file/d/1DHsvexMNEM0Wef_fJinaADTSOPdSPFkM/view?usp=drive_link' },
      { name: 'Fluid Flow', link: 'https://drive.google.com/file/d/1DUIDn31JhIjnIW3VmnVNU0m1OIHx0kU-/view?usp=drive_link' },
      { name: 'Maths III', link: 'https://drive.google.com/file/d/1DMe__zVzLU0HiFBDb-gBtblMBZRasm4U/view?usp=drive_link' },
      { name: 'Mechanical Operations', link: 'https://drive.google.com/file/d/1DUatUB2B5DLIXaf8azK6V5GuhUyS8gWc/view?usp=drive_link' },
      { name: 'Process Calculation', link: 'https://drive.google.com/file/d/1DaQTn0eO5LBrUPjNfEDmaQG8tTzE9M5p/view?usp=drive_link' },
    ],
  },
  // {
  //   id: 4,
  //   title: 'Semester 4',
  //   subjects: [
  //     { name: 'Mathematics II', link: 'link' },
  //     { name: 'OOP With C++', link: 'link' },
  //     { name: 'Communication Skills', link: 'link' },
  //     { name: 'Web Technology', link: 'link' },
  //     { name: 'Digital Electronics', link: 'link' },
  //   ],
  // },
]

const Chemical = () => {
  const [activeSemester, setActiveSemester] = useState(null);

  const toggleSemester = (id) => {
    setActiveSemester(activeSemester === id ? null : id);
  };

  return (
    <Section>
    <div className="min-h-screen bg-n-8 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-n-1">
          Chemical Engineering
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

export default Chemical