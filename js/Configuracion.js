    const sidebar = document.getElementById('sidebar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    window.addEventListener('DOMContentLoaded', () => {
        const defaultItem = document.querySelector('#sidebar li[data-section="cuenta"]');
        if (defaultItem) {
            defaultItem.classList.add('active');
        }
    });     

    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        sidebar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            if (!sidebar.contains(e.target) && e.target !== hamburgerBtn) {
            sidebar.classList.remove('active');
            }
        }
    });

    const menuItems = document.querySelectorAll('#sidebar li');
    const sections = document.querySelectorAll('.seccion');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-section');

        sections.forEach(sec => sec.classList.remove('visible'));
        document.getElementById(targetId).classList.add('visible');
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        });
    });