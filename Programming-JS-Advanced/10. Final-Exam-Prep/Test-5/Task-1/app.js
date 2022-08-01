function solve() {

   let authorEl = document.getElementById('creator');
   let titleEl = document.getElementById('title');
   let categoryEl = document.getElementById('category');
   let contentEl = document.getElementById('content');
   let createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', onCreate)

   let archived = [];

   function onCreate(ev) {
      ev.preventDefault();

      let author = authorEl.value;
      let title = titleEl.value;
      let category = categoryEl.value;
      let content = contentEl.value;

      authorEl.value = ''
      titleEl.value = ''
      categoryEl.value = ''
      contentEl.value = ''

      let article = document.createElement('article');
      let h1 = document.createElement('h1');
      h1.textContent = title;
      let p1 = document.createElement('p');
      p1.textContent = 'Category:';
      let strong1 = document.createElement('strong');
      strong1.textContent = category;
      p1.appendChild(strong1);
      let p2 = document.createElement('p');
      p2.textContent = 'Creator:'
      let strong2 = document.createElement('strong');
      strong2.textContent = author;
      p2.appendChild(strong2);

      let p3 = document.createElement('p');
      p3.textContent = content;

      let div = document.createElement('div');
      div.classList.add('buttons');

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', onDelete);

      let archiveBtn = document.createElement('button');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.textContent = 'Archive';
      archiveBtn.addEventListener('click', onArchive);

      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(div);

      let postSection = document.querySelector('div > main > section');
      postSection.appendChild(article);

      function onDelete() {
         article.remove();
      }

      function onArchive() {

         let archiveSection = document.querySelector('section > ol');
         archiveSection.innerHTML = '';
         archived.push(article.firstChild.textContent);
         archived.sort((a, b) => a.localeCompare(b));

         for (let el of archived) {
            let newLi = document.createElement('li');
            newLi.textContent = el
            archiveSection.appendChild(newLi);
         }

         article.remove();
      }
   }

}