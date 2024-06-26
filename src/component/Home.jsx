import React from 'react'
import { VITE_LIVE_SCROLLING_SPEED, VITE_START_HOUR, VITE_API_DOMAIN } from '../config'

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
      start hour :{ VITE_API_DOMAIN}
      </p>

      
    </div>
      
    </div>
  )
}

export default Home
