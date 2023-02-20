import '../st.css'
const UserDetail=({user})=>{
    return(
        <div className="container">
        {
user && user.map((ele)=>{
const {ID,ImageUrl,Name,ShortDesc}=ele
    return(
        <div  className="innerContainer">
            <div className="item">
        <div key={ID}>
            <img src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" alt="images"/>
        <h3>{Name}</h3>
        <p>{ShortDesc}</p>
        <button id='viewBtn'>View</button>
        </div>
        </div>
        </div>
    )
})
        }
        </div>
    )
}
export default UserDetail