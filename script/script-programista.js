document.addEventListener('DOMContentLoaded', function() {
    const inf03Box = document.querySelectorAll('.exam-box')[0];
    const inf04Box = document.querySelectorAll('.exam-box')[1];
    const inf03Details = document.getElementById('inf03-details');
    const inf04Details = document.getElementById('inf04-details');

    inf03Box.style.cursor = 'pointer';
    inf04Box.style.cursor = 'pointer';

    function showDetails(detailsToShow, detailsToHide, boxToShow, boxToHide) {
        detailsToHide.classList.remove('show');
        boxToHide.classList.remove('active');
        setTimeout(() => {
            // detailsToHide.style.display = 'none'; // Remove immediate display none to allow max-height transition
            detailsToShow.style.display = 'block';
            boxToShow.classList.add('active');
            setTimeout(() => {
                detailsToShow.classList.add('show');
            }, 10);
        }, 1000); // Wait for hide animation to finish before showing
    }

    inf03Box.addEventListener('click', function() {
        if (!inf03Details.classList.contains('show')) {
            if (inf04Details.classList.contains('show')) {
                showDetails(inf03Details, inf04Details, inf03Box, inf04Box);
            } else {
                inf03Details.style.display = 'block';
                inf03Box.classList.add('active');
                setTimeout(() => {
                    inf03Details.classList.add('show');
                }, 10);
            }
        } else {
            // Hide inf03Details if already shown
            inf03Details.classList.remove('show');
            inf03Box.classList.remove('active');
            setTimeout(() => {
                inf03Details.style.display = 'none';
            }, 1000);
        }
    });

    inf04Box.addEventListener('click', function() {
        if (!inf04Details.classList.contains('show')) {
            if (inf03Details.classList.contains('show')) {
                showDetails(inf04Details, inf03Details, inf04Box, inf03Box);
            } else {
                inf04Details.style.display = 'block';
                inf04Box.classList.add('active');
                setTimeout(() => {
                    inf04Details.classList.add('show');
                }, 10);
            }
        } else {
            // Hide inf04Details if already shown
            inf04Details.classList.remove('show');
            inf04Box.classList.remove('active');
            setTimeout(() => {
                inf04Details.style.display = 'none';
            }, 1000);
        }
    });
});
