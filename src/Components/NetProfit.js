import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NetProfit = () => {
  const percentage = 66;
  return (
    <div className="flex flex-col sm:flex-row p-4 w-full sm:w-[500px] h-auto sm:h-32 m-4 bg-dark-navy text-white rounded">
      <div className="flex-1 text-center sm:text-left">
        <p className="text-lg font-semibold mb-1">Net Profit</p>
        <p className="text-2xl sm:text-4xl font-bold">$6759.25</p>
        <select className="bg-transparent text-green-400 mt-2">
          <option>3%</option>
        </select>
      </div>

      <div className="flex items-center justify-center sm:ml-8 mt-4 sm:mt-0 sm:w-1/2">
        <div className="relative w-24 h-24">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <span className="absolute bottom-0 left-full ml-2 text-xs text-white">
            Total values.
          </span>
        </div>
      </div>
    </div>
  );
}

export default NetProfit;
