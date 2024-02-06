'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
interface Props {
	children: React.ReactNode;
}
const VideoRevealEffect: React.FC<Props> = ({ children }: Props) => {
	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.timeline().to('.video__content', {
				scale: 1,
				scrollTrigger: {
					trigger: '#video__container',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
					pin: true,
				},
			});
		});

		return () => ctx.revert();
	}, []);
	return children;
};

export default VideoRevealEffect;
