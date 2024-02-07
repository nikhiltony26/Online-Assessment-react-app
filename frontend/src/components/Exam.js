import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exam = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // Object to store user answers

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/exams');
      setQuestions(response.data);
      // Initialize user answers object with empty values for each question
      const initialAnswers = {};
      response.data.forEach(question => {
        initialAnswers[question._id] = '';
      });
      setAnswers(initialAnswers);
    } catch (error) {
      console.error('Failed to fetch exam questions:', error);
    }
  };

  const handleAnswerChange = (questionId, event) => {
    const { value } = event.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      // Send user answers to the backend for grading, etc.
      await axios.post('http://localhost:3000/exams/submit', answers);
      console.log('Answers submitted successfully');
      // Optionally, redirect to a result page or show a success message
    } catch (error) {
      console.error('Failed to submit answers:', error);
    }
  };

  return (
    <div>
      <h2>Exam</h2>
      {questions.length > 0 ? (
        <form onSubmit={handleSubmit}>
          {questions.map(question => (
            <div key={question._id}>
              <p>{question.text}</p>
              <input
                type="text"
                value={answers[question._id]}
                onChange={(e) => handleAnswerChange(question._id, e)}
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Loading exam questions...</p>
      )}
    </div>
  );
};

export default Exam;
