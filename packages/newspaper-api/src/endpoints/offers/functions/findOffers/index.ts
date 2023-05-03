import { APIGatewayProxyResult } from 'aws-lambda';
import axios from "axios";
import OffersCatalog from './OffersCatalog';
import { getNewspapers, getTypes, getDurations } from './getters';

export const handler = async (): Promise<APIGatewayProxyResult> => {
	const offersStrings: string[] = (await axios(`http://localhost:5000/dev/offers`)).data;

    const offers: OffersCatalog = {
        newspapers: [],
        type: [],
        duration: []
    };

	offers.newspapers = await getNewspapers(offersStrings);
	offers.type = getTypes(offersStrings);
	offers.duration = getDurations(offersStrings);

    return {
        body: JSON.stringify(({
            ...offers
        })),
        statusCode: 200,
    };
}
