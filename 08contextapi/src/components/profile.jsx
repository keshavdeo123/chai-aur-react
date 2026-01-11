import React,{useContext} from 'react'
import userContext from '../context/UserContext'
function profile() {
   const {user}=useContext(userContext)
  
   if (!user) {
    return <div>Please Logged Inn</div>
    
   }
   return <div> Welcome {user.username}</div>
}

export default profile