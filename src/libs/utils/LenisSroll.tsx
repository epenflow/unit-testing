'use client';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const LenisSroll = () => {
	useIsomorphicLayoutEffect(() => {
		const lenis = new Lenis({
			smoothWheel: true,
			lerp: 0.025,
			syncTouch: true,
			syncTouchLerp: 0.025,
			autoResize: true,
			touchInertiaMultiplier: 5.5,
		});
		function update(time: number) {
			lenis.raf(time * 1000);
		}
		function initSmoothScrolling() {
			lenis.on('scroll', () => ScrollTrigger.update);
			gsap.ticker.add(update);
			gsap.ticker.lagSmoothing(0);
		}
		initSmoothScrolling();
		return () => {
			gsap.ticker.remove(update);
		};
	}, []);
	return null;
};

export default LenisSroll;
