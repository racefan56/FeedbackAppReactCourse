import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

const App = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback((prevFeedback) => {
      return [newFeedback, ...prevFeedback];
    });
  };
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAddFeedback={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;
