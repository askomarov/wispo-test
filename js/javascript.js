(function () {
  let tooltipButton = document.querySelector('.tooltip__btn--category');
  let tooltipBody = document.querySelector('.tooltip__body--category');
  tooltipButton.addEventListener('click', function (event) {
    event.preventDefault();
    tooltipBody.classList.toggle('tooltip__body--visible');
  });

  let tooltipButton2 = document.querySelector('.tooltip__btn--2');
  let tooltipBody2 = document.querySelector('.tooltip__body--2');
  tooltipButton2.addEventListener('click', function (event) {
    event.preventDefault();
    tooltipBody2.classList.toggle('tooltip__body--visible');
  });

  document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.tooltip__btn--category')) {
      tooltipBody.classList.remove('tooltip__body--visible')
    }
  });

  document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.tooltip__btn--2')) {
      tooltipBody2.classList.remove('tooltip__body--visible')
    }
  });
})();



