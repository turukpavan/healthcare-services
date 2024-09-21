import React, { useContext, useMemo, useState } from 'react'
import ServiceContext from './Store/ServiceContext';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateServices = () => {
  const {servicesData, updateServices}=useContext(ServiceContext);
  const navigate=useNavigate()
  const {id}=useParams();

  const [formData,setFormData]=useState({
      name :"",
      description :"",
      price :""
  
  })

  useMemo(() => {

    const data= servicesData.find((item,index)=>index===parseInt(id))

      if(data){
          setFormData({name:data.name,description:data.description,price:data.price})
      }

  }, [id])

  

  const handleSubmit=(e)=>{
      e.preventDefault()
      updateServices(parseInt(id),formData)
      navigate('/')
  }

return (
  <div className="container">
    <h2 className='w-100 text-center'>Update our Existing Service</h2>
  <form className='w-50 m-auto' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" name='name' className="form-control" value={formData.name} onChange={(e)=>setFormData({...formData,name: e.target.value})} />
  </div>
  <div className="mb-3">
    <label className="form-label">Description</label>
    <textarea className='form-control' value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})} ></textarea>
  </div>
  <div className="mb-3">
    <label className="form-label">Price</label>
    <input type="number" className="form-control" value={formData.price} onChange={(e)=>setFormData({...formData,price:e.target.value})}/>
  </div>
  <div className='align-content-center'>
<button type="submit" className="mx-auto d-block btn btn-primary">Submit</button>
</div>


</form>
</div>
)
}

export default UpdateServices
