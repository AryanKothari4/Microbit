/**
 * Accordion Interactivity
 * Handles toggling accordion items and ensures only ONE item
 * is open at any given time.
 */
document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // 1. Close all open accordion items
      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.accordion-content');
        if (otherContent) {
          otherContent.style.maxHeight = null;
        }
      });

      // 2. If the clicked item was NOT already open, open it
      if (!isOpen) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});