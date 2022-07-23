function solve() {

    let recipientNameElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');
    let resetBtn = document.getElementById('reset');
    let addBtn = document.getElementById('add');

    resetBtn.addEventListener('click', onReset);
    addBtn.addEventListener('click', onAdd);

    function onAdd(ev) {
        ev.preventDefault();

        let recipientName = recipientNameElement.value;
        let title = titleElement.value;
        let message = messageElement.value;

        if (!recipientName || !title || !message) {
            return;
        }

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';

        let liElement = document.createElement('li');
        let firstH4 = document.createElement('h4');
        firstH4.textContent = 'Title: ' + title;
        let secondH4 = document.createElement('h4');
        secondH4.textContent = 'Recipient Name: ' + recipientName;
        let span = document.createElement('span');
        span.textContent = message;
        let div = document.createElement('div');
        div.setAttribute("id", "list-action");
        let sendBtn = document.createElement('button');
        sendBtn.setAttribute("id", "send");
        sendBtn.textContent = 'Send';
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute("id", "delete");
        deleteBtn.textContent = 'Delete';
        sendBtn.addEventListener('click', onSend);
        deleteBtn.addEventListener('click', onDelete);
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        liElement.appendChild(firstH4);
        liElement.appendChild(secondH4);
        liElement.appendChild(span);
        liElement.appendChild(div);

        document.getElementById('list').appendChild(liElement);

        function onSend() {
            let sentFolder = document.querySelector('.sent-list');
            liElement.remove();

            let newLi = document.createElement('li');
            let span1 = document.createElement('span');
            span1.textContent = 'To: ' + recipientName;
            let span2 = document.createElement('span');
            span2.textContent = 'Title: ' + title;
            newLi.appendChild(span1);
            newLi.appendChild(span2);
            let div = document.createElement('div');
            div.classList.add('btn');
            let deleteSentBtn = document.createElement('button');
            deleteSentBtn.classList.add('delete');
            deleteSentBtn.textContent = 'Delete';
            deleteSentBtn.addEventListener('click', onDelete);
            div.appendChild(deleteSentBtn);
            newLi.appendChild(div);
            sentFolder.appendChild(newLi);
        }

        function onDelete(ev) {
            let trashFolder = document.querySelector('.delete-list');
            ev.target.parentElement.parentElement.remove();

            let newLi = document.createElement('li');
            let span1 = document.createElement('span');
            span1.textContent = 'To: ' + recipientName;
            let span2 = document.createElement('span');
            span2.textContent = 'Title: ' + title;

            newLi.appendChild(span1);
            newLi.appendChild(span2);
            trashFolder.appendChild(newLi);

        }
    }

    function onReset(ev) {
        ev.preventDefault();
        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    }
}
solve()