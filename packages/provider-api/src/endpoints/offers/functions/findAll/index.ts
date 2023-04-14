import { APIGatewayProxyResult } from 'aws-lambda';

// Do not modify this file
export const handler = async (): Promise<APIGatewayProxyResult> => {
    return {
        body: JSON.stringify([
            'WP_PAP-2M',
            'LB_WEB-2W',
            'LB_PAP-1Y',
            'TG_WEB-6M',
            'TG_BOT-2W',
        ]),
        statusCode: 200,
    };
}
