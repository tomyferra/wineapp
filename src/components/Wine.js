import React from "react";
import '../stylesheets/Wine.css';
import WineModal from './WineModal';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Rating } from '@mui/material';


function Wine ({ name, winery, description, year, variety, totalratings, totalscore,avgratings, region, imgpath }) {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <div class="container my-5">
      <div class="card row flex-row">
          <div className="imagen">
            <img class=" col-lg-4 card-img-start img-fluid p-0" src={imgpath} alt="wine cap" />  
          </div>
          
          <div class="col-lg-8 card-body">
            <h1 class="card-title">{name}</h1>
            <p class="card-text">{winery}</p>
            <Rating name="read-only" readOnly defaultValue={avgratings} precision={0.1} />
            <p>Rating: <b>{avgratings}</b> ({totalratings})</p>
            <button onClick={() => setIsOpen(!isOpen)} type="button" class="btn btn-primary">Show Details</button>
            {isOpen && 
              <Modal show={setIsOpen} >
                <WineModal setIsOpen={setIsOpen} name={name} winery={winery} description={description} year={year} variety={variety} totalratings={totalratings} avgratings={avgratings} region={region} imgpath={imgpath} totalscore={totalscore}/>
              </Modal>
            }
          </div>
      </div>
  </div>
  );
}


export default Wine;