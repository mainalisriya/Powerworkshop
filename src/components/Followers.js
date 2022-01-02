import React, {useEffect, useState} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import {findUser} from '../services'
import '../App.css'
const Followers=(props)=>{
    const params= useParams();
    const [user, setUser] = useState(null)
    useEffect(()=>{
        findUser(params.username).then(data=>{
            setUser(data);
        })
    },[params])

    return(
        <>
             <div class="card">
                <div class="container">
                <h1 >Followers: {user?.followers}</h1>
    
                </div>
</div> 
            
            
        </>
    )
}

export default Followers;