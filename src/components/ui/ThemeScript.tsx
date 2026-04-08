// Inline script injected into <head> before page renders.
// Reads localStorage and sets data-theme on <html> to prevent flash.
export function ThemeScript() {
  const script = `(function(){var t=localStorage.getItem('nrw-theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
