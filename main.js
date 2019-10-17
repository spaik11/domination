// Part One
function changeImg(id, url) {
    const imgId = document.querySelector(id);
    imgId.src = url;
}

changeImg('#image-1', 'https://media.giphy.com/media/9xxciSRg2Ugwt76OQB/giphy.gif');
changeImg('#image-2', 'https://media.giphy.com/media/MFOW53R3kXP3hOEI71/giphy.gif');
changeImg('#image-3', 'https://media.giphy.com/media/XbTygeYSO8bQ5FB02p/giphy.gif');

function strikeText() {
    const firstListItem = document.querySelector('ul :first-child');
    firstListItem.style.textDecoration = 'line-through';
}

strikeText(); 

function removeLi() {
    document.querySelector('li:last-child').remove();
}

removeLi();
removeLi();

// Part Two
function appendUl(element) {
    document.querySelector('ul').appendChild(element);
}

const newImg = document.createElement('img');
newImg.src = 'https://media.giphy.com/media/9xxciSRg2Ugwt76OQB/giphy.gif';
appendUl(newImg);

function changeImgHeight(img) {
    img.style.height = '30px';
}

const findImg = document.querySelector('img');
changeImgHeight(findImg);

function invisible(element) {
    element.className = 'invisible';
}

const findEl = document.querySelector('ol');
invisible(findEl);

function changeFont(fontSize, id) {
    const findId = document.querySelector(id);
    findId.style.fontSize = fontSize;
}

changeFont('30px', 'h1');

// Part Three
function newLiWithText(todoText) {
    const newTodo = document.createElement('li');
    newTodo.innerText = todoText;

    return newTodo;
}

const newTodo = newLiWithText('hello');
appendUl(newTodo);

function headerWithText(headerSize, text) {
    const header = document.createElement(`h${headerSize}`);
    header.innerText = text;

    return header;
}

const newHeader = headerWithText(3, 'does this work?')
appendUl(newHeader);