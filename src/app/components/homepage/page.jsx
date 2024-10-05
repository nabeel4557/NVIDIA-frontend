import React from 'react'
import Spotlight from '../spotlight/page';
import Models from '../models/page';
import Integrations from '../integrations/page';
import Run from '../run/page';

function HomePage() {
  return (

      <div>
          <Spotlight />
          <Models />
          <Integrations/>
          <Run/>
          
    </div>
  )
}

export default HomePage;