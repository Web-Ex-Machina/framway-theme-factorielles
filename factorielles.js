require('jssocials');
require('jssocials/dist/jssocials.css');
require('jssocials/dist/jssocials-theme-flat.css');

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

    $(".share-container").each(function(k,el){
        let config = {
            shares: [
                {share: "email", },
                {share: "linkedin", logo: 'fab fa-linkedin'},
                {share: "whatsapp", logo: 'fab fa-whatsapp'},
                {share: "facebook", logo: 'fab fa-facebook'},
                {share: "twitter",  logo: 'fab fa-twitter'},
            ],
            showLabel : false
        };
        if (el.getAttribute('data-url')) config.url   = el.getAttribute('data-url');
        if (el.getAttribute('data-text')) config.text = el.getAttribute('data-text');
        $(el).jsSocials(config);
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

    // FORMATIONS - start
    $('.mod_iso_productfilter.isMulti').each(function(){
        if ($(this).find('.filters__section').length) {
            $(this).addClass('hasMulti');
        }
    });

    $('body').on('click', '.filters__pagination .arrow', function(e) {
        let direction = $(this).data('direction');
        let current = $(this).closest('.mod_iso_productfilter').find('.filters__section.active');
        $('.filters__section').removeClass('active');
        if (direction == "prev") 
            current.prev().addClass('active');
        else if (direction == "next") 
            current.next().addClass('active');
        
        current = $('.filters__section.active');
        $('.filters__pagination .arrow').removeClass('disabled');
        if (!current.prev().length)
            $('.filters__pagination .arrow[data-direction=prev]').addClass('disabled')
        if (!current.next().length)
            $('.filters__pagination .arrow[data-direction=next]').addClass('disabled')
    });

    if ($('.ce_rsce_quoteWnote .more').length) {
        $('.ce_rsce_quoteWnote .more').each(function(){
            let quote = $(this).parent().find('.quote');
            window.addEventListener("resize", function(){
                quote.removeClass('has-ellipsis');
                if (quote.get(0).scrollHeight > quote.get(0).clientHeight )
                    quote.addClass('has-ellipsis')
            });
        })
        window.dispatchEvent(new Event('resize'));
    }

    // FORMATIONS - end
    
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
