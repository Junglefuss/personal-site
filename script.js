const brandPanel = document.querySelector('#brand');
const founderPanel = document.querySelector('#founder');
const developerPanel = document.querySelector('#developer');
const marketerPanel = document.querySelector('#marketer');
const productPanel = document.querySelector('#product');

const sectionHeaders = document.querySelector('.container');

sectionHeaders.addEventListener('click', function(evt) {
  let id = evt.target.id;
  console.log(evt);
  console.log(id);
  if (id === 'b') {
    brandPanel.style.display = 'block';
  } else if (id === 'f') {
    founderPanel.style.display = 'block';
  } else if (id === 'd') {
    developerPanel.style.display = 'block';
  } else if (id === 'm') {
    marketerPanel.style.display = 'block';
  } else if (id === 'p') {
    productPanel.style.display = 'block';
  } else {
    brandPanel.style.display = '';
    founderPanel.style.display = '';
    developerPanel.style.display = '';
    marketerPanel.style.display = '';
    productPanel.style.display = '';
  }
});
