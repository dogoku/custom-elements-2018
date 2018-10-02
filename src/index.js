'use strict';
import installCE from 'document-register-element';
installCE(window);
import './components/a-face/a-face';
import './components/b-face/b-face';

for (const it of [1,2,3]) {
  console.log(it);
}

(async () => new Promise(resolve => setTimeout(resolve, 1000)));