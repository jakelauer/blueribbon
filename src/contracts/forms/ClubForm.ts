import { BaseClub } from '../club/BaseClub';
import { COUNTRIES, STATES } from '../Locations';
import { BaseForm } from './BaseForm';
import { FormField } from './Decorators';

const CLUB_TYPES: Record<string, string> = {
	basic: `General`,
	dog: `Dog`,
	horse: `Horse`
};

export class ClubForm extends BaseForm implements BaseClub
{
	ownerId?: string;

	@FormField(`radio`, {
		label: `Club Type`,
		groupLabel: `Basics`,
		selectVals: CLUB_TYPES
	})
		clubType?: "dog" | "horse" | "basic";

	@FormField(`text`, {
		label: `Club Name`, groupLabel: `Club Information`
	})
		name?: string;

	@FormField(`text`, {
		label: `City`, groupLabel: `Club Information`
	})
		city?: string;

	@FormField(`select`, {
		label: `State`,
		groupLabel: `Club Information`,
		selectVals: STATES
	})
		state?: string;

	@FormField(`select`, {
		label: `Country`,
		groupLabel: `Club Information`,
		selectVals: COUNTRIES
	})
		country?: string;

	@FormField(`longtext`, {
		label: `About`, groupLabel: `Club Details`
	})
		about?: string;

	@FormField(`text`, {
		label: `Homepage URL`, groupLabel: `Club Details`
	})
		homepage?: string;

	public getFormMetadata ()
	{
		return BaseForm.baseGetFormMetadata<typeof ClubForm.prototype>(this);
	}
}
