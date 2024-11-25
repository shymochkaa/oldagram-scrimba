const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const mainPage = document.querySelector("#main-page")

function render(arr) {
    let content = ''
    for (let i = 0; i < arr.length; i++) {
        content += `
        <section class="post-content">
            <div class="container">
                <div class="user-info">
                    <img class="user-avatar" src="${arr[i].avatar}" alt="${arr[i].name}'s avatar.">
                    <div class="user-info-text">
                        <h2 class="bold-text">${arr[i].name}</h2>
                        <h3 class="small-text">${arr[i].location}</h3>
                    </div>
                </div>
                <img class="post-img" data-index="${i}" src="${arr[i].post}" alt="${arr[i].name}'s post.">
                <div class="post-info">
                    <div class="icons">
                        <button class="icon-btn">
                            <img class="icon heart-icon" data-index="${i}" src="images/icon-heart.png" alt="like icon">
                        </button>
                        <button class="icon-btn">
                            <img class="icon" src="images/icon-comment.png" alt="comment icon">
                        </button>
                        <button class="icon-btn">
                            <img class="icon" src="images/icon-dm.png" alt="send the post icon">
                        </button>
                    </div>
                    <p class="post-text likes-num bold-text"><span class="likes-count">${arr[i].likes}</span> likes</p>
                    <p class="post-text"><span class="bold-text">${arr[i].username}</span> ${arr[i].comment}</p>
                </div>
            </div>
        </section>`
    }
    mainPage.innerHTML = content
    increaseLikes()
}

function increaseLikes() {
    const postImgs = document.querySelectorAll(".post-img")
    postImgs.forEach((img) => {
        img.addEventListener("dblclick", function () {
            const index = Number(this.getAttribute("data-index"))
            posts[index].likes++
            document.querySelectorAll(".likes-count")[index].textContent = posts[index].likes
        })
    })

    const likeIcons = document.querySelectorAll(".heart-icon")
    likeIcons.forEach((likeIcon) => {
        likeIcon.addEventListener("click", function(){
            const index = Number(this.getAttribute("data-index"))
            posts[index].likes++
            document.querySelectorAll(".likes-count")[index].textContent = posts[index].likes
        })
    })

}



render(posts)
