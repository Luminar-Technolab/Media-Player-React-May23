import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap';
import { getAllVideos } from '../services/allAPI';

function View({uploadVideoServerResponse}) {
  const [allVideos,setAllVideos] = useState([])
  const [deleleVideoStatus,setDeleteVideoStatus] = useState(false)
  
  const getAllUploadedVideos = async ()=>{
    const {data} = await getAllVideos()
    setAllVideos(data);
  }
  useEffect(()=>{
    setDeleteVideoStatus(false)
    getAllUploadedVideos()
  },[uploadVideoServerResponse,deleleVideoStatus])

  return (
    <>
    <Row >
     { 
     allVideos.length>0?
     allVideos.map(video=>(
      <Col sm={12} md={6} lg={4} xl={3} >
        <VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
      </Col>
     ))
      :<p className='fw-bolder fs-5 text-danger mt-3'>Sorry Nothing to display!!!</p>
      }
    </Row>
      
    </>
  )
}

export default View