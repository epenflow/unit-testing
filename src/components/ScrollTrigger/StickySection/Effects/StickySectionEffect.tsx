'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from '@studio-freight/react-lenis';
import Lenis from '@studio-freight/lenis';
gsap.registerPlugin(ScrollTrigger);
interface Props {
	children: React.ReactNode;
}
const StickySectionEffect: React.FC<Props> = ({ children }) => {
	React.useLayoutEffect(() => {
		const stickySectionClass = gsap.utils.toArray('.sticky--section');
		const lenis = new Lenis({
			lerp: 0.01,
			smoothWheel: true,
		});
		const update = (time: number) => {
			lenis.raf(time * 1000);
		};
		const iniSmoothScrolling = () => {
			lenis.on('scroll', () => ScrollTrigger.update());
			// const scrollFn = (time: number) => {
			// 	lenis.raf(time);
			// 	requestAnimationFrame(scrollFn);
			// };
			// requestAnimationFrame(scrollFn);
			gsap.ticker.add(update);
		};
		const ctx = gsap.context(() => {
			iniSmoothScrolling();
			stickySectionClass.forEach((stickyEl, index) => {
				const isLast = index === stickySectionClass.length - 1;
				const sticky = stickyEl as HTMLElement;
				gsap.timeline({
					scrollTrigger: {
						trigger: sticky,
						start: 'top top',
						end: '+=100%',
						scrub: true,
						markers: true,
						invalidateOnRefresh: true,
					},
				})
					.to(sticky, {
						transformOrigin: `${index % 2 === 0 ? 0 : 100}% ${
							isLast ? 100 : 0
						}%`,
					})
					.to(
						sticky,
						{
							scale: 0,
							borderRadius: 200,
							ease: 'none',
						},
						0
					);
			});
		});
		return () => {
			ctx.revert();
			gsap.ticker.remove(update);
		};
	}, []);
	return children;
};

export default StickySectionEffect;
