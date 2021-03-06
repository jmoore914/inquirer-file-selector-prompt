# Inquirer File Selector Prompt

A plugin for [Inquirer](https://github.com/SBoudrias/Inquirer.js), allowing users to navigate their file directories to select files.

[![npm](https://img.shields.io/npm/v/inquirer-file-selector-prompt.svg)](https://www.npmjs.com/package/inquirer-file-selector-prompt)
[![npm](https://img.shields.io/npm/l/inquirer-file-selector-prompt.svg)](https://github.com/jmoore914/inquirer-file-selector-prompt/blob/master/LICENSE)

![Demo](/demo.gif?raw=true)

# Installation

```
npm install --save inquirer-file-selector-prompt
```

# Usage

Register the prompt under any alias you prefer then use the prompt as you would any other inquirer prompt.

```js
inquirer.registerPrompt('file-selector', require('inquirer-file-selector-prompt'));

inquirer.prompt({
  type: 'file-selector',
  ...
})
```

# Options

Takes `type`, `name`, `message`, [`filter`, `validate`, `default`, `pageSize`, `path`, `extensions`, `selectionType`, `onlyShowMatchingExtensions`] properties.


The extra options that this plugin provides are:

* **path** 
<br> Type: string 
<br> Description: Starting directory for the prompt
<br> Default: `process.cwd()`
* **extensions** 
<br> Type: Array\<string\> 
<br> Description: Array of valid extensions to pick from
<br> Default: `[]` (any extension)
* **selectionType** 
<br> Type: string 
<br> Description: Choose whether to select a file or directory
<br>Valid options: `["file","folder","either"]`
<br>Default: `"file"`
* **onlyShowMatchingExtensions**
<br> Type: boolean
<br> Description: Select whether to hide files that do not match the specified valid extensions
<br> Default: `false`


# Example

```js
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
```

# License

This project is under the MIT license.
