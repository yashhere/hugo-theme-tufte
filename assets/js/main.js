function tocOnSide() {
    var $window = $(window);
    if ($window.width() >= 1400) { // Match this number with the min-width CSS rule for .hugotoc
        var $toc = $('#TableOfContents');
        if ($toc.length > 0) {
            function onScroll(){
                var currentScroll = $window.scrollTop();
                var h = $('.content h1, .content h2, .content h3, .content h4, .content h5, .content h6, .h-feed h2');
                var id = "";
                h.each(function (i, e) {
                    e = $(e);
                    if (e.offset().top - 10 <= currentScroll) {
                        id = e.attr('id');
                    }
                });
                var current = $toc.find('a.current');
                if (current.length == 1 && current.eq(0).attr('href') == '#' + id) return true;

                current.each(function (i, e) {
                    $(e).removeClass('current').siblings('ul').hide();
                });
                $toc.find('a[href="#' + id + '"]').parentsUntil('#TableOfContents').each(function (i, e) {
                    $(e).children('a').addClass('current').siblings('ul').show();
                });
            }
            $window.on('scroll', onScroll);
            $(document).ready(function() {
                $toc.find('a').parent('li').find('ul').hide();
                onScroll();
                document.getElementsByClassName('hugotoc')[0].style.display = '';
            });
        }
    }
};

tocOnSide();
// Minified Version:
//
// https://report-uri.com/home/hash/'sha256-pZ00Zr8WlRr5cX4fTjQhz3jgQLofrOruiMEK+Wf73Tg='
//
// (function(){var $window=$(window);if($window.width()>=1400){var $toc=$('#TableOfContents');if($toc.length>0){function onScroll(){var currentScroll=$window.scrollTop();var h=$('.content h1, .content h2, .content h3, .content h4, .content h5, .content h6, .h-feed h2');var id="";h.each(function(i,e){e=$(e);if(e.offset().top-10<=currentScroll){id=e.attr('id');}});var current=$toc.find('a.current');if(current.length==1&&current.eq(0).attr('href')=='#'+id)return true;current.each(function(i,e){$(e).removeClass('current').siblings('ul').hide();});$toc.find('a[href="#'+id+'"]').parentsUntil('#TableOfContents').each(function(i,e){$(e).children('a').addClass('current').siblings('ul').show();});}
// $window.on('scroll',onScroll);$(document).ready(function(){$toc.find('a').parent('li').find('ul').hide();onScroll();document.getElementsByClassName('hugotoc')[0].style.display='';});}}})();


// Above script is a slightly refactored version of the script from https://github.com/carsonip/hugo-theme-minos by Carson Ip.
// Permalink:
//     https://github.com/carsonip/hugo-theme-minos/blob/7459a3f0e1a282b68dce4d715f9a480130d6c366/layouts/partials/article.html#L44-L82
