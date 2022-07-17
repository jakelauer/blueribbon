import AppPage from '@/ui/shared/AppPage';
import {
	Button,
	Card,
	CardContent,
	FormGroup,
	Grid,
	Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';

import {
	ClubType,
	ClubTypeLabels,
	ClubTypes,
} from '../../../contracts/club/ClubTypes';

export default function Index() {
	const [selectedClubType, setSelectedClubType] = useState<
		ClubType | undefined
	>();

	return (
		<AppPage title={`Create a club`}>
			<Typography variant={`h1`}>Create a Club</Typography>
			<FormGroup>
				<Typography variant={`h3`}>Club Type</Typography>
				<Grid container spacing={2}>
					{ClubTypes.map((clubType) => (
						<Grid item xs={4} key={clubType}>
							<Card
								sx={{
									cursor: `pointer`,
									flex: 1,
									background:
										selectedClubType === clubType
											? grey[100]
											: `transparent`,
								}}
								onClick={() => setSelectedClubType(clubType)}
							>
								<CardContent>
									<Typography>
										{ClubTypeLabels[clubType]}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
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
