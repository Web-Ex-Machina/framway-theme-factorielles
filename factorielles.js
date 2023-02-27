$(function(){
	$('.print').bind('click', function(){
        window.print();
    });

    $('.number-selector input').on('change', function(){
        $(this).closest('table').animate({'opacity': 0.5}, 100);
        $(this).closest('form').find('.button_update').trigger('click');
    });

    $('.ce_rsce_cta_mini .cta__toggler').on('click', function(e){
        $(this).next('.cta__content').slideToggle();
    });
    $('body').on('click','#tarteaucitronAllAllowed,#tarteaucitronAllDenied',function(){
        setTimeout(function(){
            tarteaucitron.userInterface.closePanel();
        },500)
    })

    if ($('.priceCard.isMain').length) {
        var $mainCard = $('.priceCard.isMain');
        $(window).resize(function(){
            if ($mainCard.prev('.priceCard').length) {
                $('.priceCard').removeClass('m-bottom');
                if ($mainCard.prev('.priceCard').offset().top != $mainCard.offset().top ) 
                    $('.priceCard').addClass('m-bottom');
            }
        }).trigger('resize');
    }

    var $cta = $('#header .header__cta').clone()
    $cta.contents().filter(function() {
            return this.nodeType == 3; //Node.TEXT_NODE
    }).remove();
    $cta.find('.btn-icon').wrapAll('<div></div>');
    $('#header .headerFW__nav__panel>ul').first().append($cta)

    
	init();
});

function init(){
	if($('#customer_path').length != 0 ) {
        if($('body').hasClass('cart')) {
            $('#customer_path .item.cart').addClass('active').prevAll($("#customer_path .item")).addClass('prev');
        }
        else if($('body').hasClass('identification')) {
            $('#customer_path .item.identification').addClass('active').prevAll($("#customer_path .item")).addClass('prev');
        }
        else if($('body').hasClass('verification')) {
            $('#customer_path .item.verification').addClass('active').prevAll($("#customer_path .item")).addClass('prev');
        }
        else if($('body').hasClass('payment')) {
            $('#customer_path .item.payment').addClass('active').prevAll($("#customer_path .item")).addClass('prev');
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
