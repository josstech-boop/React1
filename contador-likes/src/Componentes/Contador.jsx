import { useState } from 'react'


function ContadorLikes() {
  const [likes, setLikes ] =useState(0);

  const incrementarLikes = () => {
    setLikes(likes + 1);
  }

  return (
      <div className="container d-flex justify-content-center mt-5">
      <div className="card text-center shadow" style={{ width: '22rem' }}>
        <div className="card-body">
          <h5 className="card-title mb-3">Contador de Likes</h5>
          <p className="card-text fs-4">Total de likes: {likes}</p>
          <button className="btn btn-primary" onClick={incrementarLikes}>
            Dar like 👍
          </button>
        </div>
      </div>
    </div>

  )
}

export default ContadorLikes