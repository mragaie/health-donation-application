import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles3/SubjectForm.css';
import TeacherNavBar from '../components3/TeacherNavBar';
import Footer from '../components3/Footer';

const SubjectForm = () => {
  const [subjects, setSubjects] = useState(['']);
  const [option, setOption] = useState('');
  const [numberOfClasses, setNumberOfClasses] = useState('');
  const [numberOfStudents, setNumberOfStudents] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subjects.some(subject => subject === '')) {
      setErrorMessage('Please fill in all subject names');
      return;
    }
    if (!option) {
      setErrorMessage('Please select an option');
      return;
    }
    if (option === 'classes' && !numberOfClasses) {
      setErrorMessage('Please fill in the number of classes');
      return;
    }
    if (option === 'privateTutoring' && !numberOfStudents) {
      setErrorMessage('Please fill in the number of students');
      return;
    }
    if ((option === 'classes' && isNaN(numberOfClasses)) || (option === 'privateTutoring' && isNaN(numberOfStudents))) {
      setErrorMessage('Please enter a valid number');
      return;
    }
    // Proceed with form submission
    console.log('Form submitted:', { subjects, option, numberOfClasses, numberOfStudents });
    // Redirect to another page
    if (subjects.every(subject => subject !== '') && option && ((option === 'classes' && !isNaN(numberOfClasses)) || (option === 'privateTutoring' && !isNaN(numberOfStudents)))) {
      window.location.href = '/subjectsubmitted';
    }
  };

  const handleSubjectChange = (index, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = value;
    setSubjects(updatedSubjects);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, '']);
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };

  return (
    <div className="subjectForm">
      <TeacherNavBar />
      <div className="formContainer">
        <h2>Subject Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            {subjects.map((subject, index) => (
              <div key={index}>
                <label htmlFor={`subject-${index}`}>Subject Name</label>
                <input
                  type="text"
                  id={`subject-${index}`}
                  value={subject}
                  onChange={(e) => handleSubjectChange(index, e.target.value)}
                />
                {index > 0 && <button type="button" onClick={() => handleRemoveSubject(index)}>Remove</button>}
              </div>
            ))}
            <button type="button" onClick={handleAddSubject}>Add Subject</button>
          </div>
          <div className="formGroup">
            <label htmlFor="option">Option</label>
            <select
              id="option"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="classes">Classes</option>
              <option value="privateTutoring">Private Tutoring</option>
            </select>
          </div>
          {option === 'classes' && (
            <div className="formGroup">
              <label htmlFor="numberOfClasses">Number of Classes</label>
              <input
                type="number"
                id="numberOfClasses"
                value={numberOfClasses}
                onChange={(e) => setNumberOfClasses(e.target.value)}
              />
            </div>
          )}
          {option === 'privateTutoring' && (
            <div className="formGroup">
              <label htmlFor="numberOfStudents">Number of Students</label>
              <input
                type="number"
                id="numberOfStudents"
                value={numberOfStudents}
                onChange={(e) => setNumberOfStudents(e.target.value)}
              />
            </div>
          )}
          <button type="submit">Submit</button>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SubjectForm;
