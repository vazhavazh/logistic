import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
	return (
		<div className='flex bg-accent-color2 p-6 text-white-main gap-20 text-xl  rounded-xl'>
			<ul className='flex flex-col gap-9'>
				<li>
					<Link href='/'>
						<div className='nav-link2'>
							<span>Автокрани</span>
						</div>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<div className='nav-link2'>
							<span>Автовишки</span>
						</div>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<div className='nav-link2'>
							<span>Екскаватори</span>
						</div>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<div className='nav-link2'>
							<span>Бульдозери</span>
						</div>
					</Link>
				</li>
			</ul>
			<ul className='flex flex-col gap-9'>
				<li>
					<Link href='/'>
						<div className='nav-link2'>
							<span>Мінітехніка</span>
						</div>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<div className='nav-link2'>
							<span>Грейдери</span>
						</div>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<div className='nav-link2'>
							<span>Катки</span>
						</div>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<div className='nav-link2'>
							<span>Навантажувачі</span>
						</div>
					</Link>
				</li>
			</ul>

			<div className='inline-block w-full max-h-[250px]'>
				<Image
					className='max-w-full max-h-[100%]'
					width={920}
					height={799}
					src='/specEquip.png'
					alt='specEquip'
				/>
			</div>
		</div>
	);
};
export default Hero;
