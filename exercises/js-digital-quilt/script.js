console.log('This works!');

const randColorRgb = () => {
  // math.random() returns a number between 0 and 1
  // math.floor() rounds down to the nearest integer
  // math.random() * 256 returns a number between 0 and 255
  // rgb() takes three numbers between 0 and 255
  const rand255 = () => Math.floor(Math.random() * 256);
  return `rgb(${rand255()}, ${rand255()}, ${rand255()})`;
};

const dynamicSize = () => {
  const rand = () => Math.floor(Math.random() * 100);
  return `${rand()}px`;
};
// const randColorHex = () => {
//   const rand16 = () => Math.floor(Math.random() * 16).toString(16);
//   return `#${rand16()}${rand16()}${rand16()}`;
// }

const MAX = 500;

const quilt = document.querySelector('#quilt');

for (let i = 0; i < MAX; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.backgroundColor = randColorRgb();
  // square.style.width = dynamicSize(); // bonus
  // square.style.height = square.style.width;
  square.textContent = i + 1;
  quilt.appendChild(square);
}
