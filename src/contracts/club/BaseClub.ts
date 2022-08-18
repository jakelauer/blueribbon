import { ClubType } from "./ClubTypes";

export interface BaseClub {
	clubType?: ClubType;
	name?: string;
	about?: string;
	city?: string;
	state?: string;
	country?: string;
	ownerId?: string;
	homepage?: string;
	breed?: string[];
}
