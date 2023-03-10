import Wine from './Wine';
import {Wines} from './WineData';
import '../stylesheets/Wines.css';


function WineList() {
  return (
    <div className="winelist container-fluid">
      <div className="row">
        <div className="container">
          <div className="row justify-content-center wines-value">
            {Wines.map( (wine) => (
                <div className="col col-sm-4 wines-style">
                  <Wine name={wine.Name} winery={wine.Winery} description={wine.Description} year={wine.Year} variety={wine.Variety} totalratings={wine.Totalqualifications} avgratings={wine.Avgqualifications} region={wine.Region} imgpath={wine.Image} totalscore={wine.Totalscore}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineList;