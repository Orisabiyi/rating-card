'use strict';
const btn = document.querySelector('.btn');
const collection = document.querySelector('.collection');

let targetElement;
collection.addEventListener('click', function (e) {
  // Removng the active class
  const items = document.querySelectorAll('.collection__item');
  items.forEach(item => item.classList.remove('collection__item--active'));

  // Adding the active class
  const item = e.target.classList.contains('collection__item');
  if (!item) return;

  e.target.classList.add('collection__item--active');
  targetElement = e.target.textContent;
})

btn.addEventListener('click', function () {
  if (!targetElement) return;

  document.querySelector('.section__container-rating--2').classList.remove('hidden');
  document.querySelector('.section__container-rating--1').classList.add('hidden');
  document.querySelector('.rating-number').textContent = targetElement;

  console.log(targetElement);
})
