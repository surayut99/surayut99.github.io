var content
fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        content = data
    });

function switchTitle(e) {
    document.getElementById('head').innerHTML = content[e].head
    document.getElementById('title').innerHTML = content[e].title
    document.getElementById('des').innerHTML = content[e].des
    document.getElementById('poster').src = content[e].src
    document.getElementById('ref-0').href = content[e].ref
    document.getElementById('ref-1').href = content[e].ref
}