// AcuteMarket js
$("#portfolio .first .btn").click (function () {
    var cat = '.' + $(this).attr('id');
    $("#portfolio .portfolio-item").hide();
    $(cat).show();
});