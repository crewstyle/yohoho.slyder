/*! *//*!
 * slyder.js v1.0.0 - "Sogeking no shima deeeeeee - One Piece"
 * ~~~~~~~~~~~~~~~~~~
 *
 * Example of use HTML:
 * @see README.md
 *
 * Example of use JS:
 * $('.slyder-container').slyder({
 *     back: '.s-back .s-link',
 *     current: 's-current',
 *     hidden: 's-hidden',
 *     item: '.s-item',
 *     link: 'h3 .s-link',
 *     wrapper: 'slyder-wrapper'
 * });
 *
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 2016 Achraf Chouk <achrafchouk@gmail.com>
 */

(function ($){
    "use strict";
    var Slyder = function ($el, options){
        //vars
        var _slyder = this;
        _slyder.$el = $el;
        _slyder.options = $.extend({}, options);

        //initialize
        _slyder.initialize();
    };

    Slyder.prototype.options = {};
    Slyder.prototype.$el = null;
    Slyder.prototype.$items = null;
    Slyder.prototype.$wrap = null;
    Slyder.prototype.height = 0;
    Slyder.prototype.width = 0;

    Slyder.prototype.initialize = function (){
        var _slyder = this;

        //create wrapper
        _slyder.$el.wrap('<div class="'+_slyder.options.wrapper+'" />');
        _slyder.$wrap = _slyder.$el.closest('.'+_slyder.options.wrapper);

        //update vars
        _slyder.$items = _slyder.$el.find(_slyder.options.item);
        _slyder.height = _slyder.$el.height();
        _slyder.width = _slyder.$el.width();

        //iterate on items
        _slyder.iterate();
    };

    Slyder.prototype.iterate = function (){
        var _slyder = this;

        //iterate on items
        $.each(_slyder.$items, function (){
            var $curr = $(this),
                $link = $curr.find('> '+_slyder.options.link),
                $cont = $curr.find('> .'+_slyder.options.hidden),
                $back = $cont.find('> '+_slyder.options.back);

            //set parent height
            var $parent = $curr.closest('ul'),
                _pHeight = $parent.hasClass(_slyder.options.hidden) ? $parent.attr('data-h') : _slyder.height;

            //set height
            $cont.attr('data-h', $cont.height());

            //bind click event
            $link.on('click', $.proxy(_slyder.getNext, _slyder));
            $back.on('click', $.proxy(_slyder.getBack, _slyder));
        });
    };

    Slyder.prototype.getNext = function (e){
        e.preventDefault();
        var _slyder = this;

        //vars
        var $self = $(e.target || e.currentTarget),
            $curr = $self.closest(_slyder.options.item),
            $cont = $curr.find('> .'+_slyder.options.hidden);

        //set height
        var _height = $cont.attr('data-h');

        //update styles
        $curr.addClass(_slyder.options.current);
        _slyder.$el.css({
            height: _height+'px',
            left: '-='+_slyder.width
        });
    };

    Slyder.prototype.getBack = function (e){
        e.preventDefault();
        var _slyder = this;

        //vars
        var $self = $(e.target || e.currentTarget),
            $curr = $self.closest(_slyder.options.item),
            $parent = $curr.closest('ul');

        //set parent height
        var _height = $parent.hasClass(_slyder.options.hidden) ? $parent.attr('data-h') : _slyder.height;

        //update styles
        $curr.removeClass(_slyder.options.current);
        _slyder.$el.css({
            height: _height+'px',
            left: '+='+_slyder.width
        });
    };

    var methods = {
        init: function (options){
            if (!this.length) {
                return false;
            }

            var settings = {
                back: '.s-back .s-link',
                current: 's-current',
                hidden: 's-hidden',
                item: '.s-item',
                link: 'h3 .s-link',
                wrapper: 'slyder-wrapper'
            };

            return this.each(function (){
                if (options) {
                    $.extend(settings, options);
                }

                new Slyder($(this), settings);
            });
        },
        update: function (){},
        destroy: function (){}
    };

    $.fn.slyder = function (method){
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.Slyder');
        }
    };
})(window.jQuery);
