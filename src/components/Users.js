// import React, { useEffect,useState } from "react";
// import{getAllGithubUsers}from '../services'

// const Users=(props)=>{
//     console.log('props===',props)
//     const[users,setUsers]=useState([])

//     useEffect(()=>{
//        getAllGithubUsers().then(data=>{
//            setUsers(data)

//        }).catch (error=>{
//         setUsers([]);

//        })
        

//     },[])
//     console.log('users===',users);
//     return(
//         // <ul>
//         //     {users.map((user,index)=>{
//         //         return (<li key ={index}>{user.username}</li>)
//         //     })}
//         //     </ul>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Type</th>
//                     <th>Username</th>
//                     <th>Name</th>
//                     <th>Company</th>
//                     <th>Address</th>
//                     <th>Public Repos</th>
//                     <th>Followers</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {users.length>0 &&(
//                     users.map((user,index)=>{
//                         return(
//                             <tr key={index}>
//                             <td>{user?.id}</td>
//                             <td>{user?.username}</td>
//                             <td>{user?.name}</td>
//                             <td>{user?.company}</td>
//                             <td>{user?.location}</td>
//                             <td>{user?.public_repos}</td>
//                             <td>{user?.followers}</td>
//                             <td>{user?.following}</td>
//                             <td> <button>Details</button></td>
//                 </tr>
//                         )
//                     })

//                 )}
//             </tbody>
//         </table>
//     )
// }
// export default Users;
import React, {useEffect, useState} from 'react'
import {getAllGithubUsers, followers} from '../services'
import {Link, useParams} from 'react-router-dom'
const Users = (props) =>{
    const params=useParams()
    const [users, setUsers] = useState([])
    useEffect( ()=>{
        if(params?.username){
            followers(params).then(data=>{
                setUsers(data);
            }).catch(error=>{
                setUsers([]);
            })
        }else{
            getAllGithubUsers().then(data=>{
                setUsers(data);
            }).catch(error=>{
                setUsers([]);
            })
        }

    },[params])

    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Username</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {users.length>0 && (
                users.map((user, index)=>{
                    return(
                        <tr key={index}>
                            <td>{user?.id}</td>
                            <td>{user?.type}</td>
                            <td>{user?.login}</td>
                            
                            <td><Link to={`/users/${user?.login}`}>Details</Link></td>
                        </tr>
                    )
                })
            )}
            </tbody>
        </table>
    )
}

export default Users