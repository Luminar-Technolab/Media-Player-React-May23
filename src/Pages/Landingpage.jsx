import React from 'react'
import { Row, Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl = useNavigate()

  const navigate=()=>{
    navigateByUrl('/home')
  }
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between'>
    <Col></Col>
        <Col md={4} >
          <h3 className='mb-3'>Welcome to <span className='text-warning '>Media Player</span> </h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt blanditiis harum nesciunt provident, dignissimos sint eveniet reiciendis velit ullam temporibus ratione quisquam laudantium eius optio ipsa recusandae voluptatem id...</p>
          <button onClick={navigate} className='btn btn-info fw-bolder mt-5'>Get Started</button>
        </Col>
        <Col></Col>
        <Col className='ms-5'  md={6} >
          <img className='img-fluid ms-5' src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="landing" />
        </Col>
    </Row>
    <div className="container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
      <h3 >Features</h3>
      <div className="features mt-5 mb-5 d-flex justify-content-between w-100">
      <Card className='p-3 shadow' style={{ width: '22rem' }}>
      <Card.Img style={{height:'300px',width:'300px'}} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>

      <Card className='p-3 shadow' style={{ width: '22rem' }}>
      <Card.Img style={{height:'300px',width:'300px'}} variant="top" src="https://media.giphy.com/media/1bG7bbKHn8Rtm5FOdO/giphy.gif" />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>

      <Card className='p-3 shadow' style={{ width: '22rem' }}>
      <Card.Img style={{height:'300px',width:'300px'}} variant="top" src="https://media.giphy.com/media/149mbArhpEpry0/giphy.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>

      </div>
    </div>
    <div className="container border rounded p-5 border-secondary shadow mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="content ">
        <h4 className='text-warning mb-5'>Simple, Fast and Powerful</h4>
        <h6><span className='fs-5 me-3'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</h6>
        <h6><span className='fs-5 me-3'>Categorise Videos:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</h6>
        <h6><span className='fs-5 me-3'>Managing History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</h6>
      </div>
      <div className="video ms-5">
      <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </>
  )
}

export default Landingpage