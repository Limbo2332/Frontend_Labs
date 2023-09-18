// Завдання 1
const secondElement = document.getElementById('second-element');
const afterSecondElement = document.querySelector('p.next-after-second');

secondElement.addEventListener('click', () => {
  if (secondElement.classList.contains('click')) {
    secondElement.classList.remove('click');
  } else {
    secondElement.classList.add('click');
  }
})

afterSecondElement.addEventListener('click', () => {
  if (afterSecondElement.classList.contains('second-element')) {
    afterSecondElement.classList.remove('second-element');
  } else {
    afterSecondElement.classList.add('second-element');
  }
})

//Завдання 2
const addImageButton = document.getElementById('add-image');
const increaseImageButton = document.getElementById('increase-image');
const decreaseImageButton = document.getElementById('decrease-image');
const deleteImageButton = document.getElementById('delete-image');
const buttons = document.getElementById('buttons');
let isImageOnThePage = false;

addImageButton.addEventListener('click', () => {
  if (!isImageOnThePage) {
    const img = document.createElement('img');
    img.id = 'inserted-img';
    img.src = 'images/Kyiv2.jpg';
    img.width = '400';

    document.body.insertBefore(img, buttons);

    isImageOnThePage = true;
  }
})

increaseImageButton.addEventListener('click', () => {
  if (isImageOnThePage) {
    const img = document.getElementById('inserted-img');
    if (img.width <= 1000) {
      img.width += 50;
    }
  }
})

decreaseImageButton.addEventListener('click', () => {
  if (isImageOnThePage) {
    const img = document.getElementById('inserted-img');
    if (img.width > 50) {
      img.width -= 50;
    }
  }
})

deleteImageButton.addEventListener('click', () => {
  if (isImageOnThePage) {
    const img = document.getElementById('inserted-img');
    document.body.removeChild(img);

    isImageOnThePage = false;
  }
})