import React, { useEffect,useState } from 'react'
import UserDetail from './Components/UserDetail';

const API='http://localhost:8000/data'
const App=()=>{
    const [user,setUser]=useState([]);
    const getData=async(url)=>{
try{
const res=await fetch(url);
const data=await res.json();
console.log(data)
if(data.length>0){
    setUser(data)
}
}catch(err){
    console.log(err)
}
    }
    useEffect(()=>{
        getData(API)
    },[])
    return(
        <>
        <div className='navbar'>
<h1 id='ttl'>Title</h1>
<h3>Home</h3>
<h3>About</h3>
<h3>Blog</h3>
<h3>Contact</h3>
<button id='btn2'>Button</button>
        </div>
        <div id='top' style={{textAlign:'center'}}>
        <h2>Title</h2>
        <p>lorem ipsum doller the sjdg ensg impredict quis whic , mno,non tristique lorem ipsum doller sit ammet j</p>
       
        <p>mi,egastes et impredict quis, tristinc noif non  mi</p>
        <button id='btn1'>Read More</button>
        </div>
        <div id='cls'>
    <h3 style={{textAlign:'center',fontWeight:'inherit',fontSize:'40px'}}>Classes</h3>
    <p style={{textAlign:'center'}}>lorem ipsum doller sit ammet js thepoet wants to tell us that in this world nothing is high or low even the smallest person..</p>
    </div>
        <UserDetail user={user}/>
        <p>Copyright c 2021. All Rights Reserved</p>
        </>
    )
}
export default App