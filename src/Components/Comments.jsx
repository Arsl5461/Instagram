import {useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import haris1 from "../haris1.JPG";
function Comments({data}) {
  
  const navigate=useNavigate();
  const params=useParams();
  const main=()=>{
    let path="/";
    navigate(path);
  }
  const filtered = data.filter(obj => {
    return obj.id == params.id;
  });
  // const [comments,setComments]=useState(filtered[0].comments);
  // const addComment=(e)=>{
  //   setComments({...comments,[comments]:value});
  // }
  return (
    <div className='container'>
        <i onClick={()=>main()}  class="fa-solid fa-angle-left icon2 point"></i>
        <div className='d-flex justify-content-center align-items-center top'>
        <h4>Comments</h4>
        <hr/>
        </div>
      <div className="profile2 d-flex">
      <img src={filtered[0]
        .profileimg}/>
      <h4 className='mar'>{filtered[0].title}</h4>
      <p className='state'>{filtered[0].postDetails}</p>
      </div>
      {filtered[0].comments.map((item)=>{
        return(
        <div className="profile2 d-flex">
        <img src={item.userimg}/>
        <h4 className='mar'>{item.username}</h4>
        <p className='state'>{item.coment}</p>
        </div>
        )
      })}
      <input type="text" placeholder='Add a comment' className='mt-2 wid'  ></input>
      <button>Add Comments</button>
      </div>
  )
}

export default Comments