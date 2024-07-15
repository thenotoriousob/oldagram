import { posts } from "./data.js";

const postsEl = document.getElementById("posts");

let likesIcon = [];
let likesImg = [];
let postsHtml = "";

posts.forEach(function(post) {

    postsHtml += `<section>
                      <div class="post-user">
                          <img class="avatar post-user-avatar" src="${post.avatar}" alt="${post.avataralt}">
                          <div class="post-user-info">
                            <p class="bold-text">${post.name}</p>
                            <p>${post.location}</p>
                          </div>
                      </div> 
                      <div class="post">
                          <img class="post-img" id="post-img-${post.username}" src="${post.post}" alt="${post.postalt}">
                          <div class="app-icons">
                              <div class="app-icon-bg" id="like-icon-${post.username}">
                                <img class="app-icon" src="images/icon-heart.png" alt="Heart icon">
                              </div>
                              <div class="app-icon-bg">
                                  <img class="app-icon" src="images/icon-comment.png" alt="Comment icon">
                              </div>
                              <div class="app-icon-bg">
                                  <img class="app-icon" src="images/icon-dm.png" alt="DM icon">
                              </div>
                          </div>
                          <p class="post-likes bold-text" id="likes-${post.username}">${post.likes} like${post.likes > 1 ? 's' : ''}</p>
                          <p class="post-text"><span class="bold-text">${post.username}</span> ${post.comment}</p>
                      </div>
                  </section>`;

})

postsEl.innerHTML = postsHtml;

/* Once the posts have been rendered we need to add the event listeners to each */
posts.forEach(function(post, index) {

    likesIcon[index] = document.getElementById(`like-icon-${post.username}`);
    likesImg[index] = document.getElementById(`post-img-${post.username}`);

    likesIcon[index].addEventListener("click", function() {
        incrementLikes(post);
    });

    likesImg[index].addEventListener("click", function() {
        incrementLikes(post);

        /* Let the user know that clicking the image has clicked the like */
        likesIcon[index].classList.add("liked");

        setTimeout(function() {
            likesIcon[index].classList.remove("liked")
        },500);
    });

});

function incrementLikes(post) {
    post.likes++;

    document.getElementById(`likes-${post.username}`).textContent = `${post.likes} like${post.likes > 1 ? 's' : ''}`;
}
