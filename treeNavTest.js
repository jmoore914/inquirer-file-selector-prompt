const inquirer = require('inquirer');
const inquirerFileTreeSelection = require('./treeNav');

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);

inquirer
	.prompt([
		{
			type: 'file-tree-selection',
			name: 'file',
			message: 'choose a file',
			extensions: ['js']
		}
	])
	.then(answers => {
		console.log(JSON.stringify(answers));
	});