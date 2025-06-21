import React from 'react'
import UserNav from './UserNav'
import UserTripData from './UserTripData'

export default function UserDashboard() {
  return (
    <div className='flex'>
      <UserNav/>
      <div className='flex flex-col md:ml-[20%] flex-1 mt-[20%] md:mt-0'>
        <UserTripData/>
      </div>
    </div>
  )
}

