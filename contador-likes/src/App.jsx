import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [likes, setLikes ] =useState(0);

  const incrementarLikes = () => {
    setLikes(likes + 1);
  }

  return (
      <div className='container text-center mt-5'>
        <h1 className='mb-4'>Contador de likes</h1>
        <p className='fs-3'>Total de likes:{likes}</p>
        <button className='btn btn-primary' onClick={incrementarLikes}>Dar like  👍</button>
      </div>
  )
}

export default App
