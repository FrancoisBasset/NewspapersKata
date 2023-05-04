import axios from "axios";

describe('findTypes', () => {
	it('should be a valid array', async () => {
		const data: string[] = (await axios('http://localhost:3000/dev/newspapers/offers/types')).data;

		expect(data).not.toBeNull();
		expect(data).toBeInstanceOf(Array<string>);
	});

	it('should find all types', async () => {
		const data: string[] = (await axios('http://localhost:3000/dev/newspapers/offers/types')).data;

		expect(data.length).toBeGreaterThan(0);
		expect(data).toContain('WEB');
		expect(data).toContain('PAP');
		expect(data).toContain('BOT');
    });
})