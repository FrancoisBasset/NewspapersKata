import { APIGatewayProxyResult } from 'aws-lambda';
import { getOfferStrings, getNewspapers } from '../../../../getters';

export const handler = async (): Promise<APIGatewayProxyResult> => {
	const offersStrings: string[] = await getOfferStrings();

	const newspapers = await getNewspapers(offersStrings);

    return {
        body: JSON.stringify((
            newspapers
        )),
        statusCode: 200,
    };
}
