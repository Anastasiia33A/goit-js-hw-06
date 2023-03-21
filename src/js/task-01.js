const listOfEl = document.querySelectorAll(['.item']);
console.log(`Number of categories: ${listOfEl.length}`);

listOfEl.forEach((listOfEl) => {
   console.log(`Category: ${listOfEl.firstElementChild.textContent};
    Elements: ${listOfEl.lastElementChild.children.length};`)
});

