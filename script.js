document.addEventListener("DOMContentLoaded", async function () {
    const postContainer = document.getElementById("posts");

    // 你的 GitHub Repository 名稱
    const username = "your-username";  // 🔥 修改為你的 GitHub 用戶名
    const repo = "your-repository";    // 🔥 修改為你的 GitHub 倉庫名稱
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/issues?state=open`;

    try {
        const response = await fetch(apiUrl);
        const issues = await response.json();

        if (issues.length === 0) {
            postContainer.innerHTML = "<p>No posts yet.</p>";
        } else {
            issues.forEach(issue => {
                let post = document.createElement("div");
                post.classList.add("post");
                post.innerHTML = `<h3>${issue.title}</h3><p>${issue.body}</p>`;
                postContainer.appendChild(post);
            });
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        postContainer.innerHTML = "<p>Failed to load posts.</p>";
    }
});
