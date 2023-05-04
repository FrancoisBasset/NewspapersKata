import { APIGatewayProxyResult } from 'aws-lambda';
import { getDurations, getOfferStrings } from '../../../../getters';

export const handler = async (): Promise<APIGatewayProxyResult> => {
	const offersStrings: string[] = await getOfferStrings();
	
	const durations = getDurations(offersStrings);

    return {
        body: JSON.stringify((
            durations
        )),
        statusCode: 200,
    };
}
