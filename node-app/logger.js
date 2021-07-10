
    console.log(__filename);
    console.log(__dirname);
    function log(message){
        console.log(message);
    }
    
    module.exports.log=log;
// module.exports=log;
// exports.log=log;

const path=require('path')
var pathobj=path.parse(__filename)
console.log(pathobj)