import fs from 'fs';
import curationListObject from './modify/curations-0.13.ts';
const curationListJSON = JSON.stringify(curationListObject, undefined, 4);
fs.writeFileSync('./lists/curations-0.13.json', curationListJSON);