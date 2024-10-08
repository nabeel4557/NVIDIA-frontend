import React from 'react'
import Spotlight from '../spotlight/page';
import Models from '../models/page';
import Integrations from '../integrations/page';
import Run from '../run/page';
import GetStarted from '../getstarted/page';
import Case from '../case/page';
import Ecosystem from '../ecosystem/page';

function HomePage() {
  return (

      <div>
          <Spotlight />
          <Models />
          <Integrations/>
          <Run/>
          <GetStarted/>
          <Case/>
          <Ecosystem/>
          
    </div>
  )
}

export default HomePage;