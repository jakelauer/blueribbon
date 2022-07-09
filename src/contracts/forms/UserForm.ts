import { BaseUser } from '../user/BaseUser';
import { BaseForm } from './BaseForm';
import { FormField, ValidationRegex } from './Decorators';

export class UserForm extends BaseForm implements BaseUser {
	joinDate?: string;
	updatedDate?: string | undefined;

	@FormField(`Username`, `text`)
	@ValidationRegex(`[a-zA-Z0-9-_]{0-15}`)
	username?: string;

	@FormField(`First Name`, `text`)
	firstName?: string | undefined;

	@FormField(`Last Name`, `text`)
	lastName?: string | undefined;

	@FormField(`Address Line 1`, `text`)
	addressLine1?: string | undefined;

	@FormField(`Address Line 2`, `text`)
	addressLine2?: string | undefined;

	@FormField(`City`, `text`)
	city?: string | undefined;

	@FormField(`State`, `text`)
	state?: string | undefined;

	@FormField(`Zip`, `text`)
	@ValidationRegex(`^[0-9]{5}$|^([0-9]{5}-[0-9]{4})$`)
	zip?: string | undefined;

	@FormField(`Phone Number`, `text`)
	@ValidationRegex(`^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$`)
	phone?: string | undefined;

	public getFormMetadata() {
		return BaseForm.baseGetFormMetadata<typeof UserForm.prototype>(this);
	}
}
