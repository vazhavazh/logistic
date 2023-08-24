import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { FaPencilAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

type TopBarProps = {};

const TopBar: React.FC<TopBarProps> = () => {
	const [contactNumber, setContactNumber] = useState(false);

	const handleClickONContact = () => {
		setContactNumber(!contactNumber);
	};

	return (
		<div className='bg-accent-color py-8 px-10'>
			<ul className='w-full flex  items-center  justify-between text-lg'>
				<li className='flex gap-1 items-center   text-center'>
					<AiOutlineClockCircle className='text-white-main animate-rotate w-6 h-6' />
					<span className='text-white-main'>Графік роботи: 08:00-19:00</span>
				</li>
				<li
					onClick={handleClickONContact}
					className='flex flex-col cursor-pointer relative min-w-[188px]'>
					{contactNumber ? (
						<>
							<div className=' flex items-center gap-1'>
								<span className='text-white-main'>+38 (xxx) xxx-xx-xx</span>
								<GoTriangleDown />
							</div>
							<div className='absolute bottom-[-100%] flex items-center gap-1'>
								<span className='text-white-main pop-outin'>
									+38 (063) 851-61-91
								</span>
								<GoTriangleUp />
							</div>
						</>
					) : (
						<div className=' flex items-center gap-1'>
							<span className='text-white-main'>+38 (xxx) xxx-xx-xx</span>
							<GoTriangleDown />
						</div>
					)}
				</li>
				<li className='flex items-center gap-1 cursor-pointer transition-all hover:scale-125'>
					<FaPencilAlt className='text-white-main' />
					<span className='text-white-main'>Напиши нам</span>
				</li>
				<li className='flex items-center gap-1 cursor-pointer transition-all hover:scale-125'>
					<MdAddIcCall className='text-white-main' />
					<span className='text-white-main'>Ми вам передзвонемо</span>
				</li>
			</ul>
		</div>
	);
};
export default TopBar;
