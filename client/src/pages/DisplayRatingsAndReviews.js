import React, { useState, useEffect } from 'react';

function DisplayRatingsAndReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews);
  }, []);

  const handleAddReview = () => {
    const reviewerName = prompt("Enter your name:");
    if (!reviewerName) return;

    const newReview = {
      name: reviewerName,
      rating: 5,
      review: "This is a great product",
      timestamp: new Date().toLocaleString()
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  const numberOfReviews = reviews.length; // Count the number of reviews

  return (
    <div>
      <h2>Reviews and Ratings</h2>
      <p>
        {numberOfReviews > 0
          ? `${numberOfReviews} user(s) have given a review`
          : "No reviews and ratings yet."}
      </p>
      <button onClick={handleAddReview}>Add a Review</button>
      {reviews.length > 0 && (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>Reviewer:</strong> {review.name} <br />
              <strong>Rating:</strong> {review.rating}, <strong>Review:</strong> {review.review} <br />
              <div>{review.timestamp}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayRatingsAndReviews;