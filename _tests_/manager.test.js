const Manager = require("../lib/manager");

describe("Manager", () => {
	// Office Number
	describe("getOfficeNumber", () => {
		it("Manager should have an Office number.", () => {
			const officeNumber = "561";
			const manager = new Manager("Bob", 1, "bob@gamil.com", officeNumber);
			const managerOfficeNumber = manager.getOfficeNumber();
			expect(managerOfficeNumber).toBe(officeNumber);
		});
	});

	// getRole overridden to return Manager
	describe("getRole", () => {
		it("Employee role should be replaced with Manager role", () => {
			const officeNumber = "561";
			const man = new Manager("Bob", 1, "bob@gamil.com", officeNumber);
			const manRole = man.getRole();
			expect(manRole).toBe("Manager");
		});
	});
});
