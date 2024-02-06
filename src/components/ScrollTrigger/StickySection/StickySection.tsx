import React from 'react';
import MappingComponent from '@/libs/utils/components/MappingComponent';
import StickySectionEffect from './Effects/StickySectionEffect';

const StickySection = () => {
	const COLORS = {
		primary: '#9D9D9D',
		secondary: '#C7C7C7',
	};
	return (
		<StickySectionEffect>
			<MappingComponent
				of={[1, 2, 3, 4, 5, 6]}
				render={(item, index) => (
					<section
						key={index}
						className='sticky--section'>
						<div
							className='content--inner'
							style={{
								backgroundColor:
									item % 2 === 0
										? COLORS.primary
										: COLORS.secondary,
							}}></div>
					</section>
				)}
			/>
		</StickySectionEffect>
	);
};

export default StickySection;
