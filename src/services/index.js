//  ./ same dir  ../../ parent dir



import axios from 'axios'
const API_BASE_URL ='https://api.github.com'

axios.defaults.baseURL='https://api.github.com';
// axios.interceptors.request()
const request = async (config)=>{
    return axios(config);
}

export const getAllGithubUsers=async ()=>{
    try{
        const {data} = await request({
            url: '/users'
        })
        return data;
    }catch (e) {
        return [];
    }
}
export const findUser=async (username)=>{
    try{
        const {data} = await request({
            url: `users/${username}`
        })
        return data;
    }catch (e) {
        return null;
    }
}
export const followers=async (payload)=>{
    try{
        const {data} = await request({
            url: `users/${payload.username}/${payload?.follow}`
        })
        return data;
    }catch (e) {
        return [];
    }
}
export const following=async (payload)=>{
    try{
        const {data} = await request({
            url: `users/${payload.username}/${payload?.following}`
        })
        return data;
    }catch (e) {
        return [];
    }
}
export const Repos=async (payload)=>{
    try{
        const {data} = await request({
            url: `users/${payload.username}/${payload?.repos}`
        })
        return data;
    }catch (e) {
        return [];
    }
}
// const users =
// [
//         {
//             username:"user1",
//             name:"User1",
//             id:"1"
//         },

//         {
//             username:"user2",
//             name: "User2",
//             id:"2"

//         },

//         {
//             username:"user3",
//             name: "User3",
//             id:"3"

//         }
//     ]



// export const getAllGithubUsers=async ()=>{
//     const{data}=await axios (API_BASE_URL+"/users")
//     return users;
// }

// export const findUser= async (username)=>{
//     return users.filter(user=>user.username===username)
// }