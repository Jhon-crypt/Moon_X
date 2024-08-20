'use client';
import { useState } from 'react';
import { Avatar } from '@mui/material';
import { IoCopy } from 'react-icons/io5';

import React from 'react';

import ProgressStreakTab from '@/components/usertabs/Progress';
import ProfileSettings from '@/components/usertabs/Settings';
import Notifications from '@/components/usertabs/Notification';
import ProfileCard from '@/components/usertabs/Profilecard';

export default function UserProfile() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message:
        'New Course Alert: A new course you may like "Web3 Basics" is available now on the course page.',
      time: '01:50pm',
      read: false,
    },
    {
      id: 2,
      message:
        'New Course Alert: A new course you may like "Web3 Basics" is available now on the course page.',
      time: '01:50pm',
      read: false,
    },
    {
      id: 3,
      message:
        'New Course Alert: A new course you may like "Web3 Basics" is available now on the course page.',
      time: '01:50pm',
      read: false,
    },
    {
      id: 4,
      message:
        'New Course Alert: A new course you may like "Web3 Basics" is available now on the course page.',
      time: '01:50pm',
      read: false,
    },
    {
      id: 5,
      message:
        'New Course Alert: A new course you may like "Web3 Basics" is available now on the course page.',
      time: '01:50pm',
      read: false,
    },
    {
      id: 6,
      message:
        'New Course Alert: A new course you may like "Web3 Basics" is available now on the course page.',
      time: '01:50pm',
      read: false,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };
  const [activeTab, setActiveTab] = useState('Profile');
  const renderContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <ProgressStreakTab />;

      case 'Notification':
        return (
          <Notifications
            notifications={notifications}
            onMarkAsRead={markAllAsRead}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className=" bg-[#00122C] py-[10rem] ">
      <div className=" w-[80vw] mx-auto max-sm:w-[90vw]">
        <div>
          {/* card */}
          <div className="bg-[#192A41]  border rounded-xl border-white">
            <div className="p-[1rem] sm:p-[2rem]">
              {/* for menu */}
              <div className="flex items-center justify-between mb-3 sm:mb-7 ">
                <div className="flex gap-4">
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{
                      width: { xs: 40, sm: 56 }, // 40px width for mobile, 56px for larger screens
                      height: { xs: 40, sm: 56 }, // 40px height for mobile, 56px for larger screens
                      border: '2px solid white', // 2px white border
                    }}
                  />
                  <div className="mt-1">
                    <p className="text-white text-sm md:text-lg">Adam Trust</p>
                    <p className="text-white md:text-sm text-xs gap-2">
                      000x1234567890{' '}
                      <span className="inline-flex text-blue-900">
                        {' '}
                        <IoCopy />{' '}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <button className="py-2 px-2 text-sm md:text-base md:py-3 md:px-3 text-white border border-1 border-white rounded-lg">
                    Update Profile
                  </button>
                </div>
              </div>
              {/* for tab */}
              <div className=" ">
                <div className="flex items-center gap-1 justify-between">
                  <button
                    onClick={() => setActiveTab('Profile')}
                    className={`w-1/2 h-12 md:h-16 text-sm md:text-base rounded-md flex items-center justify-center transition duration-500 ${
                      activeTab === 'Profile'
                        ? 'bg-[#FFEECB] font-semibold text-black'
                        : 'text-white hover:bg-[#ffeecb] hover:font-semibold hover:text-black'
                    }`}
                  >
                    Profile
                  </button>

                  <button
                    onClick={() => setActiveTab('Notification')}
                    className={`w-1/2 h-12 md:h-16 text-sm md:text-base rounded-md flex items-center justify-center transition duration-500 ${
                      activeTab === 'Notification'
                        ? 'bg-[#FFEECB] font-semibold text-black'
                        : 'text-white hover:bg-[#ffeecb] hover:font-semibold hover:text-black'
                    }`}
                  >
                    Notification
                  </button>
                </div>
              </div>
              <hr className="bg-white h-[2px] md:-ml-7 md:-mr-7 mt-1 mb-3 sm:mb-7" />
<<<<<<< HEAD
              <ProfileCard />
=======
              <div className="mx-auto max-w-5xl mb-3 md:mb-7">
                <div className="grid grid-cols-4 gap-2 md:gap-8">
                  {/* small card */}
                  <div className="rounded-xl py-2 px-2   md:px-4  md:py-6 bg-white text-black text-center md:space-y-4">
                    <p className="text-xs font-bold">Balance</p>
                    <p className="text-sm md:text-2xl font-bold">124 Mand</p>
                  </div>
                  {/* small card */}
                  <div className="rounded-xl  py-2 px-2   md:px-4  md:py-6 bg-white text-black text-center md:space-y-4">
                    <p className="text-xs font-bold">Daily Streak </p>
                    <p className="text-sm  md:text-2xl font-bold">24</p>
                  </div>
                  {/* small card */}
                  <div className="rounded-xl  py-2 px-2  md:px-4  md:py-6 bg-white text-black text-center md:space-y-4">
                    <p className="text-xs font-bold">Courses </p>
                    <p className="text-sm  md:text-2xl font-bold">3</p>
                  </div>
                  {/* small card */}
                  <div className="rounded-xl  py-2 px-2  md:px-4  md:py-6 bg-white text-black text-center md:space-y-4">
                    <p className="text-xs font-bold">Rank </p>
                    <p className="text-sm  md:text-2xl font-bold">150</p>
                  </div>
                </div>
              </div>
>>>>>>> 790dac59192404d2cc4480fc2bbb1e290345e0ec
            </div>
            {/* Profile tab  grid*/}
            <div className="mt-4">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
