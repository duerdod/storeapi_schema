window.addEventListener('DOMContentLoaded', () => {
  //   nav.innerHTML = `
  // <input type="text" placeholder="Search for definition" id="search-definition" />
  // ${nav.innerHTML}
  // `;
});

window.addEventListener('DOMContentLoaded', () => {
  const operations = document.querySelectorAll('.nav-group')[0];
  const [query, mutation] = operations.querySelectorAll(
    '.nav-group-section-title'
  );

  [query, mutation].forEach((operation) => {
    operation.addEventListener('click', () => {
      const list = operation.parentElement.querySelector(
        '.nav-group-section-items'
      );
      if (list.style.display === 'block') {
        list.style.display = 'none';
      } else {
        list.style.display = 'block';
      }
    });
  });

  const body = document.body;
  body.insertAdjacentHTML(
    'afterbegin',
    '<span id="back-to-top">Scroll to top</span>'
  );
  const toTopButton = document.getElementById('back-to-top');
  toTopButton.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    document.getElementById('nav').scroll({ top: 0, behavior: 'smooth' });
  });
});
