import Page from '@/ui/components/Page';
import { App } from '@/ui/shared/Layouts/App';
import React from 'react';

interface Props {
	data: any;
}

const Index: React.FC<Props> = () => {
	return (
		<App>
			<Page title="Home">
				<div></div>
			</Page>
		</App>
	);
};

export default Index;
