'use strict';
import installCE from 'document-register-element';
import setTheme from '../utils/loadTheme';

installCE(window);

const importTheme = (theme) => import(/* webpackChunkName: "[request]" */`./theme-${theme}.scss`);
window.loadTheme = setTheme.bind(null, importTheme);

import './components/a-face/a-face';
import './components/b-face/b-face';

loadTheme('dark');