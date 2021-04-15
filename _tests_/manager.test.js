const Manager = require("../lib/manager");

describe("Manager", () => {
	// add Office Number for manager
	describe("getOfficeNumber", () => {
		it("Manager should have an Office number added.", () => {
			const officeNumber = "561";
			const manager = new Manager("Bob", 1, "bob@gamil.com", officeNumber);
			const managerOfficeNumber = manager.getOfficeNumber();
			expect(managerOfficeNumber).toBe(officeNumber);
		});
	});
	// group for getRole() returns 'manager'
	describe("getRole", () => {
		it("Employee role should be replaced with Manager role", () => {
			const manager = new Manager("Bob", 1, "bob@gamil.com", "561");
			const managerRole = manager.getRole();
			expect(managerRole).toBe("☕ Manager");
		});
	});
});
