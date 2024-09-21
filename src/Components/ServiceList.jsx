import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import ServiceContext from "./Store/ServiceContext";

const ServiceList = () => {
  const {servicesData,deleteServices}=useContext(ServiceContext)
  const navigate=useNavigate();


  
  return (
    <>
    
    <div className="vw-100">
        <div className="w-100 container d-flex justify-content-between p-4">
            <h2>Service List :</h2>
            <Link to={'/AddNewServices'}>
            <button className=" btn btn-primary">Add Service</button>
            </Link>
        </div>
      <table className="table table-hover w-75 mx-auto ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {servicesData.map((item,index)=>(

                    <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className="btn btn-primary mb-2" onClick={()=>navigate(`/updateServices/${index}`)}>Update</button>
                      <button className="btn btn-danger" onClick={()=>deleteServices(index)}>Delete</button>
                    </td>
                    </tr>
      ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default ServiceList;
