import React from 'react'
import { data } from 'react-router-dom';

function Github(){
    useEffect (() =>{
fetch(Githublink)
.then(response => response.json())
.then(data => {
    console.log(data);
    seltData(data)
    })

    } , [])
    return (
        <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'> Github Followers: {data.follower}
        <img src = {data.avatar_url} alt="Github Picture"/>
        </div>
    )
}

export default Github 