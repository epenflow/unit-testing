import React from 'react';

interface Props {
	state: boolean;
	children: React.ReactNode;
	secondChild: React.ReactNode;
}
const ConditionComponents = ({ state, children, secondChild }: Props) => {
	return state ? children : secondChild;
};

export default ConditionComponents;
