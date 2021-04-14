const Intern = require("../lib/intern");

describe("Intern", () => {
	// add School and getSchool()
	describe("getSchool", () => {
		it("Intern should have school added", () => {
			const school = "UCSD";
			const intern = new Intern("Bob", 1, "bob@gamil.com", school);
			const internSchool = intern.getSchool();
			expect(internSchool).toBe(school);
		});
	});
	// group for getRole() returns 'Intern'
	describe("getRole", () => {
		it("Employee role should be replaced with Intern role", () => {
			const intern = new Intern("Bob", 1, "bob@gamil.com", "UCSD");
			const internRole = intern.getRole();
			expect(internRole).toBe("Intern");
		});
	});
});
