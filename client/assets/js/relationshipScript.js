const submitBtnRelationships = document.getElementById('submit-button-relationships');

function getTime() {
    const now = new Date();
    const options1 = {
        hour: 'numeric',
        hour12: false,
        minute: 'numeric',
        weekday: 'long',
        day: 'numeric',
        month: 'long', 
        year: 'numeric',
    };

    return new Intl.DateTimeFormat('en-GB', options1).format(now);
}

function refreshThePage() {
    window.location.reload();
}


function fetchPosts() {
    fetch('http://localhost:5000/api/posts/relationships')
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(result => {
        result.posts.forEach(item => {
                    let timeBox = item.time;
                    let postIdBox = item.postID;
                    let categoryBox = item.category;
                    let storyBox = item.story;
                    let commentsBox = item.comments;
                    let reactionsBox = item.reactions;
                    let gifsBox = item.gifs;
                    if (commentsBox.length === 0) {
                        if (gifsBox.includes('relationship') === false) {
                            let newDiv = document.createElement('div');
                            let overallPost = `<section class="post">
                            <div class="date">
                                <div class="avatar">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <p class="date-text">${timeBox}</p>
                            </div>
                            <div class="post-content">
                                <p>${storyBox}</p>
                            </div>
                            <hr class="divider" />
                            <div class="emoji-btn-box">
                                <button class="button add-emoji"><i class="fa-regular fa-face-grin"></i></button>
                                <img class="gif-img-downsize" src="${gifsBox}">
                            </div>
                            <div class="add-comment">
                                <div class="form-box">
                                    <div class="avatar">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
                                    <form class="new-post-form">
                                        <textarea
                                            name="new-post"
                                            id="new-post-relationships-${postIdBox}"
                                            cols="30"
                                            rows="2"
                                            placeholder="Add a comment..."
                                            required
                                        ></textarea>
                                        <div class="buttons">
                                            <button id="submit-btn-${postIdBox}" class="button submit" type="submit">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="comments">
                                <div id="comment-container-relationships-${postIdBox}" class="comment-container">
                                    
                                </div>
                            </div>
                        </section>`
                        newDiv.innerHTML = overallPost;
                        newDiv.style.margin = '2rem 0 2rem 0';
                        document.getElementById('posts-container-relationships').insertAdjacentElement('afterbegin', newDiv);
                        
                        document.getElementById(`submit-btn-${postIdBox}`).addEventListener('click', (e) => {
                            e.preventDefault();
                            if (document.getElementById(`new-post-relationships-${postIdBox}`).value !== '') {
                                console.log(document.getElementById(`new-post-relationships-${postIdBox}`).value);
                                let url = 'http://localhost:5000/api/posts/relationships/';
                                url += postIdBox;
                                url += '/comments'
                                let commentValue = document.getElementById(`new-post-relationships-${postIdBox}`).value;
                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        comment: commentValue, 
                                        postID: postIdBox,
                                    })

                                }).then(
                                    refreshThePage()
                                )
                            } else {
                                alert('Please input something to post');
                            }
                            
                        })

                        } else {
                            let newDiv = document.createElement('div');
                            let overallPost = `<section class="post">
                            <div class="date">
                                <div class="avatar">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <p class="date-text">${timeBox}</p>
                            </div>
                            <div class="post-content">
                                <p>${storyBox}</p>
                            </div>
                            <hr class="divider" />
                            <div class="emoji-btn-box">
                                <button class="button add-emoji"><i class="fa-regular fa-face-grin"></i></button>
                            </div>
                            <div class="add-comment">
                                <div class="form-box">
                                    <div class="avatar">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
                                    <form class="new-post-form">
                                        <textarea
                                            name="new-post"
                                            id="new-post-relationships-${postIdBox}"
                                            cols="30"
                                            rows="2"
                                            placeholder="Add a comment..."
                                            required
                                        ></textarea>
                                        <div class="buttons">
                                            <button id="submit-btn-${postIdBox}" class="button submit" type="submit">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="comments">
                                <div id="comment-container-relationships-${postIdBox}" class="comment-container">
                                    
                                </div>
                            </div>
                        </section>`
                        newDiv.innerHTML = overallPost;
                        newDiv.style.margin = '2rem 0 2rem 0';
                        document.getElementById('posts-container-relationships').insertAdjacentElement('afterbegin', newDiv);
                        
                        document.getElementById(`submit-btn-${postIdBox}`).addEventListener('click', (e) => {
                            e.preventDefault();
                            if (document.getElementById(`new-post-relationships-${postIdBox}`).value !== '') {
                                console.log(document.getElementById(`new-post-relationships-${postIdBox}`).value);
                                let url = 'http://localhost:5000/api/posts/relationships/';
                                url += postIdBox;
                                url += '/comments'
                                let commentValue = document.getElementById(`new-post-relationships-${postIdBox}`).value;
                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        comment: commentValue, 
                                        postID: postIdBox,
                                    })

                                }).then(
                                    refreshThePage()         
                                )
                            } else {
                                alert('Please input something to post');
                            }
                            
                        })

                        }
                    } else {
                        if (gifsBox.includes('relationship') === false) {
                            let newDiv = document.createElement('div');
                            let overallPost = `<section class="post">
                            <div class="date">
                                <div class="avatar">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <p class="date-text">${timeBox}</p>
                            </div>
                            <div class="post-content">
                                <p>${storyBox}</p>
                            </div>
                            <hr class="divider" />
                            <div class="emoji-btn-box">
                                <button class="button add-emoji"><i class="fa-regular fa-face-grin"></i></button>
                                <img class="gif-img-downsize" src="${gifsBox}">
                            </div>
                            <div class="add-comment">
                                <div class="form-box">
                                    <div class="avatar">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
                                    <form class="new-post-form">
                                        <textarea
                                            name="new-post"
                                            id="new-post-relationships-${postIdBox}"
                                            cols="30"
                                            rows="2"
                                            placeholder="Add a comment..."
                                            required
                                        ></textarea>
                                        <div class="buttons">
                                            <button id="submit-btn-${postIdBox}" class="button submit" type="submit">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="comments">
                                <div id="comment-container-relationships-${postIdBox}" class="comment-container">
                                    
                                </div>
                            </div>
                        </section>`
                        newDiv.innerHTML = overallPost;
                        newDiv.style.margin = '2rem 0 2rem 0';
                        document.getElementById('posts-container-relationships').insertAdjacentElement('afterbegin', newDiv);
                        commentsBox.forEach(each => {
                            let newCommentDiv = document.createElement('div');
                            newCommentDiv.innerHTML = `<div class="avatar">
                                                    <i class="fa-solid fa-user"></i>
                                                </div>
                                                <p class="comment-text">${each}</p>`
                            newCommentDiv.style.display = 'flex';
                            newCommentDiv.style.alignItems = 'center';
                            document.getElementById(`comment-container-relationships-${postIdBox}`).style.display = 'flex';
                            document.getElementById(`comment-container-relationships-${postIdBox}`).insertAdjacentElement('beforeend', newCommentDiv)
                            // document.querySelectorAll('.comment-text').style.margin = "0 0 0 1rem";
                            
                        })
                        document.getElementById(`comment-container-relationships-${postIdBox}`).style.display = 'flex';
                        document.getElementById(`comment-container-relationships-${postIdBox}`).style.flexDirection = 'column';
                        document.getElementById(`comment-container-relationships-${postIdBox}`).style.alignItems = 'flex-start';

                        document.getElementById(`submit-btn-${postIdBox}`).addEventListener('click', (e) => {
                            e.preventDefault();
                            if (document.getElementById(`new-post-relationships-${postIdBox}`).value !== '') {
                                console.log(document.getElementById(`new-post-relationships-${postIdBox}`).value);
                                let url = 'http://localhost:5000/api/posts/relationships/';
                                url += postIdBox;
                                url += '/comments'
                                let commentValue = document.getElementById(`new-post-relationships-${postIdBox}`).value;
                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        comment: commentValue, 
                                        postID: postIdBox,
                                    })

                                }).then(
                                    refreshThePage()
                                )
                            } else {
                                alert('Please input something to post');
                            }
                            
                        })

                        } else {
                            let newDiv = document.createElement('div');
                            let overallPost = `<section class="post">
                            <div class="date">
                                <div class="avatar">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <p class="date-text">${timeBox}</p>
                            </div>
                            <div class="post-content">
                                <p>${storyBox}</p>
                            </div>
                            <hr class="divider" />
                            <div class="emoji-btn-box">
                                <button class="button add-emoji"><i class="fa-regular fa-face-grin"></i></button>
                            </div>
                            <div class="add-comment">
                                <div class="form-box">
                                    <div class="avatar">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
                                    <form class="new-post-form">
                                        <textarea
                                            name="new-post"
                                            id="new-post-relationships-${postIdBox}"
                                            cols="30"
                                            rows="2"
                                            placeholder="Add a comment..."
                                            required
                                        ></textarea>
                                        <div class="buttons">
                                            <button id="submit-btn-${postIdBox}" class="button submit" type="submit">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="comments">
                                <div id="comment-container-relationships-${postIdBox}" class="comment-container">
                                    
                                </div>
                            </div>
                        </section>`
                        newDiv.innerHTML = overallPost;
                        newDiv.style.margin = '2rem 0 2rem 0';
                        document.getElementById('posts-container-relationships').insertAdjacentElement('afterbegin', newDiv);
                        commentsBox.forEach(each => {
                            let newCommentDiv = document.createElement('div');
                            newCommentDiv.innerHTML = `<div class="avatar">
                                                    <i class="fa-solid fa-user"></i>
                                                </div>
                                                <p class="comment-text">${each}</p>`
                            newCommentDiv.style.display = 'flex';
                            newCommentDiv.style.alignItems = 'center';
                            document.getElementById(`comment-container-relationships-${postIdBox}`).style.display = 'flex';
                            document.getElementById(`comment-container-relationships-${postIdBox}`).insertAdjacentElement('beforeend', newCommentDiv)
                            // document.querySelectorAll('.comment-text').style.margin = "0 0 0 1rem";
                            
                        })
                        document.getElementById(`comment-container-relationships-${postIdBox}`).style.display = 'flex';
                        document.getElementById(`comment-container-relationships-${postIdBox}`).style.flexDirection = 'column';
                        document.getElementById(`comment-container-relationships-${postIdBox}`).style.alignItems = 'flex-start';

                        document.getElementById(`submit-btn-${postIdBox}`).addEventListener('click', (e) => {
                            e.preventDefault();
                            if (document.getElementById(`new-post-relationships-${postIdBox}`).value !== '') {
                                console.log(document.getElementById(`new-post-relationships-${postIdBox}`).value);
                                let url = 'http://localhost:5000/api/posts/relationships/';
                                url += postIdBox;
                                url += '/comments'
                                let commentValue = document.getElementById(`new-post-relationships-${postIdBox}`).value;
                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        comment: commentValue, 
                                        postID: postIdBox,
                                    })

                                }).then(
                                    refreshThePage()
                                )

                                
                                
                            } else {
                                alert('Please input something to post');
                            }
                            
                        })


                        }
                            }
                            
                        })
                
            })
        
             
}
    



