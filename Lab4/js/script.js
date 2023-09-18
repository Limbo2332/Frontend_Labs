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