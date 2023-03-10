import React from "react";
import { useState } from "react";
import '../stylesheets/Wine.css';
import { Rating } from '@mui/material';

// https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
function WineModal ({ setIsOpen, name, winery, description, year, variety, totalratings, avgratings, totalscore, region, imgpath }) {

  const [rating, setRating] = useState(Number(avgratings));
  const [totalReviews, settotalReviews] = useState(Number(totalratings));
  const [score, setScore] = useState(Number(totalscore));

  function setNewReview (newValue) {
 
    settotalReviews(Number(totalReviews)+1);
    setScore(Number(score)+ Number(newValue));
    setRating((Number((score+newValue)/(totalReviews+1))).toFixed(2));  
  };

  return(
    <div class="container modal-container">
      <div class="card row flex-row align-items-center modal-container">
          <div className="col-lg-3 imagenModal">
            <img class=" card-img-start-modal img-fluid p-0" src={imgpath} alt="wine cap" />  
          </div>
          <div class="col col-lg-9 card-body">
            <h1 class="card-title">{name}</h1>
            <p class="card-text">{winery}</p>
            <Rating name="half-rating" defaultValue={avgratings} precision={0.5} 
              onChange={(event, newValue) => {
                setNewReview(newValue);
            }}/>
            <p>Rating: <b>{rating}</b> ({totalReviews})</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">TotalScore: {score}</li>
              <li className="list-group-item">Year: {year}</li>
              <li className="list-group-item">Variety: {variety}</li>
              <li className="list-group-item">Region: {region}</li>
              <li className="list-group-item">{description}</li>
            </ul>
            <div className="button-close">
              <button
                class="btn btn-primary "
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
      </div>
  </div>
  );
}


export default WineModal;