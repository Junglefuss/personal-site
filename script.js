const brandPanel = document.querySelector('#brand');
const founderPanel = document.querySelector('#founder');
const developerPanel = document.querySelector('#developer');
const marketerPanel = document.querySelector('#marketer');
const productPanel = document.querySelector('#product');

// function openPanel(id, display) {
//   display = 'block';
// }

// function closePanel(id)

const sectionHeaders = document.querySelector('.container');

sectionHeaders.addEventListener('click', function(evt) {
  let id = evt.target.id;
  let display = evt.target.style.display;
  // console.log(evt);
  // console.log(display);
  console.log(id);
  if (display !== 'block') {
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
    }
  } else {
    display = 'none';
  }
  // if (id) {
  //   switch (id) {
  //     case 'b':
  //       brandPanel.style.display = 'block';
  //       break;
  //   }
  // }
});
