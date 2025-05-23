document.addEventListener('DOMContentLoaded', function() {
    // delklaracja zmiennych
    const inf03Box = document.querySelectorAll('.exam-box')[0];
    const inf04Box = document.querySelectorAll('.exam-box')[1];
    const inf03Details = document.getElementById('inf03-details');
    const inf04Details = document.getElementById('inf04-details');


//Funkcja pokazuje jeden szczegół i ukrywa drugi.
    function showDetails(detailsToShow, detailsToHide, boxToShow, boxToHide) {
        detailsToHide.classList.remove('show');
        boxToHide.classList.remove('active');
        setTimeout(() => {
            detailsToShow.style.display = 'block';
            boxToShow.classList.add('active');
            setTimeout(() => {
                detailsToShow.classList.add('show');
            }, 10);
        }, 1000); 
    }   

    //dodaje obsługę kliknięcia na element inf03Box, która pokazuje lub ukrywa szczegóły inf03Details z animacją, a jeśli inf04Details jest już widoczny, to zamiast tego przełącza widoczność między nimi za pomocą funkcji showDetails
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
            inf03Details.classList.remove('show');
            inf03Box.classList.remove('active');
            setTimeout(() => {
                inf03Details.style.display = 'none';
            }, 1000);
        }
    });
//vice versa
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
            inf04Details.classList.remove('show');
            inf04Box.classList.remove('active');
            setTimeout(() => {
                inf04Details.style.display = 'none';
            }, 1000);
        }
    });
});