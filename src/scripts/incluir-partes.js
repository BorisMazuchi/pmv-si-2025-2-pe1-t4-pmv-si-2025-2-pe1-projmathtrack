document.querySelectorAll('[data-include]').forEach(async el => {
  const file = el.getAttribute('data-include');
  const resp = await fetch(file);
  const html = await resp.text();
  el.innerHTML = html;
});
