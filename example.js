const inquirer = require('inquirer');
const fileSelector = require('./index.js');

inquirer.registerPrompt('file-tree-selection', fileSelector);

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