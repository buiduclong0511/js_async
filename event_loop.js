function log() {
    console.log("message");
}

setTimeout(function timer() {
    console.log("timeout");
}, 0);

function run() {
    log();

    console.log("run");
}

run();
alert();
// message
// run
// timeout
