import { Decorated, FieldTypes } from '@/contracts/forms/Decorators';
import {
	Box,
	Checkbox,
	FormControlLabel,
	FormGroup,
	TextField,
	Typography,
} from '@mui/material';
import { ComponentType, ReactNode } from 'react';

interface Props {
	title: ReactNode;
	formSchema: Record<string, Decorated>;
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
	longtext: ({ ...rest }: FieldProps) => <Checkbox {...rest} />,
	number: ({ ...rest }: FieldProps) => <Checkbox {...rest} />,
	radio: ({ ...rest }: FieldProps) => <Checkbox {...rest} />,
	switch: ({ ...rest }: FieldProps) => <Checkbox {...rest} />,
	text: ({ formField, ...rest }: FieldProps) => (
		<TextField label={formField.label} {...rest} />
	),
};

export const AutoForm: React.FC<Props> = ({ formSchema, title }) => {
	const fields = Object.keys(formSchema).map((fieldName) => {
		const decorated = formSchema[fieldName];
		const Field = FormTypes[decorated.formField.fieldType as FieldTypes];

		return {
			label: decorated.formField.label,
			renderable: <Field {...decorated} />,
		};
	});

	return (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			sx={{
				'& .MuiTextField-root': { m: 1, width: `50ch` },
			}}
		>
			<FormGroup sx={{ m: 1 }}>
				<Typography variant={`h4`}>{title}</Typography>
			</FormGroup>
			{fields.map((field, i) => (
				<FormGroup key={i}>{field.renderable}</FormGroup>
			))}
		</Box>
	);
};
