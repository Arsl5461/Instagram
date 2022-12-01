import React from 'react'
import {useParams,useNavigate} from "react-router-dom"
import {Data} from '../Components/Data'

function Messeges({data}) {
  const navigate=useNavigate();
  const params=useParams();
  const homescreen=()=>{
    let path="/";
    navigate(path);
  }
  const filtered = data.filter(obj => {
    return obj.id == params.id;
  });;
  return (
    <>
    <div className='container'>
      <i onClick={()=>homescreen()} className="fa-solid fa-angle-left icon3 point"></i>
      <div className='d-flex justify-content-center align-items-center top'>
        <h4>{filtered[0].username}</h4>
      </div>
      <div className='d-flex justify-content-center align-items-center tp'>
      <input type="text" placeholder="Search.." name="search"/>
      <button className='ptr' type="submit"><i class="fa fa-search "></i></button>
      </div>
      {data.map((item)=>{
        return(
        <div className="profile2 d-flex left1">
        <img src={item.profileimg}/>
        <div className="d-flex flex-column">
        <h4 className='mar'>{item.username}</h4>
        <p className='state1'>{item.messages}</p>
        </div>
        </div>
        )
      })}
      </div>
      </>
  )
}

export default Messeges