import React, {Component} from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';

import PageNotFound from './components/404';
import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header/>
        
//       </header>
//     </div>
//   );
// }
import {BrowserRouter,Routes,Route,Outlet} from 'react-router-dom'
import UserDetails from "./components/UserDetails";
import Followers from "./components/Followers";
import Following from "./components/Following";
import Repos from "./components/Repos";
class App extends Component {
  constructor(){
    super();
    this.state={  //this,.props
      menus:["Home","Users"],
      isRendered:false,
      timer:0,
  }

   
    
}
  componentDidMount(){

    console.log("componentDidMount===",this.props)
    console.log("componentDidMount===",this.state)

    setInterval(()=>{
      this.setState({
        ...this.state,
        isRendered:true,
        timer:this.state.timer+1

    })
    
   
  },1000)}


  
  // render(){<>
  // {/* //   // return(<Header data ={this.state}/>)
  // //   // return(<>Home page!</>) */}
  render(){
    return(
      <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Header />}>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/users' element={<Users/>}/>
                            <Route path="/users/:username" element={<UserDetails/>}/>
                            <Route path="/users/:username/:follow" element={<Followers/>}/>
                            <Route path="/users/:username/:following" element={<Following/>}/>
                            <Route path="/users/:username/:Repos" element={<Repos/>}/>
                        </Route>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        /* <Route path="/" element={}/>
        <div>
          <h1>
          lkjhgfd
          </h1>
        <Header/>
        </div> */

        

        
      
    )
  }
    
 
}

export default App;
