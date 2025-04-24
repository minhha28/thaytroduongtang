
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.toggle-icon');

  question.addEventListener('click', () => {
    const isOpen = answer.classList.contains('open');
    
    // Đóng tất cả
    faqItems.forEach(i => {
      i.querySelector('.faq-answer').style.maxHeight = null;
      i.querySelector('.faq-answer').classList.remove('open');
      i.querySelector('.toggle-icon').textContent = '+';
    });

    // Nếu đang đóng, thì mở
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.classList.add('open');
      icon.textContent = '−'; // dấu trừ khi mở
    }
  });
});
