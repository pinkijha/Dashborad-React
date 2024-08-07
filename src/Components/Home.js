import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid';
import NetProfit from './NetProfit';
import CustomShapeBarChart from './CustomShapeBarChart';
import GoalsChart from './GoalsChart';
import Orders from './Orders';
import CustomerFeedback from './CustomerFeedback';

const Home = () => {
  return (
    <div>
      <h1 className='text-white text-2xl ml-4 mt-4 font-bold'>
        Dashboard
      </h1>
      <div className='flex '>
       <div><DashboardStatsGrid /></div>
       <div><NetProfit/></div>
      </div>
      <div className='flex'>
        <div><CustomShapeBarChart/></div>
        <div><GoalsChart/></div>
        </div>
      <div className='flex'>
        <div><Orders/></div>
        <div><CustomerFeedback/></div>
        </div>      
      
    </div>
  )
}

export default Home;
