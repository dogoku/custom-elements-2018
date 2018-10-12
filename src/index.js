'use strict';
import '@babel/polyfill';
import installCE from 'document-register-element';
import setTheme from '../utils/loadTheme';

installCE(window);

const importTheme = (theme) => import(/* webpackChunkName: "[request]" */`./theme-${theme}.scss`);
window.loadTheme = setTheme.bind(null, importTheme);

import './components/a-face/a-face';
import './components/b-face/b-face';

loadTheme('dark');

console.log('for-of test');
for (const it of [1,2,3]) {
  console.log(it);
}

console.log('async-await test');
const sleep = (t) => new Promise(resolve => setTimeout(resolve, t));
(async () => {
  var d1 = Date.now();
  await sleep(1000);
  console.log(Date.now() - d1);
})();