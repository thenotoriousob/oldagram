const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        avataralt: "Avatar of user van gogh",
        post: "images/post-vangogh.jpg",
        postalt: "Self portrait of van gogh",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        avataralt: "",
        post: "images/post-courbet.jpg",
        postalt: "",
        comment: "i'm feelin a bit stressed tbh",
        likes: 1
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        avataralt: "",
        post: "images/post-ducreux.jpg",
        postalt: "",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postsEl = document.getElementById("posts");

let likesBtn;
let likesEl;
let postsHtml = "";

for(let i = 0; i < posts.length; i++) {
    postsHtml += `<section>
                      <div class="post-user">
                          <img class="avatar post-user-avatar" src="${posts[i].avatar}" alt="${posts[i].avataralt}">
                          <div class="post-user-info">
                            <p class="post-user-name">${posts[i].name}</p>
                            <p>${posts[i].location}</p>
                          </div>
                      </div> 
                      <div class="post">
                          <img class="post-img" src="${posts[i].post}" alt="${posts[i].postalt}">
                          <div class="app-icons">
                              <img id="like-btn-${posts[i].username}" class="app-icon" src="images/icon-heart.png" alt="Heart icon">
                              <img class="app-icon" src="images/icon-comment.png" alt="Comment icon">
                              <img class="app-icon" src="images/icon-dm.png" alt="DM icon">
                          </div>
                          <p class="post-likes bold-text" id="likes-${posts[i].username}">${posts[i].likes} like${posts[i].likes > 1 ? 's' : ''}</p>
                          <p class="post-text"><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
                      </div>
                      ${i + 1 != posts.length ? '<div class="spacer"></div>' : ''}
                  </section>`;
}

postsEl.innerHTML = postsHtml;

for(let i = 0; i < posts.length; i++) {

  likesBtn = document.getElementById(`like-btn-${posts[i].username}`);

  likesBtn.addEventListener("click", function() {
    
    posts[i].likes++;

    likesEl = document.getElementById(`likes-${posts[i].username}`);

    likesEl.textContent = `${posts[i].likes} like${posts[i].likes > 1 ? 's' : ''}`;

  });
}

