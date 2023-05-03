import { APIGatewayProxyResult } from 'aws-lambda';
import axios from "axios";
import OffersCatalog from './OffersCatalog';
import Newspaper from './Newspaper';

export const handler = async (): Promise<APIGatewayProxyResult> => {
    const newspapers: Newspaper[] = (await axios(`http://localhost:5000/dev/newspapers`)).data;
	const offersStrings: string[] = (await axios(`http://localhost:5000/dev/offers`)).data;

    const offers: OffersCatalog = {
        newspapers: [],
        type: [],
        duration: []
    };

	offersStrings.forEach(offerString => {
        const newspaper: Newspaper | undefined = newspapers.find(n => n.id === offerString.substring(0,2));

		if (newspaper) {
        	offers.newspapers.push(newspaper.name);
        	offers.type.push(offerString.substring(3,6));
			offers.duration.push(offerString.substring(7));
		}
    });

	offers.newspapers = [...new Set(offers.newspapers)];
	offers.type = [...new Set(offers.type)];
	offers.duration = [...new Set(offers.duration)];

    return {
        body: JSON.stringify(({
            ...offers
        })),
        statusCode: 200,
    };
}
