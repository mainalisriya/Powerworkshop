import React, {useEffect, useState} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import {findUser} from '../services'

// const [repos,setRepos]=useState('');
const Repos=(props)=>{
    const params= useParams();
    const [user, setUser] = useState(null)
    useEffect(()=>{
        findUser(params.username).then(data=>{
            setUser(data);
        })
    },[params])

    return(
        <>
            
            <h1>Public Repos: {user?.public_repos}</h1>
            
        </>
    )
}

export default Repos;