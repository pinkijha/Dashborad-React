import React from 'react'
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";

const DashboardStatsGrid = () => {
  const iconClassNames = "bg-blue-400 text-5xl text-blue-800 m-1 rounded-lg p-2";
  const iconClassNames1 = "bg-green-300 text-5xl text-green-900 m-1 rounded-lg p-2";
  const iconClassNames2 = "bg-red-300 text-5xl text-red-800 m-1 rounded-lg p-2";
  const containerClassNames = "w-36 h-32 p-2 m-4 bg-dark-navy rounded"; 

  return (
    <div className='flex flex-wrap justify-center md:justify-start'>
      <div className={containerClassNames}>
        <RiShoppingBasket2Fill className={iconClassNames} />
        <p className='text-white text-md'>Total Orders</p>
        <div className='flex'>
          <div className='text-white font-bold text-2xl'>75</div>
          <select className='bg-transparent ml-11 text-green-400'><option>3%</option></select>
        </div>        
      </div>

      <div className={containerClassNames}>
        <GiShoppingBag className={iconClassNames1} />
        <p className='text-white text-md'>Total Delivered</p>
        <div className='flex'>
          <div className='text-white font-bold text-2xl'>70</div>
          <select className='bg-transparent ml-11 text-red-400'><option>3%</option></select>
        </div>           
      </div>

      <div className={containerClassNames}>
        <GiShoppingBag className={iconClassNames2} />
        <p className='text-white text-md'>Total Cancelled</p>
        <div className='flex'>
          <div className='text-white font-bold text-2xl'>05</div>
          <select className='bg-transparent ml-11 text-green-400'><option>3%</option></select>           
        </div>
      </div>

      <div className={containerClassNames}>
        <FcCurrencyExchange className={iconClassNames} />
        <p className='text-white text-md'>Total Profit</p>
        <div className='flex'>
          <div className='text-white font-bold text-2xl'>$15k</div>
          <select className='bg-transparent ml-8 text-green-400'><option>3%</option></select>
        </div>
      </div>

      <div className={containerClassNames}>
        <FcBullish className={iconClassNames1} />
        <p className='text-white text-md'>Total Revenue</p>
        <div className='flex'>
          <div className='text-white font-bold text-2xl'>$12k</div>
          <select className='bg-transparent ml-8 text-red-400'><option>3%</option></select>
        </div>
      </div>
    </div>
  )
}

export default DashboardStatsGrid
