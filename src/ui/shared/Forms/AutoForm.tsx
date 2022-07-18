import { Decorated, FieldTypes } from '@/contracts/forms/Decorators';
import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	MenuItem,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material';
import { ComponentType, Fragment, ReactNode } from 'react';

import { WizardForm } from './WizardForm';

interface Props {
	title: ReactNode;
	formSchema: Record<string, Decorated>;
	groupStepper?: boolean;
}

interface FieldProps extends Decorated {}

const FormTypes: Record<FieldTypes, ComponentType<FieldProps>> = {
	check: ({ formField, ...rest }: FieldProps) => (
		<FormControlLabel
			control={<Checkbox {...rest} />}
			label={formField.label}
		/>
	),
	datetime: ({ ...rest }: FieldProps) => <Checkbox {...rest} />,
	longtext: ({ formField, ...rest }: FieldProps) => (
		<TextField label={formField.label} rows={4} multiline {...rest} />
	),
	number: ({ ...rest }: FieldProps) => <Checkbox {...rest} />,
	radio: ({ formField, ...rest }: FieldProps) => (
		<FormControl>
			<FormLabel>{formField.label}</FormLabel>
			<RadioGroup {...rest}>
				{Object.keys(formField.selectVals).map((key) => (
					<FormControlLabel
						key={key}
						value={key}
						control={<Radio />}
						label={formField.selectVals[key]}
					/>
				))}
			</RadioGroup>
		</FormControl>
	),
	switch: ({ ...rest }: FieldProps) => <Checkbox {...rest} />,
	text: ({ formField, ...rest }: FieldProps) => (
		<TextField label={formField.label} {...rest} />
	),
	select: ({ formField, ...rest }: FieldProps) => (
		<TextField label={formField.label} select {...rest}>
			{Object.keys(formField.selectVals).map((key) => (
				<MenuItem key={key} value={key}>
					{formField.selectVals[key]}
				</MenuItem>
			))}
		</TextField>
	),
};

export const AutoForm: React.FC<Props> = ({
	formSchema,
	title,
	groupStepper,
}) => {
	const fieldGroups = Object.keys(formSchema).reduce((acc, fieldName) => {
		const decorated = formSchema[fieldName] as Decorated;
		const groupLabel = decorated.formField.groupLabel ?? ``;
		const Field = FormTypes[decorated.formField.fieldType as FieldTypes];

		if (!Field) {
			throw new Error(
				`Invalid field type ${decorated.formField.fieldType}`,
			);
		}

		acc[groupLabel] = acc[groupLabel] ?? [];
		acc[groupLabel].push({
			label: decorated.formField.label,
			renderable: <Field {...decorated} />,
		});

		return acc;
	}, {} as { [groupLabel: string]: { label: string; renderable: ReactNode }[] });

	const inside = Object.keys(fieldGroups).map((fieldGroup) => (
		<FormGroup key={fieldGroup} data-name={fieldGroup}>
			{!groupStepper && (
				<Typography variant={`h4`}>{fieldGroup}</Typography>
			)}
			{fieldGroups[fieldGroup].map((field, i) => (
				<Fragment key={i}>{field.renderable}</Fragment>
			))}
		</FormGroup>
	));

	return (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			sx={{
				'& .MuiFormControl-root': {
					m: 1,
					maxWidth: groupStepper ? `90%` : undefined,
				},
			}}
		>
			<FormGroup sx={{ m: 1 }}>
				<Typography variant={`h2`}>{title}</Typography>
			</FormGroup>
			{groupStepper ? <WizardForm>{inside}</WizardForm> : <>{inside}</>}
		</Box>
	);
};
