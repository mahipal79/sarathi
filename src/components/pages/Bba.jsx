import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const semesters = [
  {
    id: 1,
    title: 'Semester 1',
    subjects: [
      { name: 'Financial Accounting', link: 'https://drive.google.com/file/d/10xsW1b7RHSW-TZqckUsvBvRqy7ycrO4d/view?usp=drive_link' },
      { name: 'Human Resource Management', link: 'https://drive.google.com/file/d/10o3gM_LV-IxEu24ttFFaMAFybcW6KFek/view?usp=drive_link' },
      { name: 'Marketing Management', link: 'https://drive.google.com/file/d/11Gq0hmrytwKTk6sHgdOPv_evwGXYqglV/view?usp=drive_link' },
      { name: 'Principles Of Management', link: 'https://drive.google.com/file/d/114vxe24uWZxrBQHwKwA3FhYR6PhK7WfS/view?usp=drive_link' },
      { name: 'Introduction To Data Science', link: 'https://drive.google.com/file/d/10_kxA3UoaKj7-SKKy3c55DHxrZLYVHay/view?usp=drive_link' },
    ],
  },
  {
    id: 2,
    title: 'Semester 2',
    subjects: [
      { name: 'Organizational Behaviour', link: 'https://drive.google.com/file/d/11Oih5CiWHpS3VtxzOfrK566Qz6JnzU2o/view?usp=drive_link' },
      { name: 'Communication Skills', link: 'https://drive.google.com/file/d/11kvHLXG6JWkTudgZD9QhWGmx2ct0gqMs/view?usp=drive_link' },
      { name: 'Business Strategy', link: 'https://drive.google.com/file/d/11yXVZwbwxrwjmq_xoopSTA2L3PWxjrQs/view?usp=drive_link' },
    ],
  },
  {
    id: 3,
    title: 'Semester 3',
    subjects: [
      { name: 'Consumer Behaviour', link: 'https://drive.google.com/file/d/12_UxakrLjtNTjNsF7LqY9nG9CNhpi3-F/view?usp=drive_link' },
      { name: 'Enterpreneurship Developement', link: 'https://drive.google.com/file/d/13KO9vhaObjIZOL9Y2uXKev8eQA8MMek1/view?usp=drive_link' },
      { name: 'Financial Management Overview', link: 'https://drive.google.com/file/d/12u-42hBAZ3wF5o3HWOxdDETmZBSc0HBK/view?usp=drive_link' },
      { name: 'Managerial Economics', link: 'https://drive.google.com/file/d/12dM7WshkBAQxOvHfHzwAulvBAHWhg18E/view?usp=drive_link' },
    ],
  },
  {
    id: 4,
    title: 'Semester 4',
    subjects: [
      { name: 'Enviromental Studies', link: 'https://drive.google.com/file/d/13Nk26X4Z-RXKL5fjYy46NO91TFjRWwoC/view?usp=drive_link' },
      { name: 'HR Analytics', link: 'https://drive.google.com/file/d/13lYV1GW5lrdYHKO_HP3x-8iRn55l4iWJ/view?usp=drive_link' },
      { name: 'Web And Social Media', link: 'https://drive.google.com/file/d/14-V0XXBrSle6LTtbkhWkkrbUkRpiQFOY/view?usp=drive_link' },
    ],
  },
]


const Bba = () => {
  const [activeSemester, setActiveSemester] = useState(null);

  const toggleSemester = (id) => {
    setActiveSemester(activeSemester === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-n-8 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-n-1">
          BBA Analytics
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

export default Bba;