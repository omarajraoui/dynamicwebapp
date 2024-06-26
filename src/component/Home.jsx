import React from 'react'
import { VITE_LIVE_SCROLLING_SPEED, VITE_START_HOUR, VITE_API_DOMAIN ,VITE_NUMBER_OF_HOURS , VITE_ADDITIONAL_NEXT_DAY_HOURS , VITE_CAM_INTERVAL , VITE_VAM_INTERVAL } from '../config'

const Home = () => {
  return (
    <div>
         <div>
        <h1>hey </h1>
        <p className="read-the-docs">
      live scrolling speed :{VITE_LIVE_SCROLLING_SPEED}
      </p>

      <p className="read-the-docs">
      start hour :{ VITE_START_HOUR}
      </p>
           <p className="read-the-docs">
      domain  :{ VITE_API_DOMAIN}
      </p>

           </p>
      <p className="read-the-docs">
      nmbr of hours  :{ VITE_NUMBER_OF_HOURS}
      </p>

      </p>
           <p className="read-the-docs">
      vam interval  :{ VITE_VAM_INTERVAL}
      </p>

        </p>
           <p className="read-the-docs">
      cam interval  :{  VITE_CAM_INTERVAL}
      </p>

        </p>
           <p className="read-the-docs">
      additional nxt day hours  :{ VITE_ADDITIONAL_NEXT_DAY_HOURS}
      </p>
        

      
    </div>
      
    </div>
  )
}

export default Home
