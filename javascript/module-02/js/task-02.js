const buttonRef = document.querySelector('#task_02');

const calculateEngravingPrice =(message, pricePerWord) => message.split(' ').length * pricePerWord;
// const calculateEngravingPrice = function (message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// };

buttonRef.addEventListener('click', () => {
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  );

  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  );

  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  );

  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  );
});
