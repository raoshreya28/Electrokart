import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
  blue: "#0074e4",
};

function Ratings() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [reviewText, setReviewText] = useState(""); // State to store the review text
  const stars = Array(5).fill(0);
  const [reviews,setReviews]=useState([]);
  

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  

  const handleReviewSubmit = () => {
    
    alert('Review Submitted!!');
    setReviewText(""); // Clear the review text
  };

  
  


  return (
    <div style={styles.container}>
      <h6> Ratings & Review </h6>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      
      <button style={styles.button} onClick={handleReviewSubmit}>Submit</button>
    </div>
  );
}


// Rating component
const Rating = ({ value, count }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < value ? 'filled' : 'empty'}>★</span>
  ));

  return (
    <div className="rating">
      {stars}
      <span className="count">{`(${count})`}</span>
    </div>
  );
};

// Product component
const Product = ({ name, rating, ratingCount }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <Rating value={rating} count={ratingCount} />
    </div>
  );
};

// Example usage
const ProductList = () => {
  const products = [
    { name: 'Product 1', rating: 4, ratingCount: 150 },
    { name: 'Product 2', rating: 3, ratingCount: 100 },
    // ... more products
  ];

  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}; 
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 3,
    margin: "20px 0",
    minHeight: 20,
    width: 250,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 100,
    padding: 5,
    backgroundColor: colors.blue,
    color: "white",
    cursor: "pointer",
  },
};


export default Ratings;