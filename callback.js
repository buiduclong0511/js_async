function downdloadImage(cb) {
    cb("image");
}

function handle(data) {
    console.log(data);
}

downdloadImage(handle); // 'image'
