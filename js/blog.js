function addPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if(!title || !content) {
        alert("Fill in all fields");
        return;
    }

    const post = {
        title,
        content,
        date: new Date().toISOString().slice(0,10)
    };

    document.getElementById("output").textContent =
        JSON.stringify(post, null, 2) + "\n\nCopy this to posts.json";
}
