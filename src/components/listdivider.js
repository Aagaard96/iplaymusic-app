import React from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { FiHash } from "react-icons/fi";

export default function ListDivider() {
  return (
    <div className="grid grid-cols-8 items-center border-b-1 border-b-[#EE0979] pb-2 mb-2">
      <span><FiHash /></span>
      <p className="col-start-2">Title</p>
      <span className="col-start-8 flex justify-end">
        <IoTimeOutline />
      </span>
    </div>
  )
}
