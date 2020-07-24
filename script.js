function switchTitle(e) {
    poster.src = content[e].src
    head.innerHTML = content[e].head
    title.innerHTML = content[e].title
    des.innerHTML = content[e].des
}

var content
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        content = data
    });

let head = document.getElementById('head')
let title = document.getElementById('title')
let des = document.getElementById('des')
let poster = document.getElementById('poster')

head.innerHTML = "THE FIRST"
title.innerHTML = "Music and Lyrics"
poster.src = "https://upload.wikimedia.org/wikipedia/en/d/d3/Music_and_lyrics.jpg"
des.innerHTML = "I actually never thought to see this kind of movie before, but this movie is the first romatic-comedy movie for me and made me want to watch more this kind of movie. I always feel good when I watch this kind of movie. In addition, the original sound tracks are so good. it made me want to watch this again."
