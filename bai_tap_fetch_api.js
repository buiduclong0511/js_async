const GET_POST_API_URL = "https://jsonplaceholder.typicode.com/posts";

fetch(GET_POST_API_URL) // url
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        // Thực hiện render sau khi gọi api thành công
        render(json);
    });

function render(posts) {
    // Tạo ra chuỗi html để in ra màn hình
    const html = posts
        .map(
            (post) => `
            <div class="post-item">
                <h3 class="title">${post.title}</h3>
                <p class="body">${post.body}</h3>
            </div>
`
        )
        .join("");

    const postListElement = document.querySelector(".post-list");
    postListElement.innerHTML = html;
}
