import React from 'react'
interface User{
  id: number
  name: string
}
const pageUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: {revalidate: 10}})
    const users: User[]= await res.json();
  return (
    <div>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>{ users.map(user=><li key={user.id}>{user.name}</li>)}</ul>
    </div>
  )
}

export default pageUser
