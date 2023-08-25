import React from "react";

type HeroBannerProps = {};

const HeroBanner: React.FC<HeroBannerProps> = () => {
	return (
		<div className='flex justify-center whitespace-pre-wrap text-main-gray'>
			<h2 className='hero-banner'>
				<span className='hero-banner-text text-5xl font-bold'>Оренда </span>
				<span className='hero-banner-text text-5xl font-bold'>спецтехніки </span>
				<span className='hero-banner-text text-5xl font-bold'>та </span>
				<span className='hero-banner-text text-5xl font-bold'>послуги </span>
				<span className='hero-banner-text text-5xl font-bold'>по </span>
				<span className='hero-banner-text text-5xl font-bold'>всій </span>
				<span className='hero-banner-text text-5xl font-bold'>Україні </span>
			</h2>
		</div>
	);
};
export default HeroBanner;
