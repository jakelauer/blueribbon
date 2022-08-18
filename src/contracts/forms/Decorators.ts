import "reflect-metadata";

export type ExcludeMethods<T> = Pick<
	T,
	{ [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
>;

export type ClassDataProp<T> = NonNullable<keyof ExcludeMethods<T>>;
export type ClassDataProps<T> = (keyof ExcludeMethods<T>)[];

export interface Decorated {
	name: string;
	formField: {
		fieldType: string;
		label: string;
		groupLabel: string;
		selectVals: Record<string, string>;
	};
	validationRegex?: string;
}

const formFieldKey = Symbol(`FormField`);
const validationRegexKey = Symbol(`ValidationRegex`);

export type FieldTypes =
	| "text"
	| "number"
	| "radio"
	| "check"
	| "switch"
	| "longtext"
	| "datetime"
	| "select";

export const FormField = (
	fieldType: FieldTypes,
	formField: {
		label: string;
		groupLabel?: string;
		selectVals?: Record<string, string>;
	}
) =>
{
	return Reflect.metadata(formFieldKey, {
		fieldType,
		...formField
	});
};

export const GetFormField = (target: any, propertyKey: string) =>
{
	return Reflect.getMetadata(formFieldKey, target, propertyKey);
};

export const ValidationRegex = (regex: string) =>
{
	return Reflect.metadata(validationRegexKey, regex);
};

export const GetValidationRegex = (target: Object, propertyKey: string) =>
{
	return Reflect.getMetadata(validationRegexKey, target, propertyKey);
};
