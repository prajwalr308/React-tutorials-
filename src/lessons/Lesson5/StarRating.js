import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

export default function StarRating({style={},starColor="red" ,totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const Star = ({ selected = false, onSelect = (a) => a ,}) => {
      console.log(onSelect);
   return <FaStar color={selected ? starColor : "grey"} onClick={onSelect} />
  };

  return (
    <div style={{padding:"5px",...style}}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
       
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
