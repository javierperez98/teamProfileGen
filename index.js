const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

inquirer
	.prompt([
		{
			type: "input",
			message: "What is the team manager's name?",
			name: "name",
		},
		{
			type: "number",
			message: "What is their employee ID?",
			name: "id",
		},
		{
			type: "input",
			message: "What is their email address?",
			name: "email",
		},
		{
			type: "number",
			message: "What is their office number?",
			name: "officeNumber",
		},
		{
			type: "list",
			message: "Add Engineer, Intern or create team?",
			name: "continue",
			choices: ["Engineer", "Intern", "Done"],
		},
	])
	.then((answers) => {
		if (answers.continue === "Engineer") {
			inquirer.prompt([
				{
					type: "input",
					message: "What is the Engineer's name?",
					name: "name",
				},
				{
					type: "number",
					message: "What is their employee ID?",
					name: "id",
				},
				{
					type: "input",
					message: "What is their email address?",
					name: "email",
				},
			]);
		} else if (answers.continue === "Intern") {
			inquirer.prompt([
				{
					type: "input",
					message: "What is the Intern's name?",
					name: "name",
				},
				{
					type: "number",
					message: "What is their employee ID?",
					name: "id",
				},
				{
					type: "input",
					message: "What is their email address?",
					name: "email",
				},
			]);
		} else {
			console.log("Done");
			process.exit();
		}
	})
	.then((answers) => {
		// const card = `<div class="col mb-4">
		//     <div class="card bg-light shadow bg-white rounded">
		//         <div class="card-body bg-secondary text-white">
		//         <h4 class="card-title">${answers.name}</h4>
		//         <h4 class="card-title">${role}</h4>
		//     </div>
		//     <ul class="list-group list-group-flush mx-3 my-4 border">
		//         <li class="list-group-item">ID: ${answers.id}</li>
		//         <li class="list-group-item">Email: ${answers.email}</li>
		//         <li class="list-group-item">${answers.extra}</li>
		//     </ul>
		//     </div>
		// </div>`;
		// fs.writeFile(`myTeam.html`, html, (err) =>
		// 	err ? console.error(err) : console.log("Success!")
		// );
	});
