import React, { useState, useEffect } from 'react';
import '../static/style.css';
import { Link } from 'react-router-dom';


export default function Home() {

  const [forecasts, setData] = useState([]);;

  const populateuserData = async () => {

    try {
      const response = await fetch('weatherforecast', { redirect: 'error' });
      const data = await response.json();
      console.log(data);
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
    

        <div className='row' >

          <div className='col'>
          <h3 className="moviename">Movies and Web Series</h3>


            {forecasts.map(forecast =>
              
                <Link key={forecast.name} to={'Ui/Fetchdata/' + forecast.id} activeClassName="active">
                  <img key={forecast.name} src={require('../static/images/' + forecast.movie_Poster_Path).default} alt={"demo"} />

                </Link>
              
             
            )}

        

          </div>

        </div>
      
    </div>
  );
}