/**
 * Carrega um footer HTML e injeta no seletor informado.
 * Ex.: loadFooter('#site-footer', '/partials/footer.html')
 */
async function loadFooter(targetSelector = '#site-footer', footerPath = '/partials/footer.html') {
  try {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const res = await fetch(footerPath, { cache: 'no-store' });
    if (!res.ok) throw new Error('Não foi possível carregar o footer.');
    const html = await res.text();

    target.innerHTML = html;

    // Ajusta ano dinâmico
    const yearSpans = target.querySelectorAll('[data-year]');
    const y = new Date().getFullYear();
    yearSpans.forEach(el => (el.textContent = y));
  } catch (e) {
    // Fallback simples
    console.error(e);
  }
}
