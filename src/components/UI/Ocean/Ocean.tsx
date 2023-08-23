import React from "react";

type OceanProps = {};

const Ocean: React.FC<OceanProps> = () => {
	return (
		<div className='relative h-[180px] bg-gray-300 flex justify-center'>
			<div className='ocean'>
				<div className='wave'></div>
				<div className='wave'></div>
				<div className='wave'></div>
			</div>

			<div className='absolute bottom-[-16%] container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<h3 className='animate-charcter'>СТС</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Ocean;
