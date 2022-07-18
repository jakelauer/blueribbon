import {
	Box,
	Button,
	FormGroup,
	Step,
	StepContent,
	StepLabel,
	Stepper,
} from '@mui/material';
import { ReactElement, useState } from 'react';

type NamedElement = ReactElement<{ 'data-name': string }>;

export interface Props {
	onChange?: (currentStep: number, incomingStep: number) => void;
	onComplete?: () => void;
	transitionTimeMs?: number;
	children: NamedElement[];
	labels?: {
		next?: string;
		prev?: string;
		complete?: string;
	};
}

export const WizardForm: React.FC<Props> = ({ children, labels, onChange }) => {
	const [step, setStep] = useState(0);

	const changeStep = (newStep: number) => {
		onChange?.(step, newStep);
		setStep(newStep);
	};

	const nextStep = () => changeStep(step + 1);
	const prevStep = () => changeStep(step - 1);

	return (
		<>
			<Stepper orientation="vertical" activeStep={step}>
				{children.map((c, i) => {
					return (
						<Step key={i}>
							<StepLabel>{c.props[`data-name`]}</StepLabel>
							<StepContent>{c}</StepContent>
						</Step>
					);
				})}
			</Stepper>

			<FormGroup sx={{ flexDirection: `row` }}>
				<Box
					sx={{
						display: `flex`,
						flex: `1 0`,
						justifyContent: `flex-end`,
						m: 1,
					}}
				>
					<Button
						variant={`contained`}
						onClick={prevStep}
						disabled={step === 0}
					>
						{labels?.prev}
					</Button>
				</Box>
				<Box
					sx={{
						display: `flex`,
						flex: `1 0`,
						justifyContent: `flex-start`,
						m: 1,
					}}
				>
					{step === children.length - 1 ? (
						<Button variant={`contained`}>
							{labels?.complete}
						</Button>
					) : (
						<Button variant={`contained`} onClick={nextStep}>
							{labels?.next}
						</Button>
					)}
				</Box>
			</FormGroup>
		</>
	);
};

WizardForm.defaultProps = {
	transitionTimeMs: 500,
	labels: {
		complete: `Finish`,
		next: `Next`,
		prev: `Previous`,
	},
};
