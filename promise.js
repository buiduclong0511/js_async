const promise = new Promise(function (resolve, reject) {
    // Xử lý 1 cái gì đó
    // Function này sẽ được gọi ngay lập tức
    console.log("Download image");

    setTimeout(() => {
        // reject("Network error");
        resolve("image");
    }, 3000);
});

promise
    .then(function (value) {
        console.log(value);

        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                reject({
                    error: "Network error",
                });
            }, 1000);
        });
    })
    .then(function (value) {
        console.log(value);
    })
    .catch(function (reason) {
        console.log(reason);

        return new Promise(function (resolve, reject) {
            reject({
                error: true,
            });
        });
    })
    .catch(function (error) {
        console.log("last catch: ", error);
    })
    .finally(function () {
        // Logic cuối cùng được thực hiện
        console.log("done");
    });

console.log("hello");
