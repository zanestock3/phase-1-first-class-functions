function receivesAFunction(activity) {
   activity("soccer");
}

function returnsANamedFunction() {
    console.log(receivesAFunction.name);
    return receivesAFunction
}
function returnsAnAnonymousFunction(xyz) {
    return function () {

    }
}
