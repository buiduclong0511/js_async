setTimeout(function timer() {
    console.log("timeout");
}, 0);

const promise = new Promise(function a(resolve) {
    resolve();
});

promise.then((res) => {
    console.log("promise resolved");
});

// promise resolved
// timeout

// timeout
// promise resolved
