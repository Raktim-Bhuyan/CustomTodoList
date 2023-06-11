
    //console.log(module);
    //module.exports returns an object and object can have attributes and methods
    
    exports.getDate = function (){ //anonymous function
    let today = new Date();  
    let options = {
        weekday:'long',month:'long',day:'numeric'
    };
    return today.toLocaleDateString("en-US",options);
    
}
    exports.getDay = function(){
    let today = new Date();  
    let options = {
        weekday:'long'
    };
    return today.toLocaleDateString("en-US",options);
    
}