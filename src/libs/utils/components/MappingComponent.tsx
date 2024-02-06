import React from 'react';

const MappingComponent = <T,>({
	of,
	render,
}: {
	of: T[];
	render: (item: T, index: number) => React.ReactNode;
}) => React.Children.toArray(of.map((item, index) => render(item, index)));

export default MappingComponent;
