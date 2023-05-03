import { APIGatewayProxyResult } from 'aws-lambda';
import { getOfferStrings, getTypes } from '../../../../getters';

export const handler = async (): Promise<APIGatewayProxyResult> => {
	const offersStrings: string[] = await getOfferStrings();
	
	const types = getTypes(offersStrings);

    return {
        body: JSON.stringify((
            types
        )),
        statusCode: 200,
    };
}
