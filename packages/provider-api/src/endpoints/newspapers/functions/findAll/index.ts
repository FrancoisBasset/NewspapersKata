import { APIGatewayProxyResult } from 'aws-lambda';

// Do not modify this file
export const handler = async (): Promise<APIGatewayProxyResult> => {
    return {
        body: JSON.stringify([
            {id: "TG", name: 'The Guardian'},
            {id: "WP", name: 'Washington Post'},
            {id: "LB", name: 'Libération'},
        ]),
        statusCode: 200,
    };
}
