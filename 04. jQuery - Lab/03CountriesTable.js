function initializeTable() {
    $('#createLink').click(createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");
    fixRowLinks();

    function addCountryToTable(country, capital) {
        let tr = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up] </a>').click(moveRowUp))
                .append($('<a href="#">[Down] </a>').click(moveRowDown))
                .append($('<a href="#">[Delete] </a>').click(deleteRow)));
        $(tr).css('display', 'none');
        $('#countriesTable').append(tr);
        tr.fadeIn(1000)
    }

    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        addCountryToTable(country.val(), capital.val());
        country.val('');
        capital.val('');
        fixRowLinks();

    }

    function moveRowUp() {
        let row = $(this).parent().parent();
        //if(row.index()>2){
            row.fadeOut(function () {
                row.insertBefore(row.prev());
                row.fadeIn(1000);
                fixRowLinks();
            });
        //}

    }

    function moveRowDown() {
        let row = $(this).parent().parent();
        if(!row.is(':last-child')){
            row.fadeOut(function () {
                row.insertAfter(row.next());
                row.fadeIn();
                fixRowLinks();
            });
        }

    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            fixRowLinks();
        })
    }

    function fixRowLinks() {
$('#countriesTable a').css('display','inline');

let tableRows=$('#countriesTable tr');
$(tableRows[2]).find("a:contains('Up')").css('display','none');
$(tableRows[tableRows.length-1]).find("a:contains('Down')")
    .css('display','none');
    }
}
