'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import Rewardcard from '@/components/usertabs/Rewardcard';
import Leaderboard from '@/components/usertabs/LeaderboardCard';

export default function Reward() {
  const [activeTab, setActiveTab] = useState('Reward');
  const renderContent = () => {
    switch (activeTab) {
      case 'Reward':
        return <Rewardcard />;

      case 'Leaderboard':
        return <Leaderboard />;

      default:
        return null;
    }
  };
  return (
    <div className=" bg-[#00122C] py-[10rem] ">
      <div className=" w-[80vw] mx-auto max-sm:w-[98vw]">
        <div className="bg-[#192A41]  border rounded-[2rem] border-white">
          <div className="bg-[#00122C] rounded-t-[2rem]  flex  items-center py-[3rem] justify-center">
            <h3 className="text-white  text-lg">Rewards</h3>{' '}
          </div>
          <hr className="bg-white  h-[2px]" />
          <div className="bg-[#192A41] rounded-[2rem]  py-[1rem]">
            {/* tab */}

            <div className="px-[1rem] flex items-center gap-1 justify-between">
              <button
                onClick={() => setActiveTab('Reward')}
                className={`w-1/2 h-12 md:h-16 text-sm md:text-base rounded-md flex items-center justify-center transition duration-500 ${
                  activeTab === 'Reward'
                    ? 'bg-[#FFEECB] font-semibold text-black'
                    : 'text-white hover:bg-[#ffeecb] hover:font-semibold hover:text-black'
                }`}
              >
                Reward
              </button>

              <button
                onClick={() => setActiveTab('Leaderboard')}
                className={`w-1/2 h-12 md:h-16 text-sm md:text-base rounded-md flex items-center justify-center transition duration-500 ${
                  activeTab === 'Leaderboard'
                    ? 'bg-[#FFEECB] font-semibold text-black'
                    : 'text-white hover:bg-[#ffeecb] hover:font-semibold hover:text-black'
                }`}
              >
                Leaderboard
              </button>
            </div>
            <div className="mt-4">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
