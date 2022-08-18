export const ClubTypes = [`dog`, `horse`, `basic`] as const;

export type ClubType = typeof ClubTypes[number];

export const ClubTypeLabels: Record<ClubType, string> = {
	basic: `Basic`,
	dog: `Dog`,
	horse: `Horse`
};
