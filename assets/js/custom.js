;(function($) {
    'use strict';

    $('.decode-href[href]').each(function(idx, obj) {
        var code = obj.href;
        if (code.startsWith('mailto:')) {
            var decoded = rot(code.substring(7));
            // normalize double mailto:
            if (decoded.startsWith('mailto:')) {
                decoded = decoded.substring(7);
            }
            obj.href = 'mailto:' + decoded;
        } else {
            obj.href = rot(code);
        }
    });

    $('.decode-content').each(function(idx, obj) {
        var code = obj.innerHTML;
        obj.innerHTML = rot(code);
    });

    $('.foldoutnewsmore').each(function(idx, obj) {
        $(obj).click(function() {
            $(this).parent().prev().children().css('display', 'list-item');
            $(this).parent().css('display', 'none');
        });
    });
})(jQuery);
