$(document).ready(onReady);

function onReady() {
    $.ajax({
        type: 'GET',
        url: '/wolves'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            $('#wolvesList').append(`
                <ul>
                    <li>${response[i].commonName}</li>
                    <li>${response[i].scientificName}</li>
                </ul>
            `);
        }
    });
}