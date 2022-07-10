import AppPage from '@/ui/shared/AppPage';
import { Button, FormGroup, Typography } from '@mui/material';

export default function Index() {
	return (
		<AppPage title={`Create a club`}>
			<Typography variant={`h1`}>Create a Club</Typography>
			<FormGroup>
				<Typography variant={`h3`}>Club Type</Typography>
			</FormGroup>
			<FormGroup>
				<Typography variant={`h3`}>Club Information</Typography>
			</FormGroup>
			<FormGroup sx={{ display: `block` }}>
				<Button variant={`contained`}>Create Club</Button>
			</FormGroup>
		</AppPage>
	);
}
