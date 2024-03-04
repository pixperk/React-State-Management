import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>You Have not logged in</div>

    return <div>Welcome {user.userName}<br/>
   Your Password is {user.password}</div>
}

export default Profile

