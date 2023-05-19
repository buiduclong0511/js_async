const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 1 done");
        }, 1000);
    });
};

const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2 done");
        }, 1000);
    });
};

const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 3 done");
        }, 1000);
    });
};

// promise1()
//     .then((data) => {
//         console.log(data);
//         return promise2();
//     })
//     .then((data) => {
//         console.log(data);
//         return promise3();
//     })
//     .then((data) => {
//         console.log(data);
//     });

const run = async () => {
    const data1 = await promise1();
    console.log(data1);

    const data2 = await promise2();
    console.log(data2);

    const data3 = await promise3();
    console.log(data3);
};

run();
