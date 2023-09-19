// Завдання 1
const form = document.getElementById('registrationForm');
const validationErrorClassName = 'wrong-data';
const validationPassedClassName = 'correct-data';

const PIBRegex = /^[А-Яа-яіІїЇ]{6}\s[А-Яа-яіІїЇ]{1}[.]\s[А-Яа-яіІїЇ]{1}[.]$/;
const variantRegex = /^[0-9]{1,2}$/;
const groupRegex = /^[А-Яа-яіІїЇ]{2}[-][0-9]{2}$/;
const phoneRegex = /^[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{2}[-][0-9]{2}/;
const idCardRegex = /^[А-Яа-яіІїЇ]{2}\s[№][0-9]{6}$/

form.addEventListener('submit', (event) => {
  const pib = form['pib'];
  const variant = form['variant'];
  const group = form['group'];
  const phone = form['phone'];
  const idCard = form['idcard'];
  const data = document.getElementById('data');
  const pibValue = document.getElementById('pib-value');
  const variantValue = document.getElementById('variant-value');
  const groupValue = document.getElementById('group-value');
  const phoneValue = document.getElementById('phone-value');
  const idCardValue = document.getElementById('idcard-value');

  if (!PIBRegex.test(pib.value)) {
    pib.classList.add(validationErrorClassName);
    pib.classList.remove(validationPassedClassName);
  } else {
    pib.classList.remove(validationErrorClassName);
    pib.classList.add(validationPassedClassName);
  }

  if (!variantRegex.test(variant.value)) {
    variant.classList.add(validationErrorClassName);
    variant.classList.remove(validationPassedClassName);
  } else {
    variant.classList.remove(validationErrorClassName);
    variant.classList.add(validationPassedClassName);
  }

  if (!groupRegex.test(group.value)) {
    group.classList.add(validationErrorClassName);
    group.classList.remove(validationPassedClassName);
  } else {
    group.classList.remove(validationErrorClassName);
    group.classList.add(validationPassedClassName);
  }

  if (!phoneRegex.test(phone.value)) {
    phone.classList.add(validationErrorClassName);
    phone.classList.remove(validationPassedClassName);
  } else {
    phone.classList.remove(validationErrorClassName);
    phone.classList.add(validationPassedClassName);
  }

  if (!idCardRegex.test(idCard.value)) {
    idCard.classList.add(validationErrorClassName);
    idCard.classList.remove(validationPassedClassName);
  } else {
    idCard.classList.remove(validationErrorClassName);
    idCard.classList.add(validationPassedClassName);
  }

  if (!pib.classList.contains(validationErrorClassName)
    && !variant.classList.contains(validationErrorClassName)
    && !group.classList.contains(validationErrorClassName)
    && !phone.classList.contains(validationErrorClassName)
    && !idCard.classList.contains(validationErrorClassName)) {
    pibValue.innerText = pib.value;
    groupValue.innerText = group.value;
    variantValue.innerText = variant.value;
    phoneValue.innerText = phone.value;
    idCardValue.innerText = idCard.value;

    data.classList.remove('data');
  }

  event.preventDefault();
})

// Завдання 2
const table = document.getElementById('table');
const colorPalitre = document.getElementById('color');

for (let i = 0; i < 6; i++) {
  const tr = document.createElement('tr');
  for (let j = 1; j <= 6; j++) {
    const td = document.createElement('td');
    const value = (i * 6) + j;

    if (value === 1) {
      td.id = 'tableVariant';
    }

    td.innerText = value;

    tr.appendChild(td);
  }
  table.appendChild(tr);
}

const tableVariant = document.getElementById('tableVariant');

tableVariant.addEventListener('mouseover', () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  tableVariant.style.backgroundColor = randomColor;
})

tableVariant.addEventListener('click', () => {
  tableVariant.style.backgroundColor = colorPalitre.value;
})

tableVariant.addEventListener('dblclick', () => {
  tableVariant.parentElement.style.backgroundColor = colorPalitre.value;
})