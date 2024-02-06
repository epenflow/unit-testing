'use client';
import React from 'react';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const RegisterPlugin = () => {
	useIsomorphicLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);
	return null;
};

export default RegisterPlugin;
