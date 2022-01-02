// import React,{useState,useEffect} from "react";
// const Header =(props)=>{

//     const[timer,setTimer]=useState(props.date.timer);
//     useEffect(()=>{},[])
//     useEffect(()=>{},[timer])





//     return(
//         <ul>
//             <li>Users</li>
//             <li>Home</li>
//             <li>Timer :{timer}</li>
//         </ul>
//     )
//     // return(
//     //     <ul>
//     //         <li>Users</li>
//     //         <li>Home</li>
//     //         <li>Timer :{props.data.timer}</li>
//     //     </ul>
//     // )
// }

// export default Header

// import React, {useState, useEffect} from "react";
// import { Link ,Outlet} from "react-router-dom";
// import propTypes from 'prop-types'

// const Header = (props) => {
    // console.log("props===",props)

    // const[timer,setTimer] = useState(props.data.timer);

    // useEffect( ()=>{
    //     console.log("without deep=======");

    // },[])

    // useEffect( ()=>{
    //     console.log("with deep----------",timer)
    //   if(timer<100)  setTimer(timer+1)

    // },[timer]) // timer change vayesi trigger hune vayo



//     return(<>

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#"><Link to="/home">Home</Link></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#"><Link to="/users">Users</Link></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// <Outlet/>
        
//         <ul>
//             <li>
//                Home
//           </li>
//              <li>
//                  Users
//              </li>
//              <li>Timer:  </li>
//          </ul>
//         </>)
// }

// export default Header;
import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Header = () =>{
    return (<>
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="nav-link"><Link to="/">Home</Link></a>
                <a className="nav-link"><Link to="/users">Users</Link></a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <div className="container">
            <Outlet/>
        </div>
    </>)
}
export default Header