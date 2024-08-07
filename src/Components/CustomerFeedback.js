import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const feedbacks = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://via.placeholder.com/50',
    rating: 5,
    review: 'Great service! Highly recommend.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/50',
    rating: 4,
    review: 'Good experience, but the wait time could be improved.',
  },
];

const CustomerFeedback = () => {
  return (
    <div className="container mt-4 mx-auto h-auto p-6 bg-dark-navy rounded-lg shadow-md">
      <h2 className="text-2xl font-bold ml-4 text-white mb-6">Customer Feedback</h2>
      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start">
            <img src={feedback.image} alt={feedback.name} className="w-12 h-12 rounded-full mb-4 sm:mb-0 sm:mr-4" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold">{feedback.name}</h3>
              <div className="flex justify-center sm:justify-start items-center mb-2">
                {[...Array(feedback.rating)].map((_, index) => (
                  <AiFillStar key={index} className="text-yellow-500" />
                ))}
                {[...Array(5 - feedback.rating)].map((_, index) => (
                  <AiFillStar key={index} className="text-gray-300" />
                ))}
              </div>
              <p className="text-gray-600">{feedback.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
