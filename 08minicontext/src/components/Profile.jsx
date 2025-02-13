import React  , {useContext } from 'react'

import UserContext from '../context/UserContext'

function Profile(){
    const {user} = useContext(UserContext)

    if(!user) return(
        <div>Profilemlogin</div>
    )
    return(<><welcome>{user.Username}</welcome></>)
}
export default Profile