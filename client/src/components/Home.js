import React from 'react'
import Card from 'react-bootstrap/Card'

const Home = () => (
  <div className="hero">
    <Card className="homecard" body>
      <h1>Welcome to Teacher Lounge</h1>
      <ul>
        <li>🌱 1 to 1 language lessons</li>
        <li>🌱 Live online learning</li>
        <li>🌱 Get unlimited access to all teachers</li>
      </ul>
      <button className="btn btn-warning" type="button">
        Find your teacher
      </button>
    </Card>
    <img
      src="https://scdn.italki.com/ng/static/image/milkway/homepage/content2.png"
      className="img-thumbnail"
      alt="..."
    ></img>
  </div>

  // <>
  //   <h1>
  //     Find your course
  //     <small className="text-muted"> The world is you osyter</small>
  //   </h1>
  //   <p className="lead">1 to 1 language lessons with the experts</p>
  //   <blockquote className="blockquote">
  //     <p>Live online learning</p>
  //   </blockquote>
  //   <p className="lead">
  //     Get <strong>Unlimited</strong> access to thousands of inspiring teachers
  //   </p>
  //   <div className="d-grid gap-2 col-2 mx-auto">
  //     <button className="btn btn-dark" type="button">
  //       Get Started
  //     </button>
  //   </div>
  //   <div className="image-container">
  //     <img
  //       src="https://scdn.italki.com/ng/static/image/milkway/homepage/content2.png"
  //       className="img-thumbnail"
  //       alt="..."
  //     ></img>
  //   </div>
  // </>
)
export default Home
