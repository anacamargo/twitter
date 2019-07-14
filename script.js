document.getElementById('text-area').addEventListener('keyup', validateTweet);
document.getElementById('btn-tweet').addEventListener('click', tweet);
document.getElementById('text-area').addEventListener('keydown', autoSize);
document.getElementById('btn-login').addEventListener('click', login);

let name = undefined;

function login() {
  let img = pickRandomImage();
  name = document.getElementById('name-input').value;
  document.getElementById('content-login').classList.remove('hidden');
  document.getElementById('home').classList.add('hidden');
  document.getElementById('name').innerHTML = name;
  [...document.querySelectorAll('.photo')].map(element => element.src = img);
}

function validateTweet() {
  const str = document.getElementById('text-area').value;
  const max = 140;
  let currentLength = max - str.length;

  if (str.length > 0) {
    document.getElementById('btn-tweet').removeAttribute('disabled');
  }
  if (str.length === 0 || str.length > max) {
    document.getElementById('btn-tweet').setAttribute('disabled', 'disabled');
  }

  let color = 'blue';
  if (currentLength <= 20) color = 'yellow';
  if (currentLength <= 10) color = 'red';

  document.getElementById('count').removeAttribute('class');
  document.getElementById('count').setAttribute('class', color);

  document.getElementById('count').innerHTML = currentLength;
}

function getDateAsString() {
  let date = new Date();
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} - ${day} ${month} ${year}`;
}

function tweet() {
  const textArea = document.getElementById('text-area');
  const dateTime = getDateAsString();
  const list = document.getElementById('list');
  const content = textArea.value.split('\n').join('<br/>');
  const amount = document.getElementById('amount');
  const count = document.getElementById('count');
  const btn = document.getElementById('btn-tweet');

  const template =
    `<li class='tweet-item'>
      <div class='tweet-title'>
        <p class='tweet-content-title-name'>${name}</p>
        <p class='tweet-content-title'>${dateTime}</p>
      </div>
      <p class='tweet-content'>${content}</p>
    </li>`;

  list.innerHTML = template + list.innerHTML;
  textArea.value = '';
  count.innerHTML = '';
  amount.innerText = list.children.length || 0;
  btn.setAttribute('disabled', 'disabled');
}

function autoSize() {
  let textarea = document.getElementById('text-area');
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

function pickRandomImage() {
  const num = Math.floor(Math.random() * 10);
  return 'images/profile_' + num + '.png';
}