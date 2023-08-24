import React from 'react';

type WaveProps = {
	
};

const Wave:React.FC<WaveProps> = () => {
	
	return (
		<div className='relative h-[176px]'>
			<div className='ocean'>
				<div className='wave'></div>
				<div className='wave'></div>
			</div>
		</div>
	);
}
export default Wave;