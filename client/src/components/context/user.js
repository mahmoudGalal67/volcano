import React , {createContext, useState} from 'react'

export const userContext = createContext()


export function UserProvider({children}) {
  
  const defaultUser = JSON.parse(localStorage.getItem("user")) || null
  const [user, setuser] = useState(defaultUser)
  
  const setUser = (user)=>{
    setuser(user)
    localStorage.setItem("user" , JSON.stringify(user))
  }

  const logOut =()=>{
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <userContext.Provider value={{user, setUser,logOut}}>
      {children}
    </userContext.Provider>
  )
}
