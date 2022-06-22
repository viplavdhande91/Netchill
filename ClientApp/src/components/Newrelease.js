
import React, { useState, useEffect } from 'react';
import '../static/style.css';
import { Link } from 'react-router-dom';


export default function Newrelease() {

  const [forecasts, setData] = useState([]);;

  const populateuserData = async () => {

    try {
      const response = await fetch('weatherforecast', { redirect: 'error' });
      const data = await response.json();
     // console.log(data);
      setData(data);
    }
    catch
    {
      this.setData({
        forecasts: [{ date: 'Unable to get weather forecast' }],
        loading: false
      });
    }
  }


  useEffect(() => {
    populateuserData();
  }, []);



  return (
    <div  className="fill-window">
      
        {/* <button onClick={this.func} className='btn btn-primary'>mybutton</button> */}


        <div className='row'>

          <div className='col'>
          <h2 className="moviename">Action & Adventure</h2>


           
           {forecasts.filter(item =>
            true === item.isNewRelease).map(filtereddata => (
              <Link key={filtereddata.name} to={'Fetchdata/' + filtereddata.id} activeClassName="active">
              <img key={filtereddata.name} src={require('../static/images/' + filtereddata.movie_Poster_Path).default} alt={"demo"} />
              </Link>
  
            ))}
  

        

          </div>

        </div>
      
    </div>
  );
}