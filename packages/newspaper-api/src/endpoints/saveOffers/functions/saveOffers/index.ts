import AWS from 'aws-sdk';
import { getOfferStrings } from '../../../../getters';

export const handler = async () => {
	const offersStrings: string[] = await getOfferStrings();

	const S3 = new AWS.S3({
		s3ForcePathStyle: true,
		accessKeyId: "S3RVER",
		secretAccessKey: "S3RVER",
		endpoint: new AWS.Endpoint("http://localhost:4569")
	});

	let csv = 'newspaper_id,offer_type,offer_duration\n';

	csv += offersStrings.reduce((body, line) => {
		body +=	line.split(/[-_]/).join(',') + '\n';

		return body;
	}, '');
	
	S3.putObject({
		Bucket: "local",
		Key: "export.csv",
		Body: csv
	}, () => {});
}
