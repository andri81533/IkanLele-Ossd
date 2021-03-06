import React, { useState } from 'react';

import { Jutsu } from 'react-jutsu';

const JutsuApp = () => {
    const [room, setRoom] = useState('')
    const [name, setName] = useState('')
    const [call, setCall] = useState(false)
  
    const handleClick = event => {
      event.preventDefault()
      if (room && name) setCall(true)
    }
    return call ? (
      <Jutsu
        roomName={room}
        userName={name}
        containerStyles={{ width: '1200px', height: '800px' }}
        loadingComponent={<p>loading ...</p>} />
        
    ) : (
      <form>
        <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
        <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleClick} type='submit'>
          Start / Join
        </button>
      </form>
    )
  }

export default JutsuApp