import React, { useState } from 'react'
import ServiceContext from './ServiceContext'

const ServiceProvider = ({children}) => {
    const [servicesData,setServicesData]=useState([]);
    

    const addServices=(data)=>{
        console.log('data found');
        
        // console.log(data);
        setServicesData(prevData=>[...prevData,data]);
        console.log(servicesData);
        
    }
    const updateServices=(id,formData)=>{
        setServicesData(servicesData.map((item,index)=>index===id ?formData :item))
    }
    const deleteServices=(id)=>{
        setServicesData(servicesData.filter((item,index)=>index !== id))
    }
  return (
   <ServiceContext.Provider value={{addServices,updateServices,deleteServices, servicesData }}>
    {children}

   </ServiceContext.Provider>
  )
}

export default ServiceProvider
