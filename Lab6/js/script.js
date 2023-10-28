const downloadbutton = document.getElementById("download");
const statusElement = document.querySelector("p.status");
const divElementWithData = document.getElementById("data");

downloadbutton.addEventListener("click", () => {
  fetch("https://randomuser.me/api").then((response) => {
    return response.json();
  }).then((obj) => {
    statusElement.innerText = "Successful";
    statusElement.classList.add("bg-success");
    const result = obj.results[0];

    const userImageElement = createUserImageElement(result);
    const userNameElement = createUserNameElement(result);
    const userCellElement = createUserCellElement(result);
    const userCityElement = createUserCityElement(result);
    const userCountryElement = createUserCountryElement(result);

    const divWrapperElement = createDivWrapper(userImageElement, userNameElement, userCellElement, userCityElement, userCountryElement);

    divElementWithData.appendChild(divWrapperElement);
  }).catch((error) => {
    statusElement.innerText = "Failed";
    statusElement.classList.add("bg-danger");
    console.error(error);
  })
})

function createUserImageElement(result) {
  const userImage = document.createElement("img");
  userImage.src = result.picture.large;

  return userImage;
}

function createUserNameElement(result) {
  const userName = document.createElement("p");
  userName.innerText = `Name: ${result.name.first} ${result.name.last}`;

  return userName;
}

function createUserCellElement(result) {
  const userCell = document.createElement("p");
  userCell.innerText = `Cell: ${result.cell}`;

  return userCell;
}

function createUserCityElement(result) {
  const userCity = document.createElement("p");
  userCity.innerText = `City: ${result.location.city}`;

  return userCity;
}

function createUserCountryElement(result) {
  const userCountry = document.createElement("p");
  userCountry.innerText = `Country: ${result.location.country}`;

  return userCountry;
}

function createDivWrapper(userImageElement, userNameElement, userCellElement, userCityElement, userCountryElement) {
  const userDivElement = document.createElement("div");
  userDivElement.classList.add("card");

  userDivElement.appendChild(userImageElement);
  userDivElement.appendChild(userNameElement);
  userDivElement.appendChild(userCellElement);
  userDivElement.appendChild(userCityElement);
  userDivElement.appendChild(userCountryElement);

  return userDivElement;
}
