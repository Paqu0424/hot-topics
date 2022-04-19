const container = document.getElementById('container');

// GET THE REFERENCES
const links = document.querySelectorAll('[data-ajax-link]');
let url = location.href;

const loadContent = async (href) => {
  try {
    const parsedUrl = new URL(href);
    const hash = parsedUrl.hash || '#home.html';
    const partial = await fetch(`partials/${hash.slice(1)}`);
    container.innerHTML = await partial.text();
  } catch (err) {
    console.err(err);
  }
};
loadContent(url);

const selectContent = (link) => {
  loadContent(link.href);
};
links.forEach((link) =>
  link.addEventListener('click', () => selectContent(link))
);
