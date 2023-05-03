import axios from "axios";
import Newspaper from './Newspaper';

export async function getNewspapers(offersStrings: string[]): Promise<string[]> {
	const newspapersData: Newspaper[] = (await axios(`http://localhost:5000/dev/newspapers`)).data;

	const newspapers: string[] = [];

	offersStrings.forEach(offerString => {
		const newspaper: Newspaper | undefined = newspapersData.find(n => n.id === offerString.substring(0,2));

		if (newspaper) {
			newspapers.push(newspaper.name);
		}
	});

	return [...new Set(newspapers)];
}

export function getTypes(offersStrings: string[]): string[] {
	const types: string[] = offersStrings.map(o => o.substring(3, 6));

	return [...new Set(types)];
}

export function getDurations(offersStrings: string[]): string[] {
	const durations: string[] = offersStrings.map(o => o.substring(7));

	return [...new Set(durations)];
}
