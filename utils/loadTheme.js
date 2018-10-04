//curry me
export default (importer, theme) => {
  const request = `theme-${theme}-scss.css`;
  importer(theme).then(() => {
    var stylesheets = document.head.querySelectorAll('link[rel=stylesheet]');
    stylesheets.forEach(l => l.disabled = !l.href.endsWith(request));
  });
};