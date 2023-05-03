import { APIGatewayProxyResult } from 'aws-lambda';
import OffersCatalog from '../../../../OffersCatalog';
import { getOfferStrings, getNewspapers, getTypes, getDurations } from '../../../../getters';

export const handler = async (): Promise<APIGatewayProxyResult> => {
	const offersStrings: string[] = await getOfferStrings();

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