fetchPosts();


submitBtnRelationships.addEventListener('click', (e) => {
    e.preventDefault();  
    const storyData = document.getElementById('new-post-relationships').value;
    console.log(storyData);
    let gifUrl = document.getElementById('gif-img').src;
    let postIDnumber = 0;
    fetch('http://localhost:5000/api/posts/relationships')
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(array => array.posts)
    .then(array => {
        return array.length + 1;
    }).then(
        number => {
            let newObject = {
                time: getTime(),
                postID: number, 
                category: 'relationships', 
                story: storyData, 
                comments: [], 
                reactions: {fire: 0,
                            thumbs: 0,
                             smiley: 0},
                gifs: gifUrl,
            }
            return newObject;
        }
    ).then(
        newObject => {
            fetch('http://localhost:5000/api/posts/relationships', {
        method: 'POST',
        body: JSON.stringify(newObject), 
        headers: {
            'Content-Type': 'application/json'
        }
        
        })
     }).then(
        () => {
            refreshThePage();
        }
        
     )
    


})


const apiKey = "AkieEAtmUH3opEz3lIrtcV3ELMZ3Kmwk";

function getGifs() {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
    fetch(url)
        .then((res) => res.json())
        .then((collection) => {
            const gifContainer = document.querySelector("#gif-container");
            let allGifs = collection.data;

            allGifs.forEach((el) => {
                let imgSrc = el.images.downsized.url;
                let title = el.title;

                let html = `
                <div class="gif">
                    <a id="clcik-gif" href="#">
                        <img class="gif-img" src="${imgSrc}" alt="${title}" />
                    </a>
                </div>
            `;
                gifContainer.insertAdjacentHTML("beforeend", html);
            });

            gifContainer.addEventListener("click", insertGif);
        });
}

