document.getElementById('text-area').addEventListener('keyup', message);
document.getElementById('btn-tweet').addEventListener('click', tweet);
document.getElementById('text-area').addEventListener('keydown', autoSize);

function message() {
    const str = document.getElementById('text-area').value;
    const max = 140;
    let currentLength = max - str.length;

    if (str.length > 0) {
        document.getElementById('btn-tweet').removeAttribute('disabled');
    }
    if (str.length === 0 || str.length > max) {
        document.getElementById('btn-tweet').setAttribute('disabled', 'disabled');
    }

    let color = 'green';
    if (currentLength <= 20) color = 'yellow';
    if (currentLength <= 10) color = 'red';

    document.getElementById('count').removeAttribute('class');
    document.getElementById('count').setAttribute('class', color);

    document.getElementById('count').innerHTML = currentLength;
}

function getDateAsString() {
    let date = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours}:${minutes} - ${day} ${month} ${year}`;
}

function tweet() {
    const str = document.getElementById('text-area').value;
    const dateTime = getDateAsString();

    /*------------------------------------
        Criando os elementos manualmente
    --------------------------------------*/
    // let node = document.createElement('li');
    // let textNode = document.createTextNode(str);
    // node.appendChild(textNode);
    // let list = document.getElementById('list');
    // list.insertBefore(node,list.firstChild);

    /*---------------------------------------------------
        Criando os elementos por função apartir do texto
    -----------------------------------------------------*/

    // const template = 
    //     `<li class='tweet-item'>
    //          <p class='tweet-content'>${str}</p>
    //          <p class='tweet-date'>${dateTime}</p>
    //      </li>`;
    // let li = createLiFromText(template);
    // let list = document.getElementById('list');
    // list.insertBefore(li, list.firstChild);

    /*------------------------------------
        Alterando o texto interno da lista
    --------------------------------------*/
    const template =
        `<li class='tweet-item'>
            <p class='tweet-date'>${dateTime}</p>
            <p class='tweet-content'>${str}</p>
         </li>`;
    document.getElementById('list').innerHTML = template + list.innerHTML;
    document.getElementById('text-area').value = "";
}

function autoSize(){
    let textarea = document.getElementById('text-area');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + "px";
}

// function autosize() {
//     let textarea = this;
//     setTimeout(function () {
//         textarea.style.cssText = 'height:auto; padding:0';
//         textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
//     }, 0);
// }


//https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro

// function createLiFromText(htmlContent) {
//     var ul = document.createElement('ul');
//     ul.innerHTML = htmlContent.trim();
//     return ul.firstChild;
// }

