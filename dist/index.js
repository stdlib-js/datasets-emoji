"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var t=o(function(p,a){
var s=require("path").resolve,n=require('@stdlib/fs-read-json/dist').sync,u=s(__dirname,"..","data","data.json"),v={encoding:"utf8"};function c(){var r=n(u,v);if(r instanceof Error)throw r;return r}a.exports=c
});var d=t();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
