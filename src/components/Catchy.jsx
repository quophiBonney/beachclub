import React from 'react'
import { Link } from 'react-router-dom'

const Catchy = () => {
  return (
    <div className="catchy flex justify-center flex-col gap-6 items-center mt-10 h-full lg:h-screen">
     <div className="p-10 mx-auto max-w-4xl space-y-5 text-center">
         <h4 className="text-xl lg:text-5xl text-white">An unforgettable Asian dining journey with an African influence that stimulates all senses</h4>
      <p className="text-white">The Kōzo dining experience is elegant, sophisticated and exquisite. Our farm-to-table concept means we source ingredients from local farms, supporting the African Farmer while maintaining our commitment to bring only fresh ingredients to your tables. The Kōzo food is made to share amongst friends and family, over piquant conversation and exquisite drinks.</p>
      <Link to="/contact" className="bg-amber-600 text-white rounded p-3">
      Explore Our Community
      </Link>
     </div>
    </div>
  )
}

export default Catchy
