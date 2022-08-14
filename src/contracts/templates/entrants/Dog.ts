import { AnimalEntrant } from "./AnimalEntrant";

export interface DogRegistration {
	country: string;
	organization: string;
	id: string;
}

export interface DogEntry extends AnimalEntrant {
	registration: DogRegistration;
	breeders: string[];
	sireName: string;
	damName: string;
}
