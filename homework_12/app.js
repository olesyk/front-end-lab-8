let rootNode = document.getElementById("root");

function addImage(parent, srcImage, tooltip) {
  const img = document.createElement('img');
  img.src = srcImage;
  if (tooltip) {
    img.setAttribute('title', tooltip);
  }
  parent.appendChild(img);
}

function addSpan(parent, text, tooltip) {
  const span = document.createElement('span');
  span.innerHTML = text;
  if (tooltip) {
    span.setAttribute('title', tooltip);
  }
  parent.appendChild(span);
}

function addH2(parent, text) {
  const h2 = document.createElement('h2');
  h2.innerHTML = text;
  parent.appendChild(h2);
}

function createTanksList(list) {
  const divOfTanks = document.createElement('div');
  divOfTanks.className = 'tanks-list';

  for (let i = 0; i < list.length; i++) {
    const divItem = document.createElement('div');
    divItem.className = 'item';
    divItem.setAttribute('title', 'Click to details');
    addImage(divItem, list[i]["preview"]);

    const divDescription = document.createElement('div');
    divDescription.className = 'description';
    addImage(divDescription, list[i]["country_image"], list[i].country);
    addSpan(divDescription, list[i].level);
    addSpan(divDescription, list[i].model, list[i].model);

    divItem.appendChild(divDescription);

    let hash = list[i].model;

    divItem.addEventListener('click', () => location.hash = hash);
    divOfTanks.appendChild(divItem);
  }
  return divOfTanks;
}

const divThumbnails = document.createElement('div');
divThumbnails.className = 'thumbnails';
const h1 = document.createElement('h1');
h1.innerHTML = 'Most popular tanks';
divThumbnails.appendChild(h1);
divThumbnails.appendChild(createTanksList(tanks));
rootNode.appendChild(divThumbnails);

function addToSessionStorage(arr) {
  for (let i = 0; i < arr.length; i++) {
    sessionStorage.setItem(arr[i].model, JSON.stringify(arr[i]));
  }
}
addToSessionStorage(tanks);

function createTable(model) {
  if (sessionStorage.getItem(model) != null) {
    const table = document.createElement('table');
    const modelObj = JSON.parse(sessionStorage.getItem(model));
    for (let key in modelObj.details) {

      let tr = document.createElement('tr');
      let tdFeature = document.createElement('td');
      let tdRate = document.createElement('td');

      tdFeature.innerHTML = /_/.test(key) ? key.replace(/_/g, ' ') : key;
      tr.appendChild(tdFeature);
      tdRate.innerHTML = modelObj.details[key];
      tr.appendChild(tdRate);
      table.appendChild(tr);
    }
    return table;
  }
}

function createTankDetails(model) {
  const modelObj = JSON.parse(sessionStorage.getItem(model));
  const divOfTank = document.createElement('div');
  divOfTank.className = 'tank-details';

  const h1 = document.createElement('h1');
  addImage(h1, modelObj["country_image"], modelObj.country);
  addSpan(h1, modelObj.model);
  addSpan(h1, `(level ${modelObj.level})`);
  divOfTank.appendChild(h1);

  const divFlexbox = document.createElement('div');
  divFlexbox.className = 'flex-div';

  const divPreview = document.createElement('div');
  divPreview.className = 'preview';
  addH2(divPreview, 'Preview');
  addImage(divPreview, modelObj["preview"]);
  divFlexbox.appendChild(divPreview);

  const divOfCharacteristic = document.createElement('div');
  divOfCharacteristic.className = 'characteristic';
  addH2(divOfCharacteristic, 'Characteristic');
  const table = createTable(model);
  divOfCharacteristic.appendChild(table);
  divFlexbox.appendChild(divOfCharacteristic);


  const a = document.createElement('a');
  a.innerHTML = 'Back to list view';
  a.addEventListener('click', () => location.hash = '#');

  divOfTank.appendChild(divFlexbox);
  divOfTank.appendChild(a);
  return divOfTank;
}

window.addEventListener('hashchange', () => {
  const hashText = location.hash.slice(1);
  if (hashText === '') {
    const tankDetails = document.querySelector('.tank-details');
    rootNode.replaceChild(divThumbnails, tankDetails);
  } else {
    const tankDetails = createTankDetails(hashText);
    rootNode.replaceChild(tankDetails, divThumbnails);
  }
});