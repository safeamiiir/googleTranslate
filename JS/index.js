
////////////////////////////////////////////////////////
let en = false;
let fa = false;
/////////////////// variable  //////////////////////////


////////////////////////////////////////////////////////
$('#en1').click(function() {
    fa = false;
    $('#en2').css("background-color", "#f2f2f2");
    $('#fa1').css("background-color", "#f2f2f2");
    en = true;
    $('#en1').css("background-color", "#cccccc");
    $('#fa2').css("background-color", "#cccccc");
    $('#l1').focus();
});
$('#fa1').click(function() {
    en = false;
    $('#fa2').css("background-color", "#f2f2f2");
    $('#en1').css("background-color", "#f2f2f2");
    fa = true;
    $('#fa1').css("background-color", "#cccccc");
    $('#en2').css("background-color", "#cccccc");
    $('#l1').focus();
});
$('#en2').click(function() {
    en = false;
    $('#en1').css("background-color", "#f2f2f2");
    $('#fa2').css("background-color", "#f2f2f2");
    fa = true;
    $('#en2').css("background-color", "#cccccc");
    $('#fa1').css("background-color", "#cccccc");
    $('#l1').focus();
});
$('#fa2').click(function() {
    fa = false;
    $('#fa1').css("background-color", "#f2f2f2");
    $('#en2').css("background-color", "#f2f2f2");
    en = true;
    $('#fa2').css("background-color", "#cccccc");
    $('#en1').css("background-color", "#cccccc");
    $('#l1').focus();
});
$('#exchange').click(function() {
    if (fa){
        let tmp;
        tmp = $('#l1').val();
        $('#l1').val($('#l2').val());
        $('#l2').val(tmp);
        fa = false;
        $('#en2').css("background-color", "#f2f2f2");
        $('#fa1').css("background-color", "#f2f2f2");
        en = true;
        $('#en1').css("background-color", "#cccccc");
        $('#fa2').css("background-color", "#cccccc");

    }
    else if (en){
        let tmp;
        tmp = $('#l1').val();
        $('#l1').val($('#l2').val());
        $('#l2').val(tmp);
        en = false;
        $('#fa2').css("background-color", "#f2f2f2");
        $('#en1').css("background-color", "#f2f2f2");
        fa = true;
        $('#fa1').css("background-color", "#cccccc");
        $('#en2').css("background-color", "#cccccc");
    }
    $('#l1').focus();
});

/////////////////// sets LANG  /////////////////////////



////////////////////////////////////////////////////////
$('#translate').click(function() {
    if (en) {
        if ( $('#l1').val() == 'apple' ){
            $('#l2').val('سیب');
        }
        if ( $('#l1').val() == 'boy' ){
            $('#l2').val('پسر');
        }
        if ( $('#l1').val() == 'university' ){
            $('#l2').val('دانشگاه');
        }
        if ( $('#l1').val() == 'lawyer' ){
            $('#l2').val('وکیل');
        }
        if ( $('#l1').val() == 'dadsun' ){
            $('#l2').val('شرکت دادسان');
        }
    }
    else if (fa) {
        if ( $('#l1').val() == 'سیب' ){
            $('#l2').val('apple');
        }
        if ( $('#l1').val() == 'پسر' ){
            $('#l2').val('boy');
        }
        if ( $('#l1').val() == 'دانشگاه' ){
            $('#l2').val('university');
        }
        if ( $('#l1').val() == 'وکیل' ){
            $('#l2').val('lawyer');
        }
        if ( $('#l1').val() == 'دادسان' ){
            $('#l2').val('dadsun');
        }
    }
    else if (!fa && !en )  {
        alert( " Select Language First ! " );
    }
});
/////////////////// Translates /////////////////////////


    $(".trigger_popup_fricc").click(function(){
        $('.hover_bkgr_fricc').show();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });


/////////////////// FeedbackBox /////////////////////////


$(".avatar").click(function(e) {
    $('.dropdownMenu').hide();
    e.stopPropagation();
    $('.dialogBox').toggle();
});
$(document).click(function() {
    $('.dialogBox').hide();
});
$(".dialogBox").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    return false;        // This should not be used unless you do not want
                         // any click events registering inside the div
});
/////////////////// Avatar /////////////////////////
let hr = $("#hr").position();
$('.more').click(function() {
    $('.dropdownMenu').animate({
        scrollTop: hr.top
    }, 500);
    return false;
});
$('#dropDown').click(function() {
$('.dropdownMenu').animate({
    scrollTop: 0
}, 500);
});

$('.dropdownMenu').hide();


$('#dropDown').click(function(e) {
    $('.dialogBox').hide();
    e.stopPropagation();
    $('.dropdownMenu').toggle();
});
$(document).click(function() {
    $('.dropdownMenu').hide();
});
$(".dropdownMenu").click(function(e) {
    e.stopPropagation(); // This is the preferred method.
    return false;        // This should not be used unless you do not want
                         // any click events registering inside the div
});
$('.dropdownMenu').scroll(function() {
    console.log($('.dropdownMenu').scrollTop());
    if ( $('.dropdownMenu').scrollTop() < 2 ){
        $('.more').show()
    }
    else{
        $('.more').hide()
    }
});



/////////////////// DropDown /////////////////////////




