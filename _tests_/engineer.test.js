const Engineer = require("../lib/engineer");

describe("Engineer", () => {
	// add GitHub to engineer
	describe("getGitHub", () => {
		it("Engineer should have a Github profile added", () => {
			const github = "javierperez98";
			const engineer = new Engineer("Bob", 1, "bob@gamil.com", github);
			const engineerGitHub = engineer.getGitHub();
			expect(engineerGitHub).toBe(github);
		});
	});
	// group for getRole() returns 'engineer'
	describe("getRole", () => {
		it("Employee role should be replaced with Engineer role", () => {
			const engineer = new Engineer("Bob", 1, "bob@gamil.com", "javierperez98");
			const engineerRole = engineer.getRole();
			expect(engineerRole).toBe("👓 Engineer");
		});
	});
});
