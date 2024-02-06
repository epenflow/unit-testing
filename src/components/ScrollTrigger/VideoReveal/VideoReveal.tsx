import React from 'react';
import VideoRevealEffect from './Effects/VideoRevealEffect';

const VideoReveal = async () => {
	return (
		<VideoRevealEffect>
			<section
				id='video__container'
				className='h-screen relative w-screen'>
				<div className='video__content bg-black w-screen h-screen p-2 text-white'>
					<h1>hello</h1>
				</div>
			</section>
		</VideoRevealEffect>
	);
};

export default VideoReveal;
