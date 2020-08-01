const buttonRef = document.querySelector('#task_03');
const findLongestWord = string => {
  const arrString = string.split(' ');
  let longsWord = arrString[0];
  for (let i = 1; i < arrString.length; i += 1) {
    if (arrString[i].length > longsWord.length) {
        longsWord = arrString[i];
      }
    }
    return longsWord
}

// const findLongestWord = function (string) {
//   const arrString = string.split(' ');
//   let longsWord = arrString[0];

//   for (let i = 1; i < arrString.length; i += 1) {
//     if (arrString[i].length > longsWord.length) {
//       longsWord = arrString[i];
//     }
//   }
//   return longsWord;
// };

buttonRef.addEventListener('click', () => {
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

  console.log(findLongestWord('Google do a roll'));

  console.log(findLongestWord('May the force be with you'));
});
