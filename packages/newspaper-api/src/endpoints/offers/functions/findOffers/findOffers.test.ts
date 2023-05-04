import axios from "axios";

describe('findOffers', () => {
	it('should be a valid JSON', async () => {
		const data: string[] = (await axios('http://localhost:3000/dev/newspapers/offers')).data;

		expect(data).toBeInstanceOf(Object);
  		expect(() => JSON.parse(JSON.stringify(data))).not.toThrow();
	});

    it('should find all offers', async () => {
		const data: string[] = (await axios('http://localhost:3000/dev/newspapers/offers')).data;

		expect(data).toHaveProperty('newspapers');
		expect(data).toHaveProperty('type');
		expect(data).toHaveProperty('duration');
    });
})