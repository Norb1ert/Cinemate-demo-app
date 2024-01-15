import { useState } from "react";

/* eslint-disable react/prop-types */
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  paddingLeft: "15px",
};

const starContainer = {
  display: "flex",
  justifyContent: "center",
};

const text = {
  color: "#DAA520",
};

function StarRating({
  size = 48,
  maxRating = 10,
  defaultRating = 0,
  color = "#000",
  onSetRating,
  messages = [],
}) {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainer}>
        {Array.from({ length: 10 }, (_, i) => (
          <Star
            key={i}
            size={size}
            full={temporaryRating ? temporaryRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTemporaryRating(i + 1)}
            onHoverOut={() => setTemporaryRating(0)}
            color={color}
          />
        ))}
      </div>
      <p style={text}>
        {messages.length === maxRating
          ? messages[temporaryRating ? temporaryRating - 1 : rating - 1]
          : temporaryRating || rating || ""}
      </p>
    </div>
  );
}

function Star({ size, full, onRate, onHoverIn, onHoverOut, color }) {
  const StarStyle = {
    width: `${size}px`,
    height: "28px",
    display: "block",
    cursor: "pointer",
  };

  return (
    <span
      style={StarStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          // eslint-disable-next-line react/jsx-no-duplicate-props
          fill="none"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

export default StarRating;
