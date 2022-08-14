import { BaseUser } from "../user/BaseUser";
import { BaseForm } from "./BaseForm";
import { FormField, ValidationRegex } from "./Decorators";

export class UserForm extends BaseForm implements BaseUser {
	joinDate?: string;
	updatedDate?: string | undefined;

	@FormField(`text`, { label: `Username` })
	@ValidationRegex(`[a-zA-Z0-9-_]{0-15}`)
	username?: string;

	@FormField(`text`, { label: `First Name` })
	firstName?: string | undefined;

	@FormField(`text`, { label: `Last Name` })
	lastName?: string | undefined;

	@FormField(`text`, { label: `Address Line 1` })
	addressLine1?: string | undefined;

	@FormField(`text`, { label: `Address Line 2` })
	addressLine2?: string | undefined;

	@FormField(`text`, { label: `City` })
	city?: string | undefined;

	@FormField(`text`, { label: `State` })
	state?: string | undefined;

	@FormField(`text`, { label: `Zip` })
	@ValidationRegex(`^[0-9]{5}$|^([0-9]{5}-[0-9]{4})$`)
	zip?: string | undefined;

	@FormField(`text`, { label: `Phone Number` })
	@ValidationRegex(`^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$`)
	phone?: string | undefined;

	public getFormMetadata() {
		return BaseForm.baseGetFormMetadata<typeof UserForm.prototype>(this);
	}
}
