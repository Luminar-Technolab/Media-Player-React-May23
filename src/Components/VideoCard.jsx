import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { addToHistory, deleteAVideo } from '../services/allAPI';

function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //add video to watch history
  const handleShow = async () => {
    setShow(true);
    //get time stamp for playing the video
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today)
    const {caption,embbedLink} = displayData
    //video History
    const videoHistory = {
      caption,embbedLink,timeStamp
    }
    //make api call
    await addToHistory(videoHistory)
  }

  //deleting a video
  const removeVideo = async (id)=>{
    //make api call
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }
  
  const dragStarted = (e,id)=>{
    console.log("Drag started...");
    e.dataTransfer.setData("cardId",id)
  }

  return (
   <>
   {
    displayData &&
      <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
        <Card.Img onClick={handleShow} variant="top" style={{width:'100%',height:'180px'}} src={displayData?.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h5>{displayData?.caption}</h5>
            {insideCategory?"":<button onClick={()=>removeVideo(displayData?.id)} className="btn text-danger"><i className="fa-solid fa-trash fs-5"></i></button>}
            </Card.Title>
        </Card.Body>
      </Card>
  }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src={`${displayData?.embbedLink}?autoplay=1`} title={displayData?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

   </>
  )
}

export default VideoCard