document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            document.querySelectorAll('section').forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden', 'fade-out');
                    section.classList.add('fade-in');
                    section.style.position = 'relative';
                } else {
                    section.classList.remove('fade-in');
                    section.classList.add('fade-out');
                    section.style.position = 'absolute';
                    setTimeout(() => {
                        section.classList.add('hidden');
                    }, 500);
                }
            });

            navLinks.forEach(l => {
                if (l.getAttribute('data-target') === targetId) {
                    l.classList.add('nav-active');
                } else {
                    l.classList.remove('nav-active');
                }
            });
        });
    });
});

var $grid = $('.portfolio-grid').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry',
    masonry: {
        columnWidth: '.portfolio-item',
        fitWidth: true,
        gutter: 30
    },
    filter: '*'
});

$('li').on('click', '[data-target="portfolio"]', function() {
    $('.portfolio-categories .category-btn[data-category="all"]').addClass('active');
    $grid.isotope({ filter: '*' });
});

$('.portfolio-categories').on('click', '.category-btn', function() {
    var filterValue = $(this).attr('data-category');
    filterValue = filterValue === 'all' ? '*' : '.' + filterValue;
    $grid.isotope({ filter: filterValue });

    $('.portfolio-categories .category-btn').removeClass('active');
    $(this).addClass('active');
});
