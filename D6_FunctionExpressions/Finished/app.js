greet();

function greet() {
    console.log('hi - 1');
}

var anonymousGreet = function() {
    console.log('hi - 2');
}

anonymousGreet();

function log(a) {
    a();
}

log(function() {
    console.log('hi - 3');
});