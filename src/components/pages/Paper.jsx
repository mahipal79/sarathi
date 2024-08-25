import { useState } from 'react';
import { paperdata } from '../../constants/paperdata';  
import Heading from '../Heading'; // Adjust the import path as necessary
import Section from '../Section'; // Adjust the import path as necessary


const Paper = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedExamType, setSelectedExamType] = useState('');

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedSemester('');
    setSelectedSubject('');
    setSelectedExamType('');
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedSubject('');
    setSelectedExamType('');
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setSelectedExamType('');
  };

  const handleExamTypeChange = (e) => {
    setSelectedExamType(e.target.value);
  };

  const filteredSemesters = selectedCourse ? paperdata[selectedCourse] : [];
  const semesterOptions = filteredSemesters.map(sem => (
    <option key={sem.id} value={sem.id}>{sem.title}</option>
  ));

  const filteredSubjects = selectedSemester ? filteredSemesters.find(sem => sem.id === parseInt(selectedSemester))?.subjects : [];
  const subjectOptions = filteredSubjects?.map(sub => (
    <option key={sub.name} value={sub.name}>{sub.name}</option>
  ));

  const papers = selectedSubject ? filteredSubjects?.find(sub => sub.name === selectedSubject)?.papers : [];
  const filteredPapers = papers?.filter(paper => !selectedExamType || paper.examType === selectedExamType);

  return (
    <Section id="features">
    <div className="p-6 bg-n-8 container ">
      <Heading title="Filter Papers" className="text-3xl  mb-6 text-center sm:text-left " />

      <div className="mb-6">
        <label htmlFor="course" className="block text-sm font-medium text-n-1">Course</label>
        <select id="course" value={selectedCourse} onChange={handleCourseChange} className="mt-1 block w-full py-2 px-3 bg-gradient-to-r from-indigo-500 to-purple-600 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-white sm:text-sm">
          <option value="">Select Course</option>
          {Object.keys(paperdata).map(course => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
      </div>

      {selectedCourse && (
        <div className="mb-6">
          <label htmlFor="semester" className="block text-sm font-medium text-n-1">Semester</label>
          <select id="semester" value={selectedSemester} onChange={handleSemesterChange} className="mt-1 block w-full py-2 px-3 bg-gradient-to-r from-indigo-500 to-purple-600 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-white sm:text-sm">
            <option value="">Select Semester</option>
            {semesterOptions}
          </select>
        </div>
      )}

      {selectedSemester && (
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-n-1">Subject</label>
          <select id="subject" value={selectedSubject} onChange={handleSubjectChange} className="mt-1 block w-full py-2 px-3 bg-gradient-to-r from-indigo-500 to-purple-600  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-white sm:text-sm">
            <option value="">Select Subject</option>
            {subjectOptions}
          </select>
        </div>
      )}

      {selectedSubject && (
        <div className="mb-6">
          <label htmlFor="examType" className="block text-sm font-medium text-n-1">Exam Type</label>
          <select id="examType" value={selectedExamType} onChange={handleExamTypeChange} className="mt-1 block w-full py-2 px-3 bg-gradient-to-r from-indigo-500 to-purple-600 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-white sm:text-sm">
            <option value="">Select Exam Type</option>
            <option value="Mid Sem">Mid Sem</option>
            <option value="End Sem">End Sem</option>
          </select>
        </div>
      )}

  
{filteredPapers && filteredPapers.length > 0 && (
        <div title="Papers" className="bg-n-8 shadow-md rounded-md p-4 z-0">
          <div className="space-y-4">
            {filteredPapers.map(paper => (
              <a key={paper.link} href={paper.link} className="block p-4 bg-n-8 border border-purple-300 rounded-lg shadow-sm hover:bg-gradient-to-r from-indigo-500 to-purple-600 transition" target="_blank" rel="noopener noreferrer">
                {paper.name}
              </a>
            ))}
          </div>
         
        </div>
      )}
    </div>
    </Section>
  );
};

export default Paper;
