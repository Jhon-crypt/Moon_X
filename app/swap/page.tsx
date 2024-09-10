import React from 'react';
import saly from '@/public/assets/Saly2.png';
import Image from 'next/image';
import star from '@/public/assets/star2.png';
export default function page() {
  return (
    <div>
      <div className=" bg-[#00122C] py-[2rem] overflow-hidden">
        <div className=" w-[80vw] mx-auto max-sm:w-[98vw]">
          <div className="md:flex justify-center items-center">
            <div className="mb-2 md:mb-5 overflow-hidden p-5 md:p-0">
              <p className="text-[#ff6636] font-semibold text-lg md:text-xl uppercase">
                coming soon
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-medium">
                This feature is coming very soon. stay tuned
              </h1>
            </div>
            <div className="relative">
              <Image src={saly} alt="saly" />
              <div className="absolute bottom-[6%] left-[45%]">
                <Image src={star} alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
