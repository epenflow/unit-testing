'use client';
import useIsomorphicLayoutEffect from '@/libs/hooks/useIsomorphicLayoutEffect';
import React from 'react';
import ConditionComponents from './ConditionComponents';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
interface Props {
	children: React.ReactNode;
	container: DocumentFragment | HTMLElement;
}
const CreatePortalComponent = ({ children, container }: Props) => {
	const [domReady, setDomReady] = React.useState<boolean>(false);
	useIsomorphicLayoutEffect(() => {
		setDomReady(true);
	}, []);
	return (
		<ConditionComponents
			state={domReady}
			secondChild={null}>
			{createPortal(
				children,
				container as HTMLElement | DocumentFragment
			)}
		</ConditionComponents>
	);
};

export default dynamic(() => Promise.resolve(CreatePortalComponent), {
	ssr: false,
});
