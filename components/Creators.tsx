import React from 'react'
import one from '@/public/assets/creator1.png'
import two from '@/public/assets/creator2.png'
import Image from 'next/image'

const Creators = () => {
	return (
		<div>
			<div className=' mt-[1rem] flex items-center max-md:flex-col max-md:items-start'>
				<div className=' flex items-center'>
					<div className=' rounded-full border border-white w-[3rem] h-[3rem] relative'>
						<Image
							src={one}
							alt=''
							layout='fill'
							objectFit='cover'
							className=' rounded-full'
						/>
					</div>
					<div className=' rounded-full border border-white w-[3rem] h-[3rem] relative left-[-1.5rem]'>
						<Image
							src={two}
							alt=''
							layout='fill'
							objectFit='cover'
							className=' rounded-full'
						/>
					</div>
				</div>

				<div className=' text-[#aaaaaa] text-sm font-medium'>
					<p className=''>Created by:</p>
					<ul className=' flex items-center gap-10'>
						<li className=''>Oke John</li>
						<li className=' list-disc'>Faith Chike</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Creators
