import React,{useEffect, useState} from 'react'
import { Modal,Button,Form, Row,Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [categories,setCategories] = useState([])
  const [categoryName,setCatgoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const insertCategory = async ()=>{
    if(categoryName){
      let body = {
        categoryName,allVideos:[]
      }
      //make api call
      const response = await addCategory(body)
      if(response.status>=200 && response.status<300){
        //reset state
        setCatgoryName("")
        //modal hide
        handleClose()
        //call getCategories
        getCategories()
      }else{
        toast.warning("Uploading error!!! Please try after sometime...")
      }
    }else{
      //alert
      toast.info("Please fill the form completely!!!")
    }
  }

  const getCategories = async ()=>{
    const {data} = await getAllCategory()
    setCategories(data);
  }

  const removeCategory = async (id)=>{
    //make api call
    await deleteCategory(id)
    //get all category
    getCategories()
  }

  useEffect(()=>{
    getCategories()
  },[])

  const dragOverCategory =(e)=>{
    // console.log("Dragging over Category");
    e.preventDefault()
  }
  const videoDrop = async (e,categoryId)=>{
    console.log("Inside drop function");
    // console.log("Category Id: "+categoryId);
    const videoCardId = e.dataTransfer.getData("cardId")
    // console.log("Video Card Id: "+videoCardId);
    //get video details
    const {data} = await getAVideo(videoCardId)
    let selectedCategory = categories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }


  return (
    <>
    <div className="d-grid">
      <button onClick={handleShow} className="btn btn-info">Add New Category</button>
    </div>
    {
      categories?categories?.map(item=>(
        <div className='border p-3 rounded mt-3 mb-3' droppable 
        onDragOver={(e)=>dragOverCategory(e)}
        onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className="d-flex justify-content-between">
            <h5>{item?.categoryName} </h5>
            <button onClick={()=>removeCategory(item?.id)} className='btn'> <i className="fa-solid fa-trash text-danger"></i> </button>
          </div>
          <Row>
            {
              item?.allVideos&&item?.allVideos.map(card=>(
                <Col sm={12} className='p-1 mb-2' >
                  <VideoCard displayData={card} insideCategory={true}/>
                </Col>
              ))
            }
          </Row>
        </div>
      )):<p className='fw-bolder  text-danger mt-3'>Sorry Nothing to display!!!</p>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border p-3 rounded border-secondary'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Category Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Category Name"  
            onChange={e=>setCatgoryName(e.target.value)}/>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={insertCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      theme="colored"
      />
    </>
  )
}

export default Category