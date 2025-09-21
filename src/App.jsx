import { useState } from 'react'
import './App.css'
import Event from './components/Event'
import schoolImage from './assets/sche-city-school.png'
import greenImage from './assets/sche-green.png'
import oneImage from './assets/sche-one.png'
import pipeImage from './assets/sche-pipe.png'
import albanyImage from './assets/serve-albany.png'
import volUSImage from './assets/volunteer-america.png'
import volNYImage from './assets/volunteer-ny.png'



function App() {

  return (
    <>
    <h1 className='heading'>
      Volunteer at Schenectady
    </h1>
    <div className='event-box'>
      <Event title='Schenectady City School' src={schoolImage} location='Schenectady' />
      <Event title='Schenectady Green Market' src={greenImage} location='Schenectady' />
      <Event title='Schenectady Habitat' src={schoolImage} location='Schenectady' />
      <Event title='Schenectady One' src={oneImage} location='Schenectady' />
      <Event title='Schenectady City School' src={oneImage} location='Schenectady' />
      <Event title='Schenectady Pipe' src={pipeImage} location='Schenectady' />
      <Event title='Volunteer America' src={volUSImage} location='New York' />
      <Event title='Volunteer New York' src={volNYImage} location='New York' />
      <Event title='Serve Albany' src={albanyImage} location='Albany' />
      <Event title='Schenectady Habitat' src={schoolImage} location='Schenectady' />
    </div>
    </>
  )
}

export default App
