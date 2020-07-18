const buttonRef = document.querySelector('#task_05');
const checkForSpam = function (message) {
  const upperMessage = message.toLowerCase();
  return upperMessage.includes('spam') || upperMessage.includes('sale');
};

buttonRef.addEventListener('click', () => {
  console.log(checkForSpam('Latest technology news'));
  console.log(checkForSpam('JavaScript weekly newsletter'));
  console.log(checkForSpam('Get best sale offers now!'));
  console.log(checkForSpam('[SPAM] How to earn fast money?'));
});
