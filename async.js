function download() {
    return new Promise(function (resolve, reject) {
        console.log("promise run");

        setTimeout(function () {
            reject({
                error: true,
            });
            resolve({
                data: true,
            });
        }, 1000);
    });
}

// download().then((response) => console.log(response));

// Async sẽ giúp chúng ta viết code bất đồng bộ 1 cách đồng bộ
async function run() {
    try {
        const response = await download();
        console.log(response);
    } catch (err) {
        // Bắt lỗi khi promise reject
        console.log(err);
    } finally {
        // Logic cuối cùng được thực hiện
        console.log("done");
    }
}

run();
