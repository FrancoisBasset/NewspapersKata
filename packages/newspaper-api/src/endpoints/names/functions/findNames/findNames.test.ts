import axios from "axios";

describe('findNames', () => {
	it('should be a valid array', async () => {
		const data: string[] = (await axios('http://localhost:3000/dev/newspapers/names')).data;

		expect(data).not.toBeNull();
		expect(data).toBeInstanceOf(Array<string>);
	});

	it('should find all names', async () => {
		const data: string[] = (await axios('http://localhost:3000/dev/newspapers/names')).data;

		expect(data.length).toBeGreaterThan(0);
		expect(data).toContain('Washington Post');
		expect(data).toContain('Libération');
		expect(data).toContain('The Guardian');
    });
})