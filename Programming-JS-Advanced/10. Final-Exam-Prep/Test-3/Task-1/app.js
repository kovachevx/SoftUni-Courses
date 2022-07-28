window.addEventListener('load', solve);

function solve() {
    let genreElement = document.getElementById('genre');
    let nameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onAdd)

    let totalLikes = 0;

    function onAdd(ev) {
        ev.preventDefault();

        let genre = genreElement.value;
        let name = nameElement.value;
        let author = authorElement.value;
        let date = dateElement.value;

        if (!genre || !name || !author || !date) {
            return;
        }

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        let allHitsDiv = document.querySelector('.all-hits-container');

        let div = document.createElement('div');
        div.classList.add("hits-info");
        let img = document.createElement('img');
        img.src = "./static/img/img.png";
        let genreH2 = document.createElement('h2');
        genreH2.textContent = 'Genre: ' + genre;
        let nameH2 = document.createElement('h2');
        nameH2.textContent = 'Name: ' + name;
        let authorH2 = document.createElement('h2');
        authorH2.textContent = 'Author: ' + author;
        let dateH3 = document.createElement('h3');
        dateH3.textContent = 'Date: ' + date;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', onSave);

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', onLike);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);

        div.appendChild(img);
        div.appendChild(genreH2);
        div.appendChild(nameH2);
        div.appendChild(authorH2);
        div.appendChild(dateH3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        allHitsDiv.appendChild(div);

        function onSave() {
            let saveSection = document.querySelector('.saved-container');
            saveSection.appendChild(div);
            div.lastChild.previousSibling.remove();
            div.lastChild.previousSibling.remove();
        }

        function onLike(ev) {
            totalLikes++;
            let p = document.querySelector('.likes p');
            p.textContent = `Total Likes: ${totalLikes}`;
            ev.target.disabled = true;
        }

        function onDelete() {
            div.remove();
        }
    }
}
solve()