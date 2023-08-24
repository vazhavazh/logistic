import React from 'react';

type WaveProps = {
	
};

const Wave:React.FC<WaveProps> = () => {
	
	return (
		<div className='relative h-[144px]'>
			<div className='wrapper four'>
				<div className='type'>
					<h3 className='typing'>СТС Логістікс</h3>
				</div>
			</div>
			<div className='ocean'>
				<div className='wave'></div>
				<div className='wave'></div>
			</div>
		</div>
	);
}
export default Wave;