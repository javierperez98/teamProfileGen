const Employee = require("../lib/Employee");

describe("Employee", () => {
	// initialization
	describe("initialization", () => {
		it("Employee should have a name assigned.", () => {
			const name = "Bob";
			const id = 1;
			const email = "bob@gmail.com";
			const role = "Employee";
			const emp = new Employee(name, id, email, role);
			expect(emp.name).toBe(name);
			expect(emp.id).toBe(id);
			expect(emp.email).toBe(email);
			expect(emp.role).toBe(role);
		});
	});
	// group for getName()
	describe("getName()", () => {
		it("Employee name should be returned.", () => {
			const name = "Bob";
			const emp = new Employee(name, 1, "bob@gmail.com", "Employee");
			const empName = emp.getName();
			expect(empName).toBe(name);
		});
	});
	// group for getId()
	describe("getId()", () => {
		it("Employee id should be returned.", () => {
			const id = 1;
			const emp = new Employee("Bob", id, "bob@gmail.com", "Employee");
			const empId = emp.getId();
			expect(empId).toBe(id);
		});
	});
	// group for getEmail()
	describe("getEmail()", () => {
		it("Employee email should be returned.", () => {
			const email = "bob@gmail.com";
			const emp = new Employee("Bob", 1, email, "Employee");
			const empEmail = emp.getEmail();
			expect(empEmail).toBe(email);
		});
	});
	// group for getRole()—returns 'Employee'
	describe("getRole()", () => {
		it("Employee role should be returned.", () => {
			const role = "Employee";
			const emp = new Employee("Bob", 1, "bob@gmail.com", role);
			const empRole = emp.getRole();
			expect(empRole).toBe(role);
		});
	});
});