document.querySelector(".add-gif").addEventListener("click", getGifs);

function insertGif(e) {
    e.preventDefault();
    let el = e.target;

    const gifImg = document.querySelector("#gif-img");
    gifImg.src = el.src;
    const newPost = document.querySelector("#gif-outer-box");
    newPost.classList.add("active-box");
}

function removeGif(e) {
    e.preventDefault();

    const gifImg = document.querySelector("#gif-img");
    gifImg.src = "";
    const newPost = document.querySelector("#gif-outer-box");
    newPost.classList.remove("active-box");
}

document.querySelector("#remove-gif").addEventListener("click", removeGif);

const textarea = document.querySelector("#new-post-relationships");
const letterCount = document.querySelector("#remaining-letters");
let maxLen = 500;

textarea.addEventListener("input", () => {
    let letters = textarea.value.length;
    letterCount.textContent = maxLen - letters;
});

textarea.addEventListener("focus", () => {
    letterCount.style.display = "block";
    let letters = textarea.value.length;
    letterCount.textContent = maxLen - letters;
});

// textarea.addEventListener("focusout", () => {
//     letterCount.style.display = "none";
// });

const bubbleBox = document.querySelector("#bubble-box");

document.querySelector("#add-emoji").addEventListener("click", (e) => {
    e.preventDefault();
    bubbleBox.classList.toggle("appear");
});

let emojiArray = [...document.querySelectorAll(".emoji")];

emojiArray.forEach((el) => {
    el.addEventListener("click", (e) => {
        textarea.value = textarea.value + e.target.innerText;
        setTimeout(() => {
            bubbleBox.classList.toggle('appear');
        }, 100)
    });
});