
import './App.css';
import Timeline from './Components/Timeline';
import Posts from './Components/Posts';
import {Data} from "./Components/Data"
import haris from "./haris.jpg"
import Arslan from "../src/assets/arslan.jpg"
import {useState} from "react"
import { TodoITem } from './Components/TodoITem';
import Profile from './Components/Profile';
import Comments from './Components/Comments';
import haris1 from "./haris1.JPG"
import {Routes,Route, BrowserRouter} from "react-router-dom"
import hamza from "../src/assets/hamza.jpg"
import waqas from "../src/assets/waqas.jpg"
import fahad from "../src/assets/fahad.jpg"
import Messeges from './Components/Messeges';
function App() {
  const messages=[
    {
      "username":"Haris",
      "profileimg":fahad,
      "messages":"Hello How are You"
    },
    {
      "username":"Akram",
      "profileimg":Arslan,
      "messages":"Text me back when you are free"
    },
    {
      "username":"Owais",
      "profileimg":waqas,
      "messages":"Hows your day going"
    },
    {
      "username":"Ali Akmal",
      "profileimg":hamza,
      "messages":"I will be back in a while"
    }
  ]
  const Data=[
    { 
      id:1,
      "title":"Muhammad Haris Ishtiaq",
      "subtitle":"Mern Stack Developer",
      "profileimg":haris,
      "postimg":haris1,
      "postDetails":"This is my first post",
      "followers":"11000",
      "posts":"4",
      "following":"14",
      "image1":haris1,
      "image2":haris1,
      "image3":haris1,
      "image4":haris1,
      "image5":haris1,
      "image6":haris1,
      "comments":[
        {
          "username":"Arslan Akmal",
          "userimg":Arslan,
          "coment":"He is a good developer"
        },
        {
          "username":"Adeel Hamza",
          "userimg":hamza,
          "coment":"He is a good person"
        },
        {
          "username":"Waqas Khaliq",
          "userimg":waqas,
          "coment":"He is very straight forward person"
        },
        {
          "username":"Fahad Raza",
          "userimg":fahad,
          "coment":"He is a my good friend"
        },
      ]
    },
    {
      id:2,
      "img":haris,
      'title':"Muhammad Arslan Akmal",
      'subtitle':"Mean Stack Developer",
      'profileimg':Arslan,
      "postDetails":"I am a good developer",
      "postimg":Arslan,
      "posts":"10",
      "followers":"800",
      "following":"675",
       "image1":Arslan,
       "image2":Arslan,
       "image3":Arslan,
       "image4":Arslan,
       "image5":Arslan,
       "image6":Arslan,
       "comments":[
        {
          "username":"Haris Ishtiaq",
          "userimg":haris,
          "coment":"He is a good developer"
        },
        {
          "username":"Adeel Hamza",
          "userimg":hamza,
          "coment":"He is a good person"
        },
        {
          "username":"Waqas Khaliq",
          "userimg":waqas,
          "coment":"He is very straight forward person"
        },
        {
          "username":"Fahad Raza",
          "userimg":fahad,
          "coment":"He is a my good friend"
        },
      ]
    },
    {
      id:3,
      "img":haris,
      'title':"Adeel Hamza",
      'subtitle':"Php Developer",
      "followers":"1100",
      "following":"120",
      'profileimg':hamza,
      "postDetails":"This is my third post",
      "postimg":hamza,
      "posts":"141",
      "image1":hamza,
      "image2":hamza,
      "image3":hamza,
      "image4":hamza,
      "image5":hamza,
      "image6":hamza,
      "comments":[
        {
          "username":"Arslan Akmal",
          "userimg":Arslan,
          "coment":"He is a good developer"
        },
        {
          "username":"Haris Ishtiaq",
          "userimg":haris,
          "coment":"He is a good person"
        },
        {
          "username":"Waqas Khaliq",
          "userimg":waqas,
          "coment":"He is very straight forward person"
        },
        {
          "username":"Fahad Raza",
          "userimg":fahad,
          "coment":"He is a my good friend"
        },
      ]
    },
    {
      id:4,
      "img":haris,
      'title':"Waqas Ahmad",
      "subtitle":"Python Developer",
      "posts":"124",
      'profileimg':waqas,
      "postimg":waqas,
      "postDetails":"This is me Waqas",
      "followers":"800",
      "following":"657",
      "image1":waqas,
      "image2":waqas,
      "image3":waqas,
      "image4":waqas,
      "image5":waqas,
      "image6":waqas,
      "comments":[
        {
          "username":"Arslan Akmal",
          "userimg":Arslan,
          "coment":"He is a good developer"
        },
        {
          "username":"Adeel Hamza",
          "userimg":hamza,
          "coment":"He is a good person"
        },
        {
          "username":"Haris Ishtiaq",
          "userimg":haris,
          "coment":"He is very straight forward person"
        },
        {
          "username":"Fahad Raza",
          "userimg":fahad,
          "coment":"He is a my good friend"
        },
      ]
    },
    {
      id:5,
      "img":haris,
      'title':"Fahad",
      "subtitle":"Wordpress Developer",
      'profileimg':fahad,
      "postimg":fahad,
      "postDetails":"This is myself",
       "posts":"14",
      "followers":"1500",
      "following":"1202",
      "image1":fahad,
      "image2":fahad,
      "image3":fahad,
      "image4":fahad,
      "image5":fahad,
      "image6":fahad,
      "comments":[
        {
          "username":"Arslan Akmal",
          "userimg":Arslan,
          "coment":"He is a good developer"
        },
        {
          "username":"Adeel Hamza",
          "userimg":hamza,
          "coment":"He is a good person"
        },
        {
          "username":"Waqas Khaliq",
          "userimg":waqas,
          "coment":"He is very straight forward person"
        },
        {
          "username":"Haris Ishtiaq",
          "userimg":fahad,
          "coment":"He is a my good friend"
        },
      ]
    },

  ]
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Timeline data={Data}/>}/>
<Route path="/:id" exact={true} element={<Profile data={Data}/>}></Route>
    <Route path="/:id/:title" exact={true} element={<Comments data={Data}/>}></Route>
     <Route path="/messages" exact={true} element={<Messeges data={messages}/>}></Route> 
    </Routes>
    </BrowserRouter>

  );
}

export default App;
