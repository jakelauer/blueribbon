import { ClassDataProp, Decorated, GetFormField, GetValidationRegex } from "./Decorators";

export class BaseForm {
	protected static baseGetFormMetadata<T extends object>(instance: BaseForm) {
		const keys = Object.keys(instance);
		const fields = keys.reduce((acc, key: string) => {
			if (key) {
				const formField = GetFormField(instance, key);
				const validationRegex = GetValidationRegex(instance, key);

				if (formField || validationRegex) {
					acc[key as ClassDataProp<T>] = {
						name: key,
						formField,
						validationRegex,
					};
				}
			}

			return acc;
		}, {} as Record<ClassDataProp<T>, Decorated>);

		return fields;
	}
}
