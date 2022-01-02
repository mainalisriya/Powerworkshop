import React, {useEffect, useState} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import {findUser} from '../services'
const Following=(props)=>{
    const params= useParams();
    const [user, setUser] = useState(null)
    useEffect(()=>{
        findUser(params.username).then(data=>{
            setUser(data);
        })
    },[params])

    return(
        <>
            
            <h1>Following: {user?.following}</h1>
            
        </>
    )
}

export default Following;