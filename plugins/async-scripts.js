export default () => {
  if (process.client) {
    window.addEventListener('load', () => {
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        script.setAttribute('async', 'async');
      });
    });
  }
}