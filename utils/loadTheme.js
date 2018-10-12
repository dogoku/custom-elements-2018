//curry me
export default (importer, theme) => {
  const request = `theme-${theme}-scss.css`;
  importer(theme).then(() => {
    for (const l of document.head.querySelectorAll('link[rel=stylesheet]')) {
      l.disabled = !l.href.endsWith(request)
    }
  });
};