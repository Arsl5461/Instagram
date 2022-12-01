import React from 'react'
import haris from "../haris.jpg"
import {Data} from '../Components/Data'
import {useParams,useNavigate} from "react-router-dom"

function Posts({data}) {
  const navigate=useNavigate();
  const params=useParams();
  const postDetail=(id)=>{
    let path=`/${id}`;
    navigate(path);
  }
  const comment=(id,title)=>{
    let path=`/${id}/${title}`;
    navigate(path);
  }
  const filtered = data.filter(obj => {
    return obj.id == params.id;
  });;
  return (
    <div className='container'>
        {data.map((item)=>{
          return(
          <>
      <div className='profile d-flex'>

    <img src={item.profileimg}></img>
    <div className='d-flex flex-column left point'>
    <h3 onClick={()=>postDetail(item.id)}>{item.title}</h3>
    <p>Mern Stack developer</p>
    </div>
    </div>
    <div className='set'>
    <img src={item.postimg} alt="" />
    </div>
    <div className=''>
    <i class="fa-regular fa-heart icon"></i>
    <i  onClick={()=>comment(item.id,item.title)} class="fa-regular fa-comment icon1 point"></i>
    </div>
    </>
          )
        })}
  </div>
  )
}

export default Posts;


