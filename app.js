(() => {
  'use strict';
  const sections = [...document.querySelectorAll('.assignment')];
  const links = [...document.querySelectorAll('[data-assignment]')];
  const position = document.querySelector('#page-position');
  const feedback = document.querySelector('#copy-feedback');
  let feedbackTimer;
  let currentAssignment = '1';

  function selectAssignment() {
    const match = /^#assignment-([1-4])$/.exec(window.location.hash);
    const id = match ? match[1] : currentAssignment;
    currentAssignment = id;
    sections.forEach(section => { section.hidden = section.id !== `assignment-${id}`; });
    links.forEach(link => {
      if (link.dataset.assignment === id) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    position.textContent = `ASSIGNMENT 0${id} / 04`;
    document.title = `${document.querySelector(`#title-${id}`).textContent} · 课程作业手册`;
  }
  links.forEach(link => link.addEventListener('click', () => {
    if (window.location.hash === link.hash) selectAssignment();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }));
  window.addEventListener('hashchange', selectAssignment);
  selectAssignment();

  document.querySelector('#back-top').addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    document.querySelector('#main').focus({ preventScroll: true });
  });

  function showFeedback(message) {
    feedback.textContent = message;
    feedback.classList.add('visible');
    clearTimeout(feedbackTimer);
    feedbackTimer = setTimeout(() => feedback.classList.remove('visible'), 2800);
  }
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const text = document.getElementById(button.dataset.copy).textContent;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard not available');
      await navigator.clipboard.writeText(text);
      showFeedback('已复制；提交前请替换实际地址和认证信息。');
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById(button.dataset.copy));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      showFeedback('请复制已选中的文本。');
    }
  }));
})();
