/* eslint-disable @typescript-eslint/no-var-requires */

const chokidar = require('chokidar');
const { promises } = require('fs');
const path = require('path');

const rootPath = path.resolve('.');
const watchPath = rootPath + '/src/components/**/*.json';

const watcher = chokidar.watch(watchPath, {
	ignored: 'node_modules',
});

const jsonCheck = async path => {
	const data = await promises.readFile(path, { encoding: 'utf-8' });
	const isIcomoon = data.toLowerCase().includes('icomoon');
	if (!isIcomoon) throw 'not icomoon json';
  
	const jsonData = JSON.parse(data);
	return jsonData;
};

const generateType = async(filePath, jsonData) => {
	const dirName = path.dirname(filePath);
	const fileName = dirName + '/iconTypes.ts';

	const iconNames = jsonData.icons.map(item => `'${item.properties.name}'`);
	const formatted = iconNames.reduce((accumulator, currentValue) => {
		return `${accumulator} | ${currentValue}`;
	});

	const template = `export type I_Icons = ${formatted}`;

	return promises.writeFile(fileName, template, 'utf-8');
};

const listener = async(filePath, stats) => {
	try {
		const jsonData = await jsonCheck(filePath);
		await generateType(filePath, jsonData);
	} catch (error) {
		console.log(error, ' <> <> ERROR');
		return error;
	}
};

watcher.on('change', listener);