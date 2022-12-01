import React from 'react'
import haris1 from "../haris1.JPG"
import Arslan from "../assets/arslan.jpg"
import {useNavigate,useParams} from "react-router-dom"

function Profile({data}) {
    const nevigate=useNavigate();
    const params=useParams();
    const backhome=()=>{
        let path="/";
        nevigate(path);
    }
    const message=()=>{
    let path="/messages";
    nevigate(path);
    }
    const filtered = data.filter(obj => {
        return obj.id == params.id;
      });;
  return (
    <div className='container'>
        <i onClick={()=>backhome()}className="fa-solid fa-angle-left icon2 point"></i>
        <div className='d-flex justify-content-center align-items-center top'>
        <h4>{filtered[0].title}</h4>
        {filtered[0].followers>1000?<i class="fa-solid fa-check clr icon"></i>:""}
        
        </div>
    <div className='evenly profile1'>
        <img src={filtered[0].profileimg}/>
        <div className='d-flex flex-column tp'>
        <div className='flex'><p><b>{filtered[0].posts}</b></p>
        </div>
        <p><b>Posts</b></p>
        
    </div>
    <div className='d-flex flex-column tp'>
        <div className='flex'>
        <p><b>{filtered[0].followers}</b></p>
        </div>
        <p><b>Followers</b></p>
    </div>
    <div className='d-flex flex-column tp'>
        <div className='flex'>
        <p><b>{filtered[0].following}</b></p>
        </div>
        <p><b>Following</b></p>
    </div>
    </div>
    <h3>{filtered[0].title}</h3>
    <p>{filtered[0].subtitle}</p>
    <p><b>Mern Stack Developer at Arham Soft PVT Limited</b></p>
        <button onClick={()=>message()} className='btn'>Message</button>
    <div className='d-flex widt flex-wrap mt-3'>
    <img src={filtered[0].image1}/>
    <img src={filtered[0].image2}/>
    <img src={filtered[0].image3}/>
    <img src={filtered[0].image4}/>
    <img src={filtered[0].image5}/>
    <img src={filtered[0].image6}/>
    </div>
    </div> 
  )
}

export default Profile