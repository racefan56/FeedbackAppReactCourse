import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={comment.id}
              item={comment}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((comment) => (
  //       <FeedbackItem
  //         key={comment.id}
  //         item={comment}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
