import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userContext } from '../components/context/user'
import delete1 from "../components/assets/delete1.svg"

function Dashboard() {
  const baseURL = "https://api.volcanocapital.net"

  const history = useHistory("/")
  const {user} = useContext(userContext)

  const [users, setUsers] = useState([])

  useEffect(() => {
    const verify = async () => {
      const { data } = await axios.get(`${baseURL}/admin`, { headers: { verify: user?.verify } })
      if(!data.verify) history.push("/")
    }
    verify()
  }, [user?.verify, history])

  useEffect(()=>{
    const getUsers =async ()=> {
      const {data} = await axios.get(`${baseURL}/users`)
      setUsers(data)
    }
    getUsers()
  },[])

  const deleteUser = async(id)=>{
    setUsers((users)=>users.filter((user)=>user.id!==id))
    axios.delete(`${baseURL}/users/${id}`)
  }

  return (
    <div>
      <div className='flex justify-between items-center py-3 px-6 bg-dark-blue'>
      <Link to="/"><img className='sm:w-40 w-20' src={require("../components/assets/images/header/logo.png")} alt="" /></Link>
      <div className='text-white text-2xl sm:text-4xl text-bold'>Welcome Admin</div>
      </div>
      <div className='sm:p-8 p-3'>
      <table className="content-table w-full">
        <thead>
          <tr>
          { window.innerWidth>650 &&<th> Number</th>}
            <th>Email</th>
          { window.innerWidth>650 &&<th> Country</th>}
            <th>Acions</th>
          </tr>
        </thead>
        <tbody>
            {
              users.map((user,index)=>(
              <tr key={user.id} className="hover:bg-fade">
                { window.innerWidth>650 && <td className='text-lg font-bold'>{index+1}</td>}
                <td className='text-lg font-bold'>{user.email}</td>
                { window.innerWidth>650 && <td className='text-lg font-bold'>{user.country}</td>}
                <td className='text-lg font-bold flex items-center justify-between sm:justify-around'><img className='w-10 cursor-pointer hover:text-red-200' src={delete1} alt="" onClick={()=>deleteUser(user.id)}/><a href={`mailto:${user.email}`}>Send</a></td>
              </tr>
              ))
            }
        </tbody>
    </table>
      </div>
    </div>
  )
}

export default Dashboard