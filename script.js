document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  // فتح/إغلاق القائمة الرئيسية
  mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // فتح/إغلاق القائمة الفرعية (More)
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        toggle.parentElement.classList.toggle('active');
      }
    });
  });

  // إغلاق القائمة عند الضغط على أي رابط (والتمرير للقسم)
  document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);

      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
      }

      if (target && targetId.startsWith('#')) {
        e.preventDefault();
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    });
  });
});
