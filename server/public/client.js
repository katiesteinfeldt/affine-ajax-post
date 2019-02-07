$(document).ready(onReady);

function onReady() {
    $.ajax({
        type: 'GET',
        url: '/wolves'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            $('#wolvesTable').append(`
             <tr>
                <td>${response[i].commonName}</td>
                <td>${response[i].scientificName}</td>
            </tr>
            `);
        }
    });
}