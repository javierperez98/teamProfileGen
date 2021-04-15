var employeeCards = ``;
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

class MakeTeam {
	addManager() {
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
			])
			.then((ans) => {
				const manager = new Manager(
					ans.name,
					ans.id,
					ans.email,
					ans.officeNumber
				);
				employeeCards += `<div class="col mb-4">
				<div class="card bg-light shadow bg-white rounded">
					<div class="card-body bg-secondary text-white">
						<h4 class="card-title">${manager.name}</h4>
						<h4 class="card-title">${new Manager().getRole()}</h4>
					</div>
					<ul class="list-group list-group-flush mx-3 my-4 border">
						<li class="list-group-item">ID: ${manager.id}</li>
						<li class="list-group-item">Email: ${manager.email}</li>
						<li class="list-group-item">Office Number: ${manager.officeNumber}</li>
					</ul>
				</div>
				</div>`;
				this.addMore();
			});
	}
	addMore() {
		inquirer
			.prompt([
				{
					type: "list",
					message: "Add Engineer, Intern or create team?",
					name: "continue",
					choices: ["Engineer", "Intern", "Done"],
				},
			])
			.then((answers) => {
				if (answers.continue === "Engineer") {
					inquirer
						.prompt([
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
							{
								type: "input",
								message: "What is their GitHub username?",
								name: "github",
							},
						])
						.then((ans) => {
							const engineer = new Engineer(
								ans.name,
								ans.id,
								ans.email,
								ans.github
							);
							employeeCards += `<div class="col mb-4">
						<div class="card bg-light shadow bg-white rounded">
							<div class="card-body bg-secondary text-white">
								<h4 class="card-title">${engineer.name}</h4>
								<h4 class="card-title">${new Engineer().getRole()}</h4>
							</div>
							<ul class="list-group list-group-flush mx-3 my-4 border">
								<li class="list-group-item">ID: ${engineer.id}</li>
								<li class="list-group-item">Email: ${engineer.email}</li>
								<li class="list-group-item">Office Number: ${engineer.github}</li>
							</ul>
						</div>
						</div>`;
							this.addMore();
						});
				} else if (answers.continue === "Intern") {
					inquirer
						.prompt([
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
							{
								type: "input",
								message: "What school do they attend?",
								name: "school",
							},
						])
						.then((ans) => {
							const intern = new Intern(
								ans.name,
								ans.id,
								ans.email,
								ans.school
							);
							employeeCards += `<div class="col mb-4">
					<div class="card bg-light shadow bg-white rounded">
						<div class="card-body bg-secondary text-white">
							<h4 class="card-title">${intern.name}</h4>
							<h4 class="card-title">${new Engineer().getRole()}</h4>
						</div>
						<ul class="list-group list-group-flush mx-3 my-4 border">
							<li class="list-group-item">ID: ${intern.id}</li>
							<li class="list-group-item">Email: ${intern.email}</li>
							<li class="list-group-item">Office Number: ${intern.school}</li>
						</ul>
					</div>
					</div>`;
							this.addMore();
						});
				} else {
					const content = `<!DOCTYPE html>
					<html lang="en">
						<head>
							<meta charset="UTF-8" />
							<meta http-equiv="X-UA-Compatible" content="IE=edge" />
							<meta name="viewport" content="width=device-width, initial-scale=1.0" />
							<link
								rel="stylesheet"
								href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
								integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
								crossorigin="anonymous"
							/>
							<title>My Team</title>
						</head>
						<body>
							<header>
								<nav class="navbar navbar-expand-lg navbar-dark bg-primary p-4">
									<h1 class="col-12 text-center text-white">Team Profile Generator</h1>
								</nav>
							</header>
							<main class="p-5 d-flex justify-content-center col-12">
								<section class="col-9 row row-cols-1 row-cols-md-3 d-flex justify-content-center">
								${employeeCards}
								</section>
							</main>
						</body>
					</html>`;
					fs.writeFile("teams/team.html", content, (err) => {
						if (err) {
							console.error(err);
							return;
						}
						console.log("Done");
						process.exit();
					});
				}
			});
	}
}
new MakeTeam().addManager();
