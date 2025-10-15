var CreateHelloWorld = function() {
    return function(...args){
        return "Hello, World!";
    }
}

const HelloWorld = new CreateHelloWorld();

console.log(HelloWorld());