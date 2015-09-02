"use strict";

$(function () {

    $('#select-all')
        .on('click', function (e) {
            e.stopPropagation();
            var checked = $(this).is(':checked');

            $(this)
                .closest('table')
                .find(':checkbox')
                .not(this)
                .each(function() {
                    $(this).prop('checked', checked);
                })
        });

    var inputKeyupDelay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();
    $('#sc-search')
        .on('keyup', function (e) {
            var $input = $(this);
            inputKeyupDelay(function() {
                var value = $.trim($input.val());
                if (!value) {
                    return;
                }

                var $searchIndicator = $input.parent().find('.search-indicator');
                $searchIndicator.removeClass('hide');

                $.ajax({
                    url: '/searchSongs',
                    data: {
                        term: value
                    },
                    dataType: 'json',
                    success: function(result) {
                        $searchIndicator.addClass('hide');

                        console.log(result);
                    },
                    error: function(error) {
                        $searchIndicator.addClass('hide');
                        console.error(error);
                    }
                });
            }, 1000);
        });

});