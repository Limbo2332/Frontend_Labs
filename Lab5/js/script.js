const form = document.getElementById('registrationForm');

const validationErrorClassName = 'wrong-data';

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
  } else {
    pib.classList.remove(validationErrorClassName);
  }

  if (!variantRegex.test(variant.value)) {
    variant.classList.add(validationErrorClassName);
  } else {
    variant.classList.remove(validationErrorClassName);
  }

  if (!groupRegex.test(group.value)) {
    group.classList.add(validationErrorClassName);
  } else {
    group.classList.remove(validationErrorClassName);
  }

  if (!phoneRegex.test(phone.value)) {
    phone.classList.add(validationErrorClassName);
  } else {
    phone.classList.remove(validationErrorClassName);
  }

  if (!idCardRegex.test(idCard.value)) {
    idCard.classList.add(validationErrorClassName);
  } else {
    idCard.classList.remove(validationErrorClassName);
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