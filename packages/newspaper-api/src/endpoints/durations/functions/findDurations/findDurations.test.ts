import axios from "axios";

describe('findDurations', () => {
	it('should be a valid array', async () => {
		const data: string[] = (await axios('http://localhost:3000/dev/newspapers/offers/durations')).data;

		expect(data).not.toBeNull();
		expect(data).toBeInstanceOf(Array<string>);
	});

	it('should find all durations', async () => {
		const data: string[] = (await axios('http://localhost:3000/dev/newspapers/offers/durations')).data;

		expect(data.length).toBeGreaterThan(0);
		expect(data).toContain('2M');
		expect(data).toContain('2W');
		expect(data).toContain('1Y');
		expect(data).toContain('6M');
    });
})