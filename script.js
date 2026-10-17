const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.textContent = isDark ? '☀️ Chế độ sáng' : '🌙 Chế độ tối';
});

const filterButtons = document.querySelectorAll('[data-filter]');
const projectItems = document.querySelectorAll('.project-item');
const filterStatus = document.getElementById('filterStatus');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    projectItems.forEach(project => {
      const show = filter === 'all' || project.dataset.category === filter;
      project.classList.toggle('d-none', !show);
      if (show) count++;
    });
    filterStatus.textContent = `Đang hiển thị ${count} dự án.`;
  });
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.getElementById('formStatus');
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = 'Vui lòng kiểm tra và điền đầy đủ thông tin hợp lệ.';
    status.className = 'mt-3 mb-0 text-danger';
    return;
  }
  status.textContent = 'Thông tin hợp lệ! Đây là bản demo nên tin nhắn chưa được gửi đi.';
  status.className = 'mt-3 mb-0 text-success';
});
