const buttonRef = document.querySelector('#task_04');
const formatString = string => string.length <= 40 ? string : `${string.slice(0, 41)}...`;


// const formatString = function (string) {
//   return string.length <= 40 ? string : `${string.slice(0, 41)}...`;
// };

buttonRef.addEventListener('click', () => {
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

  console.log(
    formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'),
  );

  console.log(formatString('Curabitur ligula sapien.'));

  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
});
