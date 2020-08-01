$(window)['on']('load', function() {
    $('.menu')['css']('display', 'block'), $('#preloader')['addClass']('preloader-hide')
}), $(document)['ready'](function() {
    'use strict';
    var _0x6a4fx1, _0x6a4fx2, _0x6a4fx3, _0x6a4fx4;

    function _0x6a4fx5() {
        var _0x6a4fx1 = [
                ['none', '', '', ''],
                ['red1', '#D8334A', '#BF263C', '#9d0f23'],
                ['red2', '#ED5565', '#DA4453', '#a71222'],
                ['orange', '#FC6E51', '#E9573F', '#ce3319'],
                ['yellow1', '#FFCE54', '#F6BB42', '#e6a00f'],
                ['yellow2', '#E8CE4D', '#E0C341', '#dbb50c'],
                ['green1', '#A0D468', '#8CC152', '#5ba30b'],
                ['green2', '#2ECC71', '#2ABA66', '#0da24b'],
                ['mint', '#48CFAD', '#37BC9B', '#0fa781'],
                ['teal', '#A0CECB', '#7DB1B1', '#158383'],
                ['aqua', '#4FC1E9', '#3BAFDA', '#0a8ab9'],
                ['blue1', '#4FC1E9', '#3BAFDA', '#0b769d'],
                ['blue2', '#5D9CEC', '#4A89DC', '#1a64c6'],
                ['magenta1', '#AC92EC', '#967ADC', '#704dc9'],
                ['magenta2', '#8067B7', '#6A50A7', '#4e3190'],
                ['pink1', '#EC87C0', '#D770AD', '#c73c8e'],
                ['pink2', '#fa6a8e', '#fb3365', '#d30e3f'],
                ['brown1', '#BAA286', '#AA8E69', '#896b43'],
                ['brown2', '#8E8271', '#7B7163', '#584934'],
                ['gray1', '#F5F7FA', '#E6E9ED', '#c2c5c9'],
                ['gray2', '#CCD1D9', '#AAB2BD', '#88919d'],
                ['dark1', '#656D78', '#434A54', '#242b34'],
                ['dark2', '#3C3B3D', '#323133', '#1c191f']
            ],
            _0x6a4fx2 = $('.menu'),
            _0x6a4fx3 = ($('body'), $('.nav-fixed'), $('#footer-bar')),
            _0x6a4fx4 = ($('.close-menu'), $('.header')),
            _0x6a4fx5 = ($('#page'), $('.page-content'), $('.header, .page-content, #footer-bar'));

        function _0x6a4fx6(_0x6a4fx1, _0x6a4fx2, _0x6a4fx3) {
            if (_0x6a4fx3) {
                var _0x6a4fx4 = new Date;
                _0x6a4fx4['setTime'](_0x6a4fx4['getTime']() + 48 * _0x6a4fx3 * 60 * 3600 * 1e3);
                var _0x6a4fx5 = '; expires=' + _0x6a4fx4['toGMTString']()
            } else {
                _0x6a4fx5 = ''
            };
            document['cookie'] = _0x6a4fx1 + '=' + _0x6a4fx2 + _0x6a4fx5 + '; path=/'
        }

        function _0x6a4fx7(_0x6a4fx1) {
            for (var _0x6a4fx2 = _0x6a4fx1 + '=', _0x6a4fx3 = document['cookie']['split'](';'), _0x6a4fx4 = 0; _0x6a4fx4 < _0x6a4fx3['length']; _0x6a4fx4++) {
                for (var _0x6a4fx5 = _0x6a4fx3[_0x6a4fx4];
                    ' ' == _0x6a4fx5['charAt'](0);) {
                    _0x6a4fx5 = _0x6a4fx5['substring'](1, _0x6a4fx5['length'])
                };
                if (0 == _0x6a4fx5['indexOf'](_0x6a4fx2)) {
                    return _0x6a4fx5['substring'](_0x6a4fx2['length'], _0x6a4fx5['length'])
                }
            };
            return null
        }

        function _0x6a4fx8(_0x6a4fx1) {
            _0x6a4fx6(_0x6a4fx1, '', -1)
        }

        function _0x6a4fx9() {
            $('body')['append']('<style id="transitions-remove">.btn, .header, #footer-bar, .menu-box, .menu-active, #page, .page-content{transition:all 0ms ease!important;}</style>'), setTimeout(function() {
                $('body')['find']('#transitions-remove')['remove']()
            }, 10)
        }

        function _0x6a4fxa() {
            var _0x6a4fx1 = $('[data-toggle-theme-switch], [data-toggle-theme], [data-toggle-theme-switch] input, [data-toggle-theme] input');

            function _0x6a4fx2() {
                $('body')['removeClass']('theme-light')['addClass']('theme-dark'), $('#dark-mode-detected')['removeClass']('disabled'), _0x6a4fx8('azures_light_mode'), _0x6a4fx6('azures_dark_mode', !0, 1)
            }

            function _0x6a4fx3() {
                $('body')['removeClass']('theme-dark')['addClass']('theme-light'), $('#dark-mode-detected')['removeClass']('disabled'), _0x6a4fx8('azures_dark_mode'), _0x6a4fx6('azures_light_mode', !0, 1)
            }

            function _0x6a4fx4() {
                const _0x6a4fx1 = window['matchMedia']('(prefers-color-scheme: dark)')['matches'],
                    _0x6a4fx4 = window['matchMedia']('(prefers-color-scheme: light)')['matches'];
                window['matchMedia']('(prefers-color-scheme: no-preference)')['matches'];
                window['matchMedia']('(prefers-color-scheme: dark)')['addListener']((_0x6a4fx1) => _0x6a4fx1['matches'] && _0x6a4fx2()), window['matchMedia']('(prefers-color-scheme: light)')['addListener']((_0x6a4fx1) => _0x6a4fx1['matches'] && _0x6a4fx3()), window['matchMedia']('(prefers-color-scheme: no-preference)')['addListener']((_0x6a4fx1) => _0x6a4fx1['matches'] && void($('#manual-mode-detected')['removeClass']('disabled'))), _0x6a4fx1 && _0x6a4fx2(), _0x6a4fx4 && _0x6a4fx3()
            }
            $('[data-toggle-theme], [data-toggle-theme-switch]')['off']()['on']('click', function() {
                return _0x6a4fx9(), $('body')['toggleClass']('theme-light theme-dark'), setTimeout(function() {
                    $('body')['hasClass']('detect-theme') && $('body')['removeClass']('detect-theme'), $('body')['hasClass']('theme-light') && (_0x6a4fx8('azures_dark_mode'), _0x6a4fx1['prop']('checked', !1), _0x6a4fx6('azures_light_mode', !0, 1)), $('body')['hasClass']('theme-dark') && (_0x6a4fx8('azures_light_mode'), _0x6a4fx1['prop']('checked', !0), _0x6a4fx6('azures_dark_mode', !0, 1))
                }, 150), !1
            }), _0x6a4fx7('azures_dark_mode') && (_0x6a4fx1['prop']('checked', !0), $('body')['removeClass']('theme-light')['addClass']('theme-dark')), _0x6a4fx7('azures_light_mode') && (_0x6a4fx1['prop']('checked', !1), $('body')['removeClass']('theme-dark')['addClass']('theme-light')), $('body')['hasClass']('detect-theme') && _0x6a4fx4(), $('.detect-dark-mode')['on']('click', function() {
                return $('body')['addClass']('detect-theme'), _0x6a4fx4(), !1
            }), $('.disable-auto-dark-mode')['on']('click', function() {
                return $('body')['removeClass']('detect-theme'), $(this)['remove'](), !1
            })
        }
        'scrollRestoration' in history && (history['scrollRestoration'] = 'manual'), $('a')['on']('click', function() {
            if ('#' === $(this)['attr']('href')) {
                return !1
            }
        }), $['fn']['showMenu'] = function() {
            $(this)['addClass']('menu-active'), $('#footer-bar')['addClass']('footer-menu-hidden'), setTimeout(function() {
                $('.menu-hider')['addClass']('menu-active')
            }, 250)
        }, $['fn']['hideMenu'] = function() {
            $(this)['removeClass']('menu-active'), $('#footer-bar')['removeClass']('footer-menu-hidden'), $('.menu-hider')['removeClass']('menu-active')
        }, _0x6a4fxa(), $('.footer-bar-2, .footer-bar-4, .footer-bar-5')['length'] && ($('.footer-bar-2 strong, .footer-bar-4 strong, .footer-bar-5 strong')['length'] || $('.footer-bar-2 .active-nav, .footer-bar-4 .active-nav, .footer-bar-5 .active-nav')['append']('<strong></strong>')), $('.back-button, [data-back-button]')['on']('click', function() {
            window['history']['go'](-1)
        });
        var _0x6a4fxb = $('.copyright-year, #copyright-year'),
            _0x6a4fxc = (new Date)['getFullYear']();

        function _0x6a4fxd() {
            $('.back-to-top')['off']()['on']('click', function(_0x6a4fx1) {
                return _0x6a4fx1['preventDefault'](), $('html, body')['animate']({
                    scrollTop: 0
                }, 350), !1
            })
        }
        _0x6a4fxb['html'](_0x6a4fxc), _0x6a4fxd();
        var _0x6a4fxe = $('.back-to-top, [data-back-to-top], .back-to-top-badge, .back-to-top-icon'),
            _0x6a4fxf = $('.back-to-top-badge, .back-to-top-icon');

        function _0x6a4fx10() {
            _0x6a4fxf['removeClass']('back-to-top-visible')
        }
        _0x6a4fxe['on']('click', function(_0x6a4fx1) {
            return _0x6a4fx1['preventDefault'](), $('html, body, .page-content')['animate']({
                scrollTop: 0
            }, 350), !1
        });
        var _0x6a4fx11 = $('.scroll-ad');

        function _0x6a4fx12() {
            _0x6a4fx11['removeClass']('scroll-ad-visible')
        }
        $(window)['on']('scroll', function() {
            var _0x6a4fx1 = document['body']['scrollHeight'],
                _0x6a4fx2 = $(this)['scrollTop']() <= 150,
                _0x6a4fx3 = $(this)['scrollTop']() >= 0,
                _0x6a4fx4 = ($(this)['scrollTop'](), $(this)['scrollTop']() >= _0x6a4fx1 - ($(window)['height']() + 300));
            !0 === _0x6a4fx2 ? (_0x6a4fx10(), _0x6a4fx12(), $('.header-auto-show')['removeClass']('header-active')) : !0 === _0x6a4fx3 && (_0x6a4fxf['addClass']('back-to-top-visible'), _0x6a4fx11['addClass']('scroll-ad-visible'), $('.header-auto-show')['addClass']('header-active')), 1 == _0x6a4fx4 && (_0x6a4fx10(), _0x6a4fx12())
        });
        var _0x6a4fx13, _0x6a4fx14 = $('.tab-controls');
        _0x6a4fx14['length'] && (_0x6a4fx13 = $('.tab-controls a'), _0x6a4fx14['each'](function() {
            var _0x6a4fx1 = $(this)['parent']()['find']('.tab-controls')['data']('tab-items'),
                _0x6a4fx2 = ($(this)['width'](), $(this)['find']('a[data-tab-active]')),
                _0x6a4fx3 = $('#' + _0x6a4fx2['data']('tab')),
                _0x6a4fx4 = $(this)['data']('tab-active');
            $(this)['find']('a[data-tab]')['css']('width', 100 / _0x6a4fx1 + '%'), _0x6a4fx2['addClass'](_0x6a4fx4), _0x6a4fx2['addClass']('color-white'), _0x6a4fx3['slideDown'](0)
        }), _0x6a4fx13['on']('click', function() {
            var _0x6a4fx1 = $(this)['data']('tab'),
                _0x6a4fx2 = $('#' + _0x6a4fx1),
                _0x6a4fx3 = $(this)['parent']()['parent']()['find']('.tab-content'),
                _0x6a4fx4 = (_0x6a4fx3 = $(this)['parent']()['parent']()['parent']()['find']('.tab-content'), $(this)['data']('tab-order'), $(this)['parent']()['parent']()['find']('.tab-controls')['data']('tab-active'));
            $(this)['parent']()['find'](_0x6a4fx13)['removeClass'](_0x6a4fx4)['removeClass']('color-white'), $(this)['addClass'](_0x6a4fx4)['addClass']('color-white'), $(this)['parent']()['find']('a')['removeClass']('no-click'), $(this)['addClass']('no-click'), _0x6a4fx3['slideUp'](250), _0x6a4fx2['slideDown'](250)
        })), $('.text-size-increase')['click'](function() {
            $('.text-size-changer *')['css']('font-size', '+=1')
        }), $('.text-size-decrease')['click'](function() {
            $('.text-size-changer *')['css']('font-size', '-=1')
        }), $('.text-size-default')['click'](function() {
            $('.text-size-changer *')['css']('font-size', '')
        }), $('[data-search]')['on']('keyup', function() {
            var _0x6a4fx1 = $(this)['val']();
            '' != _0x6a4fx1 ? ($('.search-header a')['removeClass']('disabled'), $('.search-trending')['addClass']('disabled'), $('.search-results')['removeClass']('disabled-search-list'), $('[data-filter-item]')['addClass']('disabled-search-item'), $('[data-filter-item][data-filter-name*="' + _0x6a4fx1['toLowerCase']() + '"]')['removeClass']('disabled-search-item')) : ($('.search-header a')['removeClass']('disabled'), $('.search-trending')['removeClass']('disabled'), $('.search-results')['addClass']('disabled-search-list'), $('[data-filter-item]')['removeClass']('disabled-search-item'));
            var _0x6a4fx2 = $('.search-no-results');
            $('.search-results')['find']('.search-result-list.disabled-search-item')['length'] ? _0x6a4fx2['removeClass']('disabled') : _0x6a4fx2['addClass']('disabled')
        }), $('.search-trending a')['on']('click', function() {
            jQuery.Event('keydown')['which'] = 32, $('.search-trending')['addClass']('disabled');
            var _0x6a4fx1 = $(this)['find']('span')['text']()['toLowerCase']();
            return $('.search-header a')['removeClass']('disabled'), $('.search-header input')['val'](_0x6a4fx1), $('.search-results')['removeClass']('disabled-search-list'), $('[data-filter-item]')['addClass']('disabled-search-item'), $('[data-filter-item][data-filter-name*="' + _0x6a4fx1['toLowerCase']() + '"]')['removeClass']('disabled-search-item'), $('.menu-search-trending')['addClass']('disabled-search-item'), !1
        }), $('.search-header a')['on']('click', function() {
            return $('.search-trending')['removeClass']('disabled'), $('.menu-search-trending')['removeClass']('disabled-search-item'), $('.search-results')['addClass']('disabled-search-list'), $('.search-header input')['val'](''), $(this)['addClass']('disabled'), !1
        }), setTimeout(function() {
            $('.user-slider')['owlCarousel']({
                loop: !1,
                margin: 20,
                nav: !1,
                lazyLoad: !0,
                items: 1,
                autoplay: !1,
                dots: !1,
                autoplayTimeout: 4e3
            }), $('.user-list-slider')['owlCarousel']({
                loop: !0,
                margin: 20,
                nav: !1,
                stagePadding: 30,
                lazyLoad: !0,
                items: 4,
                autoplay: !1,
                dots: !1,
                autoplayTimeout: 4e3
            }), $('.single-slider')['owlCarousel']({
                loop: !0,
                margin: 20,
                nav: !1,
                lazyLoad: !0,
                items: 1,
                autoplay: !0,
                autoplayTimeout: 4e3
            }), $('.single-slider-boxed')['owlCarousel']({
                loop: !0,
                stagePadding: 30,
                margin: 20,
                nav: !1,
                lazyLoad: !0,
                items: 1,
                autoplay: !0,
                autoplayTimeout: 4e3
            }), $('.cover-slider')['owlCarousel']({
                loop: !0,
                margin: 0,
                nav: !1,
                lazyLoad: !0,
                items: 1,
                autoplay: !0,
                autoplayTimeout: 6e3
            }), $('.double-slider')['owlCarousel']({
                loop: !0,
                margin: 20,
                stagePadding: 20,
                nav: !1,
                lazyLoad: !1,
                items: 2,
                autoplay: !1,
                autoplayTimeout: 4e3
            }), $('.task-slider')['owlCarousel']({
                loop: !0,
                margin: 20,
                nav: !1,
                stagePadding: 50,
                lazyLoad: !0,
                items: 2,
                autoplay: !1,
                autoplayTimeout: 4e3
            }), $('.next-slide, .next-slide-arrow, .next-slide-text, .cover-next')['on']('click', function() {
                $(this)['parent']()['find']('.owl-carousel')['trigger']('next.owl.carousel')
            }), $('.prev-slide, .prev-slide-arrow, .prev-slide-text, .cover-prev')['on']('click', function() {
                $(this)['parent']()['find']('.owl-carousel')['trigger']('prev.owl.carousel')
            }), $('.next-slide-user')['on']('click', function() {
                $(this)['closest']('.owl-carousel')['trigger']('next.owl.carousel')
            }), $('.prev-slide-user')['on']('click', function() {
                $(this)['closest']('.owl-carousel')['trigger']('prev.owl.carousel')
            })
        }, 10), setTimeout(function() {
            $('.owl-prev, .owl-next')['addClass']('bg-highlight')
        });
        var _0x6a4fx15 = {
            Android: function() {
                return navigator['userAgent']['match'](/Android/i)
            },
            iOS: function() {
                return navigator['userAgent']['match'](/iPhone|iPad|iPod/i)
            },
            Windows: function() {
                return navigator['userAgent']['match'](/IEMobile/i)
            },
            any: function() {
                return _0x6a4fx15.Android() || _0x6a4fx15['iOS']() || _0x6a4fx15.Windows()
            }
        };
        _0x6a4fx15['any']() || ($('body')['addClass']('is-not-ios'), $('.show-ios, .show-android')['addClass']('disabled'), $('.show-no-device')['removeClass']('disabled')), _0x6a4fx15.Android() && ($('body')['addClass']('is-not-ios'), $('head')['append']('<meta name="theme-color" content="#FFFFFF"> />'), $('.show-android')['removeClass']('disabled'), $('.show-ios, .show-no-device, .simulate-android, .simulate-iphones')['addClass']('disabled')), _0x6a4fx15['iOS']() && ($('body')['addClass']('is-ios'), $('.show-ios')['removeClass']('disabled'), $('.show-android, .show-no-device, .simulate-android, .simulate-iphones')['addClass']('disabled')), $('[data-toast]')['on']('click', function() {
            return $('.toast, .snackbar-toast, .notification')['toast']('hide'), $('#' + $(this)['data']('toast'))['toast']('show'), !1
        }), $('[data-dismiss]')['on']('click', function() {
            var _0x6a4fx1 = $(this)['data']('dismiss');
            $('#' + _0x6a4fx1)['toast']('hide')
        }), $(function() {
            $('[data-toggle="tooltip"]')['tooltip']()
        }), $('[data-toggle="collapse"]')['length'] && $('[data-toggle="collapse"]')['on']('click', function(_0x6a4fx1) {
            _0x6a4fx1['preventDefault']()
        }), $('.ios-input, .android-input, .classic-input')['on']('click', function() {
            var _0x6a4fx1 = $(this)['attr']('id'),
                _0x6a4fx2 = $('[data-switch=' + _0x6a4fx1 + ']');
            _0x6a4fx2['length'] && _0x6a4fx2['stop']()['animate']({
                height: 'toggle'
            }, 250)
        }), $('[data-activate]')['on']('click', function() {
            var _0x6a4fx1 = $(this)['data']('activate');
            $('#' + _0x6a4fx1)['trigger']('click')
        }), $('[data-trigger-switch]')['on']('click', function() {
            var _0x6a4fx1 = $(this)['data']('trigger-switch');
            $('#' + _0x6a4fx1)['prop']('checked') ? $('#' + _0x6a4fx1)['prop']('checked', !1) : $('#' + _0x6a4fx1)['prop']('checked', !0)
        });
        var _0x6a4fx16, _0x6a4fx17, _0x6a4fx18, _0x6a4fx19, _0x6a4fx1a, _0x6a4fx1b, _0x6a4fx1c = $('.business-hours');
        if (_0x6a4fx1c['length'] && function() {
                if (_0x6a4fx1c['length']) {
                    var _0x6a4fx1 = new Date(Date['now']()),
                        _0x6a4fx2 = 'day-' + (new Date)['toLocaleDateString']('en', {
                            weekday: 'long'
                        })['toLowerCase'](),
                        _0x6a4fx3 = (_0x6a4fx1['getHours'](), _0x6a4fx1['getMinutes'](), $('.' + _0x6a4fx2)),
                        _0x6a4fx4 = _0x6a4fx1c['data']('closed-message').toString(),
                        _0x6a4fx5 = _0x6a4fx1c['data']('closed-message-under').toString(),
                        _0x6a4fx6 = _0x6a4fx1c['data']('opened-message').toString(),
                        _0x6a4fx7 = _0x6a4fx1c['data']('opened-message-under').toString();
                    $('[data-monday]')['data']('open'), $('[data-monday]')['data']('close'), $('.business-hours')['openingTimes']({
                        openingTimes: {
                            Monday: ['08:00', '17:00'],
                            Tuesday: ['08:00', '17:30'],
                            Wednesday: ['08:00', '17:00'],
                            Thursday: ['08:00', '17:00'],
                            Friday: ['09:00', '18:55'],
                            Saturday: ['09:00', '12:00']
                        },
                        openClass: 'bg-green1-dark is-business-opened',
                        closedClass: 'bg-red2-dark is-business-closed'
                    }), _0x6a4fx1c['hasClass']('is-business-opened') ? ($('.show-business-opened')['removeClass']('disabled'), $('.show-business-closed')['addClass']('disabled'), _0x6a4fx1c['find']('h1')['html'](_0x6a4fx6), _0x6a4fx1c['find']('p')['html'](_0x6a4fx7), _0x6a4fx1c['find']('#business-hours-mail')['remove'](), _0x6a4fx3['addClass']('bg-green1-dark')) : ($('.show-business-opened')['addClass']('disabled'), $('.show-business-closed')['removeClass']('disabled'), _0x6a4fx1c['find']('h1')['html'](_0x6a4fx4), _0x6a4fx1c['find']('p')['html'](_0x6a4fx5), _0x6a4fx1c['find']('#business-hours-call')['remove'](), _0x6a4fx3['addClass']('bg-red2-dark')), _0x6a4fx3['find']('p')['addClass']('color-white')
                }
            }(), function(_0x6a4fx1, _0x6a4fx2, _0x6a4fx3) {
                if (_0x6a4fx3 in _0x6a4fx2 && _0x6a4fx2[_0x6a4fx3]) {
                    var _0x6a4fx4, _0x6a4fx5 = _0x6a4fx1['location'],
                        _0x6a4fx6 = /^(a|html)$/i;
                    _0x6a4fx1['addEventListener']('click', function(_0x6a4fx1) {
                        for (_0x6a4fx4 = _0x6a4fx1['target']; !_0x6a4fx6['test'](_0x6a4fx4['nodeName']);) {
                            _0x6a4fx4 = _0x6a4fx4['parentNode']
                        };
                        'href' in _0x6a4fx4 && (_0x6a4fx4['href']['indexOf']('http') || ~_0x6a4fx4['href']['indexOf'](_0x6a4fx5['host'])) && (_0x6a4fx1['preventDefault'](), _0x6a4fx5['href'] = _0x6a4fx4['href'])
                    }, !1), $('.add-to-home')['addClass']('disabled'), $('body')['addClass']('is-on-homescreen')
                }
            }(document, window['navigator'], 'standalone'), $('.simulate-android-badge')['on']('click', function() {
                $('.add-to-home')['removeClass']('add-to-home-ios')['addClass']('add-to-home-visible add-to-home-android')
            }), $('.simulate-iphone-badge')['on']('click', function() {
                $('.add-to-home')['removeClass']('add-to-home-android')['addClass']('add-to-home-visible add-to-home-ios')
            }), $('.add-to-home')['on']('click', function() {
                $('.add-to-home')['removeClass']('add-to-home-visible')
            }), $('.simulate-android-banner')['on']('click', function() {
                $('#menu-install-pwa-android, .menu-hider')['addClass']('menu-active')
            }), $('.simulate-ios-banner')['on']('click', function() {
                $('#menu-install-pwa-ios, .menu-hider')['addClass']('menu-active')
            }), $['card_extender'] = function() {
                if ($('.is-on-homescreen')['length']) {
                    var _0x6a4fx1 = screen['height'];
                    $('.page-content, #page')['css']('min-height', _0x6a4fx1)
                };
                if (!$('.is-on-homescreen')['length']) {
                    _0x6a4fx1 = window['innerHeight'];
                    $('.page-content, #page')['css']('min-height', _0x6a4fx1)
                };
                $('[data-card-height]')['each'](function() {
                    var _0x6a4fx2 = $(this)['data']('card-height'),
                        _0x6a4fx5 = $('.header')['height'](),
                        _0x6a4fx6 = $('#footer-bar')['height']();
                    $(this)['css']('height', _0x6a4fx2), 'cover' == _0x6a4fx2 && (_0x6a4fx4['length'] && _0x6a4fx3['length'] ? ($(this)['css']('height', _0x6a4fx1 - _0x6a4fx5 - _0x6a4fx6), $('.map-full, .map-full iframe')['css']('height', _0x6a4fx1 - _0x6a4fx5 - _0x6a4fx6 + 14)) : ($(this)['css']('height', _0x6a4fx1), $('.map-full, .map-full iframe')['css']('height', _0x6a4fx1))), 'cover-card' == _0x6a4fx2 && ($(this)['css']('height', _0x6a4fx1 - 180), $('.map-full, .map-full iframe')['css']('height', _0x6a4fx1 - 180))
                })
            }, $['card_extender'](), $(window)['resize'](function() {
                $['card_extender']()
            }), $('.show-map, .hide-map')['on']('click', function() {
                $('.map-full .caption')['toggleClass']('deactivate-map'), $('.map-but-1, .map-but-2')['toggleClass']('deactivate-map'), $('.map-full .hide-map')['toggleClass']('activate-map')
            }), $('.card-scale')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                $(this)['find']('img')['toggleClass']('card-scale-image')
            }), $('.card-grayscale')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                $(this)['find']('img')['toggleClass']('card-grayscale-image')
            }), $('.card-rotate')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                $(this)['find']('img')['toggleClass']('card-rotate-image')
            }), $('.card-blur')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                $(this)['find']('img')['toggleClass']('card-blur-image')
            }), $('.card-hide')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                $(this)['find']('.card-center, .card-bottom, .card-top, .card-overlay')['toggleClass']('card-hide-image')
            }), $('#reading-progress-text')['each'](function(_0x6a4fx1) {
                var _0x6a4fx2 = $(this)['text']()['split'](' ')['length'],
                    _0x6a4fx3 = Math['floor'](_0x6a4fx2 / 250),
                    _0x6a4fx4 = _0x6a4fx2 % 60;
                $('.reading-progress-words')['append'](_0x6a4fx2), $('.reading-progress-time')['append'](_0x6a4fx3 + ':' + _0x6a4fx4)
            }), $('[data-auto-show-ad]')['length']) {
            var _0x6a4fx1d = $('[data-auto-show-ad]')['data']('auto-show-ad');
            setTimeout(function() {
                $('[data-auto-show-ad]')['trigger']('click')
            }, 1e3 * _0x6a4fx1d)
        };
        $('[data-timed-ad]')['on']('click', function() {
            var _0x6a4fx1 = $(this)['data']('timed-ad'),
                _0x6a4fx2 = $('#' + $(this)['data']('menu'));
            $('.menu-hider')['addClass']('no-click'), _0x6a4fx2['find']('.ad-time-close')['addClass']('no-click'), _0x6a4fx2['find']('.ad-time-close i')['addClass']('disabled'), _0x6a4fx2['find']('.ad-time-close span')['removeClass']('disabled');
            var _0x6a4fx3 = setInterval(function() {
                if (--_0x6a4fx1 <= 0) {
                    return $('.menu-hider')['removeClass']('no-click'), _0x6a4fx2['find']('.ad-time-close')['removeClass']('no-click'), _0x6a4fx2['find']('.ad-time-close i')['removeClass']('disabled'), _0x6a4fx2['find']('.ad-time-close span')['addClass']('disabled'), void(clearInterval(_0x6a4fx3))
                };
                _0x6a4fx2['find']('.ad-time-close span')['html'](_0x6a4fx1)
            }, 1e3)
        }), _0x6a4fx16 = '01/19/2030 03:14:07 AM', _0x6a4fx16 = (_0x6a4fx16 = new Date(_0x6a4fx16))['getTime'](), isNaN(_0x6a4fx16) || setInterval(function() {
            var _0x6a4fx1 = new Date,
                _0x6a4fx1 = new Date(_0x6a4fx1['getUTCFullYear'](), _0x6a4fx1['getUTCMonth'](), _0x6a4fx1['getUTCDate'](), _0x6a4fx1['getUTCHours'](), _0x6a4fx1['getUTCMinutes'](), _0x6a4fx1['getUTCSeconds']()),
                _0x6a4fx2 = parseInt((_0x6a4fx16 - _0x6a4fx1['getTime']()) / 1e3);
            _0x6a4fx2 >= 0 && (_0x6a4fx17 = parseInt(_0x6a4fx2 / 31536e3), _0x6a4fx2 %= 31536e3, _0x6a4fx18 = parseInt(_0x6a4fx2 / 86400), _0x6a4fx2 %= 86400, _0x6a4fx19 = parseInt(_0x6a4fx2 / 3600), _0x6a4fx2 %= 3600, _0x6a4fx1a = parseInt(_0x6a4fx2 / 60), _0x6a4fx2 %= 60, _0x6a4fx1b = parseInt(_0x6a4fx2), $('.countdown')['length'] && ($('.countdown #years')[0]['innerHTML'] = parseInt(_0x6a4fx17, 10), $('.countdown #days')[0]['innerHTML'] = parseInt(_0x6a4fx18, 10), $('.countdown #hours')[0]['innerHTML'] = ('0' + _0x6a4fx19)['slice'](-2), $('.countdown #minutes')[0]['innerHTML'] = ('0' + _0x6a4fx1a)['slice'](-2), $('.countdown #seconds')[0]['innerHTML'] = ('0' + _0x6a4fx1b)['slice'](-2)))
        }, 1), $('.accordion-btn')['on']('click', function() {
            $(this)['addClass']('no-click'), $('.accordion-icon')['removeClass']('rotate-180'), 'true' == $(this)['attr']('aria-expanded') ? $(this)['parent']()['find']('.accordion-icon')['removeClass']('rotate-180') : $(this)['parent']()['find']('.accordion-icon')['addClass']('rotate-180'), setTimeout(function() {
                $('.accordion-btn')['removeClass']('no-click')
            }, 250)
        }), $('.caption-scale')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
            $(this)['find']('img')['toggleClass']('caption-scale-image')
        }), $('.caption-grayscale')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
            $(this)['find']('img')['toggleClass']('caption-grayscale-image')
        }), $('.caption-rotate')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
            $(this)['find']('img')['toggleClass']('caption-rotate-image')
        }), $('.caption-blur')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
            $(this)['find']('img')['toggleClass']('caption-blur-image')
        }), $('.caption-hide')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
            $(this)['find']('.caption-center, .caption-bottom, .caption-top, .caption-overlay')['toggleClass']('caption-hide-image')
        }), $('.upload-file')['length'] && $('.upload-file')['change'](function(_0x6a4fx1) {
            ! function(_0x6a4fx1) {
                if (_0x6a4fx1['files'] && _0x6a4fx1['files'][0]) {
                    var _0x6a4fx2 = new FileReader;
                    _0x6a4fx2['onload'] = function(_0x6a4fx1) {
                        $('.file-data img')['attr']('src', _0x6a4fx1['target']['result']), $('.file-data img')['attr']('class', 'img-fluid rounded-xs mt-4')
                    }, _0x6a4fx2['readAsDataURL'](_0x6a4fx1['files'][0])
                }
            }(this), _0x6a4fx1['target']['files'][0]['name'], $('.upload-file-data')['removeClass']('disabled'), $('.upload-file-name')['html'](_0x6a4fx1['target']['files'][0]['name']), $('.upload-file-modified')['html'](_0x6a4fx1['target']['files'][0]['lastModifiedDate']), $('.upload-file-size')['html'](_0x6a4fx1['target']['files'][0]['size'] / 1e3 + 'kb'), $('.upload-file-type')['html'](_0x6a4fx1['target']['files'][0]['type'])
        }), $('.todo-list')['length'] && ($('.todo-list a')['each'](function() {
            $(this)['find']('.todo-icon')['hasClass']('far fa-square') ? $(this)['removeClass']('opacity-70') : $(this)['addClass']('opacity-70')
        }), $('.todo-list a')['on']('click', function() {
            $(this)['find']('.todo-icon')['toggleClass']('far fa-square fa fa-check-square color-green1-dark'), $(this)['find']('.todo-icon')['hasClass']('far fa-square') ? $(this)['removeClass']('opacity-70') : $(this)['addClass']('opacity-70')
        })), $('.check-age')['length'] && (console['log']('active'), $('.check-age')['on']('click', function() {
            var _0x6a4fx1 = $('#date-birth-day')['val'](),
                _0x6a4fx2 = $('#date-birth-month')['val'](),
                _0x6a4fx3 = $('#date-birth-year')['val'](),
                _0x6a4fx4 = new Date;
            _0x6a4fx4['setFullYear'](_0x6a4fx3, _0x6a4fx2 - 1, _0x6a4fx1);
            var _0x6a4fx5 = new Date,
                _0x6a4fx6 = new Date;
            return _0x6a4fx6['setFullYear'](_0x6a4fx4['getFullYear']() + 18, _0x6a4fx2 - 1, _0x6a4fx1), _0x6a4fx5 - _0x6a4fx6 > 0 ? (console['log']('above 18'), $('#menu-age')['removeClass']('menu-active'), $('#menu-age-okay')['addClass']('menu-active')) : ($('#menu-age')['removeClass']('menu-active'), $('#menu-age-fail')['addClass']('menu-active')), !0
        })), $('.get-location')['length'] && ('geolocation' in navigator ? $('.location-support')['html']('Your browser and device <strong class="color-green2-dark">support</strong> Geolocation.') : $('.location-support')['html']('Your browser and device <strong class="color-red2-dark">support</strong> Geolocation.'), $('.get-location')['on']('click', function() {
            $(this)['addClass']('disabled'),
                function() {
                    const _0x6a4fx1 = document['querySelector']('.location-coordinates');
                    navigator['geolocation'] ? (_0x6a4fx1['textContent'] = 'Locating', navigator['geolocation']['getCurrentPosition'](function(_0x6a4fx2) {
                        const _0x6a4fx3 = _0x6a4fx2['coords']['latitude'],
                            _0x6a4fx4 = _0x6a4fx2['coords']['longitude'];
                        _0x6a4fx1['innerHTML'] = '<strong>Longitude:</strong> ' + _0x6a4fx4 + '<br><strong>Latitude:</strong> ' + _0x6a4fx3;
                        var _0x6a4fx5 = 'http://maps.google.com/maps?q=',
                            _0x6a4fx6 = _0x6a4fx3 + ',',
                            _0x6a4fx7 = _0x6a4fx5 + _0x6a4fx6 + _0x6a4fx4 + '&z=18&t=h&output=embed',
                            _0x6a4fx8 = _0x6a4fx5 + _0x6a4fx6 + _0x6a4fx4 + '&z=18&t=h';
                        $('.location-map')['after']('<iframe class="location-map" src="' + _0x6a4fx7 + '"></iframe> <div class="clearfix"></div>'), $('.location-map')['parent']()['after'](' <a href=' + _0x6a4fx8 + ' class="btn btn-full btn-m bg-red2-dark rounded-xs text-uppercase font-900 mb-n1 mt-3">View on Google Maps</a>')
                    }, function() {
                        _0x6a4fx1['textContent'] = 'Unable to retrieve your location'
                    })) : _0x6a4fx1['textContent'] = 'Geolocation is not supported by your browser'
                }()
        }));
        var _0x6a4fx1e, _0x6a4fx1f, _0x6a4fx20 = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i,
            _0x6a4fx21 = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/,
            _0x6a4fx22 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/,
            _0x6a4fx23 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/,
            _0x6a4fx24 = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/,
            _0x6a4fx25 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/,
            _0x6a4fx26 = '<i class=\'fa fa-check color-green1-dark\'></i>',
            _0x6a4fx27 = '<i class=\'fa fa-exclamation-triangle color-red2-light\'></i>';

        function _0x6a4fx28() {
            $('.offline-message')['addClass']('offline-message-active'), $('.online-message')['removeClass']('online-message-active'), setTimeout(function() {
                $('.offline-message')['removeClass']('offline-message-active')
            }, 2e3)
        }

        function _0x6a4fx29() {
            $('.online-message')['addClass']('online-message-active'), $('.offline-message')['removeClass']('offline-message-active'), setTimeout(function() {
                $('.online-message')['removeClass']('online-message-active')
            }, 2e3)
        }

        function _0x6a4fx2a() {
            var _0x6a4fx1 = window['location']['href'],
                _0x6a4fx2 = document['title'];
            $('.shareToFacebook')['prop']('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _0x6a4fx1), $('.shareToLinkedIn')['prop']('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + _0x6a4fx1 + '&title=' + _0x6a4fx2 + '&summary=&source='), $('.shareToTwitter')['prop']('href', 'https://twitter.com/home?status=' + _0x6a4fx1), $('.shareToPinterest')['prop']('href', 'https://pinterest.com/pin/create/button/?url=' + _0x6a4fx1), $('.shareToWhatsApp')['prop']('href', 'whatsapp://send?text=' + _0x6a4fx1), $('.shareToMail')['prop']('href', 'mailto:?body=' + _0x6a4fx1), $('.shareToCopyLink')['on']('click', function(_0x6a4fx2) {
                $(this)['parent']()['find']('p')['html']('Link Copied'), $(this)['removeClass']('bg-blue2-dark')['addClass']('bg-green1-dark'), $(this)['find']('i')['attr']('class', ''), $(this)['find']('i')['attr']('class', 'fa fa-check font-22'), setTimeout(function() {
                    $('.shareToCopyLink')['parent']()['find']('p')['html']('Copy Link'), $('.shareToCopyLink')['removeClass']('bg-green1-dark')['addClass']('bg-blue2-dark'), $('.shareToCopyLink')['find']('i')['attr']('class', ''), $('.shareToCopyLink')['find']('i')['attr']('class', 'fa fa-link font-22')
                }, 1e3);
                var _0x6a4fx3 = $('<input>');
                return $('body')['append'](_0x6a4fx3), _0x6a4fx3['val'](_0x6a4fx1)['select'](), document['execCommand']('copy'), _0x6a4fx3['remove'](), !1
            })
        }
        $('.input-required input, .input-required select, .input-required textarea')['on']('focusin keyup', function() {
            var _0x6a4fx1 = $(this)['parent']()['find']('span')['text']();
            $(this)['val']() != _0x6a4fx1 && '' != $(this)['val']() && $(this)['parent']()['find']('span')['addClass']('input-style-1-active')['removeClass']('input-style-1-inactive'), '' === $(this)['val']() && $(this)['parent']()['find']('span')['removeClass']('input-style-1-inactive input-style-1-active')
        }), $('.input-required input, .input-required select, .input-required textarea')['on']('focusout', function() {
            $(this)['parent']()['find']('span')['text']();
            '' === $(this)['val']() && $(this)['parent']()['find']('span')['removeClass']('input-style-1-inactive input-style-1-active'), $(this)['parent']()['find']('span')['addClass']('input-style-1-inactive')
        }), $('.input-required select')['on']('focusout', function() {
            var _0x6a4fx1 = $(this)[0]['value'];
            'default' === _0x6a4fx1 && ($(this)['parent']()['find']('em')['html'](_0x6a4fx27), $(this)['parent']()['find']('span')['removeClass']('input-style-1-inactive input-style-1-active')), 'default' != _0x6a4fx1 && $(this)['parent']()['find']('em')['html'](_0x6a4fx26)
        }), $('.input-required input[type="email"]')['on']('focusout', function() {
            _0x6a4fx20['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0x6a4fx26) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0x6a4fx27)
        }), $('.input-required input[type="tel"]')['on']('focusout', function() {
            _0x6a4fx21['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0x6a4fx26) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0x6a4fx27)
        }), $('.input-required input[type="password"]')['on']('focusout', function() {
            _0x6a4fx23['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0x6a4fx26) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0x6a4fx27)
        }), $('.input-required input[type="url"]')['on']('focusout', function() {
            _0x6a4fx24['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0x6a4fx26) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0x6a4fx27)
        }), $('.input-required input[type="name"]')['on']('focusout', function() {
            _0x6a4fx22['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0x6a4fx26) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0x6a4fx27)
        }), $('.input-required textarea')['on']('focusout', function() {
            _0x6a4fx25['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0x6a4fx26) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0x6a4fx27)
        }), Date['prototype']['toDateInputValue'] = function() {
            var _0x6a4fx1 = new Date(this);
            return _0x6a4fx1['setMinutes'](this['getMinutes']() - this['getTimezoneOffset']()), _0x6a4fx1['toJSON']()['slice'](0, 10)
        }, $('input[type="date"]')['val']((new Date)['toDateInputValue']()), Date['prototype']['toDateInputValue'] = function() {
            var _0x6a4fx1 = new Date(this);
            return _0x6a4fx1['setMinutes'](this['getMinutes']() - this['getTimezoneOffset']()), _0x6a4fx1['toJSON']()['slice'](0, 10)
        }, $('input[type="date"]')['val']((new Date)['toDateInputValue']()), $('.offline-message')['length'] || ($('body')['append']('<p class="offline-message bg-red2-dark color-white center-text uppercase ultrabold">No internet connection detected</p> '), $('body')['append']('<p class="online-message bg-green1-dark color-white center-text uppercase ultrabold">You are back online</p>')), $('.simulate-offline')['on']('click', function() {
            _0x6a4fx28()
        }), $('.simulate-online')['on']('click', function() {
            _0x6a4fx29()
        }), window['addEventListener']('online', function(_0x6a4fx1) {
            navigator['onLine'], _0x6a4fx29(), console['log']('Connection: Online')
        }), window['addEventListener']('offline', function(_0x6a4fx1) {
            _0x6a4fx28(), console['log']('Connection: Offline')
        }), $('.generate-qr-result, .generate-qr-auto')['length'] && (_0x6a4fx1e = window['location']['href'], _0x6a4fx1f = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=', $('.generate-qr-auto')['attr']('src', _0x6a4fx1f + _0x6a4fx1e), $('.generate-qr-button')['on']('click', function() {
            if ($(this)['parent']()['find']('.fa')['hasClass']('fa-exclamation-triangle')) {
                console['log']('Invalid URL')
            } else {
                var _0x6a4fx1 = $('.generate-qr-input')['val']();
                '' == !_0x6a4fx1 && ($('.generate-qr-result')['empty'](), setTimeout(function() {
                    $('.generate-qr-result')['append']('<img class="mx-auto polaroid-effect shadow-l mt-4 delete-qr" width="200" src="' + _0x6a4fx1f + _0x6a4fx1 + '" alt="img"><p class="font-11 text-center mb-0">' + _0x6a4fx1 + '</p>')
                }, 30))
            }
        })), $('[data-vibrate]')['length'] && ($('[data-vibrate]')['on']('click', function() {
            var _0x6a4fx1 = $(this)['data']('vibrate');
            window['navigator']['vibrate'](_0x6a4fx1)
        }), $('.start-vibrating')['on']('click', function() {
            var _0x6a4fx1 = $('.vibrate-demo')['val']();
            window['navigator']['vibrate'](_0x6a4fx1)
        }), $('.stop-vibrating')['on']('click', function() {
            window['navigator']['vibrate'](0), $('.vibrate-demo')['val']('')
        })), _0x6a4fx2a();
        var _0x6a4fx2b = $('.preload-img');
        $(function() {
            _0x6a4fx2b['lazyload']({
                threshold: 500
            })
        }), $('[data-lightbox]')['addClass']('default-link'), lightbox['option']({
            alwaysShowNavOnTouchDevices: !0,
            resizeDuration: 200,
            wrapAround: !1
        }), $('#lightbox')['hammer']()['on']('swipe', function(_0x6a4fx1) {
            4 === _0x6a4fx1['gesture']['direction'] ? $('#lightbox a.lb-prev')['trigger']('click') : 2 === _0x6a4fx1['gesture']['direction'] && $('#lightbox a.lb-next')['trigger']('click')
        }), $('.gallery-filter')['length'] > 0 && ($('.gallery-filter')['filterizr'](), $('.gallery-filter-active')['addClass']('color-highlight')), $('.gallery-filter-controls li')['on']('click', function() {
            $('.gallery-filter-controls li')['removeClass']('gallery-filter-active color-highlight'), $(this)['addClass']('gallery-filter-active color-highlight')
        });
        var _0x6a4fx2c = $('.gallery-views'),
            _0x6a4fx2d = $('.gallery-view-controls a'),
            _0x6a4fx2e = $('.gallery-view-1-activate'),
            _0x6a4fx2f = $('.gallery-view-2-activate'),
            _0x6a4fx30 = $('.gallery-view-3-activate');
        _0x6a4fx2e['on']('click', function() {
            _0x6a4fx2d['removeClass']('color-highlight'), $(this)['addClass']('color-highlight'), _0x6a4fx2c['removeClass']()['addClass']('gallery-views gallery-view-1')
        }), _0x6a4fx2f['on']('click', function() {
            _0x6a4fx2d['removeClass']('color-highlight'), $(this)['addClass']('color-highlight'), _0x6a4fx2c['removeClass']()['addClass']('gallery-views gallery-view-2')
        }), _0x6a4fx30['on']('click', function() {
            _0x6a4fx2d['removeClass']('color-highlight'), $(this)['addClass']('color-highlight'), _0x6a4fx2c['removeClass']()['addClass']('gallery-views gallery-view-3')
        });
        var _0x6a4fx31 = $('[data-search]');
        _0x6a4fx31['length'] && _0x6a4fx31['on']('keyup', function() {
            var _0x6a4fx1 = $(this)['val']();
            $(this)['parent']()['parent']()['find']('[data-filter-item]'), '' != _0x6a4fx1 ? ($('.search-results')['removeClass']('disabled-search-list'), $('[data-filter-item]')['addClass']('disabled-search'), $('[data-filter-item][data-filter-name*="' + _0x6a4fx1['toLowerCase']() + '"]')['removeClass']('disabled-search')) : ($('.search-results')['addClass']('disabled-search-list'), $('[data-filter-item]')['removeClass']('disabled-search'))
        });
        var _0x6a4fx32, _0x6a4fx33, _0x6a4fx34, _0x6a4fx35, _0x6a4fx36, _0x6a4fx37, _0x6a4fx38, _0x6a4fx39 = 'false';
        if (jQuery(document)['ready'](function(_0x6a4fx1) {
                function _0x6a4fx2(_0x6a4fx2, _0x6a4fx3) {
                    _0x6a4fx1('.formValidationError')['hide'](), _0x6a4fx1('.fieldHasError')['removeClass']('fieldHasError'), _0x6a4fx1('#' + _0x6a4fx2 + ' .requiredField')['each'](function(_0x6a4fx3) {
                        if ('' == _0x6a4fx1(this)['val']() || _0x6a4fx1(this)['val']() == _0x6a4fx1(this)['attr']('data-dummy')) {
                            return _0x6a4fx1(this)['val'](_0x6a4fx1(this)['attr']('data-dummy')), _0x6a4fx1(this)['focus'](), _0x6a4fx1(this)['addClass']('fieldHasError'), _0x6a4fx1('#' + _0x6a4fx1(this)['attr']('id') + 'Error')['fadeIn'](300), !1
                        };
                        if (_0x6a4fx1(this)['hasClass']('requiredEmailField')) {
                            var _0x6a4fx4 = '#' + _0x6a4fx1(this)['attr']('id');
                            if (!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ ['test'](_0x6a4fx1(_0x6a4fx4)['val']())) {
                                return _0x6a4fx1(_0x6a4fx4)['focus'](), _0x6a4fx1(_0x6a4fx4)['addClass']('fieldHasError'), _0x6a4fx1(_0x6a4fx4 + 'Error2')['fadeIn'](300), !1
                            }
                        };
                        'false' == _0x6a4fx39 && _0x6a4fx3 == _0x6a4fx1('#' + _0x6a4fx2 + ' .requiredField')['length'] - 1 && function(_0x6a4fx2, _0x6a4fx3) {
                            _0x6a4fx39 = 'true';
                            var _0x6a4fx4 = _0x6a4fx1('#' + _0x6a4fx2)['serialize']();
                            _0x6a4fx1['post'](_0x6a4fx1('#' + _0x6a4fx2)['attr']('action'), _0x6a4fx4, function(_0x6a4fx3) {
                                _0x6a4fx1('#' + _0x6a4fx2)['addClass']('disabled'), $('.contact-form')['addClass']('disabled'), _0x6a4fx1('.formSuccessMessageWrap')['fadeIn'](500)
                            })
                        }(_0x6a4fx2)
                    })
                }
                _0x6a4fx1('.formSuccessMessageWrap')['hide'](0), _0x6a4fx1('.formValidationError')['fadeOut'](0), _0x6a4fx1('input[type="text"], input[type="password"], textarea')['focus'](function() {
                    _0x6a4fx1(this)['val']() == _0x6a4fx1(this)['attr']('data-dummy') && _0x6a4fx1(this)['val']('')
                }), _0x6a4fx1('input, textarea')['blur'](function() {
                    '' == _0x6a4fx1(this)['val']() && _0x6a4fx1(this)['val'](_0x6a4fx1(this)['attr']('data-dummy'))
                }), _0x6a4fx1('.contactSubmitButton')['on']('click', function() {
                    return _0x6a4fx2(_0x6a4fx1(this)['attr']('data-formId')), !1
                })
            }), $('.chart')['length'] > 0) {
            _0x6a4fx32 = 'scripts/charts.js', _0x6a4fx33 = function() {
                var _0x6a4fx1 = $('#wallet-chart'),
                    _0x6a4fx2 = $('#pie-chart'),
                    _0x6a4fx3 = $('#doughnut-chart'),
                    _0x6a4fx4 = $('#polar-chart'),
                    _0x6a4fx5 = $('#vertical-chart'),
                    _0x6a4fx6 = $('#horizontal-chart'),
                    _0x6a4fx7 = $('#line-chart');
                _0x6a4fx1['length'] && new Chart(_0x6a4fx1, {
                    type: 'bar',
                    data: {
                        labels: ['April', 'May', 'June', 'July'],
                        datasets: [{
                            label: 'Income',
                            backgroundColor: '#A0D468',
                            data: [200, 300, 450, 400]
                        }, {
                            label: 'Expenses',
                            backgroundColor: '#ED5565',
                            data: [190, 250, 350, 300]
                        }, {
                            label: 'Savings',
                            backgroundColor: '#5D9CEC',
                            data: [250, 150, 400, 250]
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {
                            display: !0,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            }
                        },
                        title: {
                            display: !1
                        }
                    }
                }), _0x6a4fx2['length'] && new Chart(_0x6a4fx2, {
                    type: 'pie',
                    data: {
                        labels: ['Facebook', 'Twitter', 'WhatsApp'],
                        datasets: [{
                            backgroundColor: ['#4A89DC', '#4FC1E9', '#A0D468'],
                            borderColor: 'rgba(255,255,255,0.5)',
                            data: [7e3, 3e3, 2e3]
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {
                            display: !0,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            }
                        },
                        tooltips: {
                            enabled: !0
                        },
                        animation: {
                            duration: 1500
                        }
                    }
                }), _0x6a4fx3['length'] && new Chart(_0x6a4fx3, {
                    type: 'doughnut',
                    data: {
                        labels: ['Apple', 'Samsung', 'Google'],
                        datasets: [{
                            backgroundColor: ['#CCD1D9', '#5D9CEC', '#FC6E51'],
                            borderColor: 'rgba(255,255,255,0.5)',
                            data: [5500, 4e3, 3e3]
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {
                            display: !0,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            }
                        },
                        tooltips: {
                            enabled: !0
                        },
                        animation: {
                            duration: 1500
                        },
                        layout: {
                            padding: {
                                bottom: 30
                            }
                        }
                    }
                }), _0x6a4fx4['length'] && new Chart(_0x6a4fx4, {
                    type: 'polarArea',
                    data: {
                        labels: ['Windows', 'Mac', 'Linux'],
                        datasets: [{
                            backgroundColor: ['#CCD1D9', '#5D9CEC', '#FC6E51'],
                            borderColor: 'rgba(255,255,255,0.5)',
                            data: [7e3, 1e4, 5e3]
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {
                            display: !0,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            }
                        },
                        tooltips: {
                            enabled: !0
                        },
                        animation: {
                            duration: 1500
                        },
                        layout: {
                            padding: {
                                bottom: 30
                            }
                        }
                    }
                }), _0x6a4fx5['length'] && new Chart(_0x6a4fx5, {
                    type: 'bar',
                    data: {
                        labels: ['2010', '2015', '2020', '2025'],
                        datasets: [{
                            label: 'iOS',
                            backgroundColor: '#A0D468',
                            data: [900, 1e3, 1200, 1400]
                        }, {
                            label: 'Android',
                            backgroundColor: '#4A89DC',
                            data: [890, 950, 1100, 1300]
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {
                            display: !0,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            }
                        },
                        title: {
                            display: !1
                        }
                    }
                }), _0x6a4fx6['length'] && new Chart(_0x6a4fx6, {
                    type: 'horizontalBar',
                    data: {
                        labels: ['2010', '2013', '2016', '2020'],
                        datasets: [{
                            label: 'Mobile',
                            backgroundColor: '#BF263C',
                            data: [330, 400, 580, 590]
                        }, {
                            label: 'Responsive',
                            backgroundColor: '#EC87C0',
                            data: [390, 450, 550, 570]
                        }]
                    },
                    options: {
                        legend: {
                            display: !0,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            }
                        },
                        title: {
                            display: !1
                        }
                    }
                }), _0x6a4fx7['length'] && new Chart(_0x6a4fx7, {
                    type: 'line',
                    data: {
                        labels: [2e3, 2005, 2010, 2015, 2010],
                        datasets: [{
                            data: [500, 400, 300, 200, 300],
                            label: 'Desktop Web',
                            borderColor: '#D8334A'
                        }, {
                            data: [0, 100, 300, 400, 500],
                            label: 'Mobile Web',
                            borderColor: '#4A89DC'
                        }]
                    },
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {
                            display: !0,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            }
                        },
                        title: {
                            display: !1
                        }
                    }
                })
            }, _0x6a4fx34 = document['body'], (_0x6a4fx35 = document['createElement']('script'))['src'] = _0x6a4fx32, _0x6a4fx35['onload'] = _0x6a4fx33, _0x6a4fx35['onreadystatechange'] = _0x6a4fx33, _0x6a4fx34['appendChild'](_0x6a4fx35)
        };

        function _0x6a4fx3a() {
            feather['replace']();
            var _0x6a4fx1 = $('.feather');
            _0x6a4fx1['length'] && _0x6a4fx1['each'](function() {
                $(this)['attr']('stroke-width', $(this)['data']('feather-line')), $(this)['attr']('width', $(this)['data']('feather-size')), $(this)['attr']('height', $(this)['data']('feather-size')), $(this)['css']('width', $(this)['data']('feather-size')), $(this)['css']('height', $(this)['data']('feather-size'))
            })
        }
        if (null == _0x6a4fx7('azure_accept_cookie') ? $('#menu-cookie-accept')['length'] && setTimeout(function() {
                $('#menu-cookie-accept, .menu-hider')['addClass']('menu-active'), $('.accept-cookie-policy')['on']('click', function() {
                    _0x6a4fx6('azure_accept_cookie', !0, 1)
                })
            }, 1500) : $('#menu-welcome-modal')['length'] && setTimeout(function() {
                $('#menu-welcome-modal, .menu-hider')['addClass']('menu-active')
            }, 1500), _0x6a4fx3a(), 'file:' === window['location']['protocol'] && $('a')['on']('mouseover', function() {
                console['log']('You are seeing these errors because your file is on your local computer. For real life simulations please use a Live Server or a Local Server such as AMPPS or WAMPP or simulate a  Live Preview using a Code Editor like http://brackets.io (it\'s 100% free) - PWA functions and AJAX Page Transitions will only work in these scenarios.')
            }), $('.page-title-large, .page-title-small, .menu-header a')['length'] && (_0x6a4fx37 = (new Date)['getHours'](), _0x6a4fx38 = $('.greeting-text')['data']('username'), _0x6a4fx37 >= 0 && _0x6a4fx37 < 12 ? _0x6a4fx36 = 'Good morning' : _0x6a4fx37 >= 12 && _0x6a4fx37 < 17 ? _0x6a4fx36 = 'Good afternoon' : _0x6a4fx37 >= 17 && _0x6a4fx37 < 24 && (_0x6a4fx36 = 'Good evening'), $('.greeting-text')['html'](_0x6a4fx36 + ',<br>' + _0x6a4fx38)), $('.visit-detection')['length']) {
            var _0x6a4fx3b = new Date,
                _0x6a4fx3c = _0x6a4fx3b['getFullYear']() + '/' + (_0x6a4fx3b['getMonth']() + 1) + '/' + _0x6a4fx3b['getDate'](),
                _0x6a4fx3d = _0x6a4fx3b['getHours']() + ':' + _0x6a4fx3b['getMinutes']() + ':' + _0x6a4fx3b['getSeconds']();
            if (_0x6a4fx7('azure_accept_cookie')) {
                var _0x6a4fx3e = _0x6a4fx7('azure_accept_cookie');
                $('.visit-before-time')['html'](_0x6a4fx3e), $('.never-visited')['hide'](), $('.before-visited')['show'](), _0x6a4fx6('azure_accept_cookie', '<br>Your last visit was ' + _0x6a4fx3c + ' at ' + _0x6a4fx3d, 1)
            } else {
                $('.never-visited')['show'](), $('.before-visited')['hide'](), _0x6a4fx6('azure_accept_cookie', '<br>Your last visit was ' + _0x6a4fx3c + ' at ' + _0x6a4fx3d, 1)
            }
        };
        var _0x6a4fx3f = $('.generated-styles'),
            _0x6a4fx40 = $('.generated-highlight');

        function _0x6a4fx41(_0x6a4fx1) {
            var _0x6a4fx2;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/ ['test'](_0x6a4fx1)) {
                return 3 == (_0x6a4fx2 = _0x6a4fx1['substring'](1)['split'](''))['length'] && (_0x6a4fx2 = [_0x6a4fx2[0], _0x6a4fx2[0], _0x6a4fx2[1], _0x6a4fx2[1], _0x6a4fx2[2], _0x6a4fx2[2]]), 'rgba(' + [(_0x6a4fx2 = '0x' + _0x6a4fx2['join']('')) >> 16 & 255, _0x6a4fx2 >> 8 & 255, 255 & _0x6a4fx2]['join'](',') + ',0.3)'
            }
        }

        function _0x6a4fx42() {
            $('[data-change-highlight]')['on']('click', function(_0x6a4fx2) {
                var _0x6a4fx3 = $(this)['data']('change-highlight');
                $('body')['attr']('data-highlight', _0x6a4fx3), $('.generated-highlight')['remove'](), _0x6a4fx6('azures-color-scheme', _0x6a4fx3, 1);
                var _0x6a4fx4 = _0x6a4fx1['map']((_0x6a4fx1) => _0x6a4fx1[0]);
                if (_0x6a4fx4['indexOf'](_0x6a4fx3) > -1) {
                    var _0x6a4fx5 = _0x6a4fx4['indexOf'](_0x6a4fx3);
                    if (void(0) !== $(this)['data']('color-light')) {
                        var _0x6a4fx7 = _0x6a4fx1[_0x6a4fx5][1]
                    } else {
                        _0x6a4fx7 = _0x6a4fx1[_0x6a4fx5][2]
                    };
                    var _0x6a4fx8 = '.color-highlight{color:' + _0x6a4fx7 + '!important}',
                        _0x6a4fx9 = '.bg-highlight{background-color:' + _0x6a4fx7 + '!important}',
                        _0x6a4fxa = '.footer-bar-1 .active-nav *, .footer-bar-3 .active-nav i{color:' + _0x6a4fx7 + '!important} .footer-bar-2 strong, .footer-bar-4 strong, .footer-bar-5 strong{background-color:' + _0x6a4fx7 + '!important; color:#FFF;}',
                        _0x6a4fxb = '.border-highlight{border-color:' + _0x6a4fx7 + '!important}';
                    $('body')['append']('<style class="generated-highlight"></style>'), $('.generated-highlight')['append'](_0x6a4fx8, _0x6a4fx9, _0x6a4fxa, _0x6a4fxb)
                };
                return !1
            })
        }! function() {
            if (null == (_0x6a4fx2 = _0x6a4fx7('azures-color-scheme'))) {
                var _0x6a4fx2 = $('body')['data']('highlight')
            };
            var _0x6a4fx3 = _0x6a4fx1['map']((_0x6a4fx1) => _0x6a4fx1[0]);
            if (_0x6a4fx3['indexOf'](_0x6a4fx2) > -1) {
                var _0x6a4fx4 = _0x6a4fx3['indexOf'](_0x6a4fx2),
                    _0x6a4fx5 = _0x6a4fx1[_0x6a4fx4][2],
                    _0x6a4fx6 = '.color-highlight{color:' + _0x6a4fx5 + '!important}',
                    _0x6a4fx8 = '.bg-highlight, .page-item.active a{background-color:' + _0x6a4fx5 + '!important}',
                    _0x6a4fx9 = '.footer-bar-1 .active-nav *, .footer-bar-3 .active-nav i{color:' + _0x6a4fx5 + '!important} .footer-bar-2 strong, .footer-bar-4 strong, .footer-bar-5 strong{background-color:' + _0x6a4fx5 + '!important; color:#FFF;}',
                    _0x6a4fxa = '.border-highlight{border-color:' + _0x6a4fx5 + '!important}',
                    _0x6a4fxb = '.header-tab-active{border-color:' + _0x6a4fx5 + '!important}';
                _0x6a4fx40['length'] || ($('body')['append']('<style class="generated-highlight"></style>'), $('body')['append']('<style class="generated-background"></style>'), $('.generated-highlight')['append'](_0x6a4fx6, _0x6a4fx8, _0x6a4fx9, _0x6a4fxa, _0x6a4fxb))
            }
        }(), _0x6a4fx42(), _0x6a4fx3f['length'] || ($('body')['append']('<style class="generated-styles"></style>'), $('.generated-styles')['append']('/*Generated using JS for lower CSS file Size, Easier Editing & Faster Loading*/'), _0x6a4fx1['forEach'](function(_0x6a4fx1) {
            $('.generated-styles')['append']('[data-feather-bg="' + _0x6a4fx1[0] + '-dark"]{ fill: ' + _0x6a4fx1[2] + '!important;} [data-feather-bg="' + _0x6a4fx1[0] + '-light"]{ fill: ' + _0x6a4fx1[1] + '!important;}')
        }), _0x6a4fx1['forEach'](function(_0x6a4fx1) {
            $('.generated-styles')['append']('[data-feather-bg="' + _0x6a4fx1[0] + '-fade-dark"]{ fill: ' + _0x6a4fx41(_0x6a4fx1[2]) + '!important;} [data-feather-bg="' + _0x6a4fx1[0] + '-fade-light"]{ fill: ' + _0x6a4fx41(_0x6a4fx1[1]) + '!important;}')
        }), _0x6a4fx1['forEach'](function(_0x6a4fx1) {
            $('.generated-styles')['append']('[data-feather-color="' + _0x6a4fx1[0] + '-dark"]{ stroke: ' + _0x6a4fx1[2] + '!important;} [data-feather-color="' + _0x6a4fx1[0] + '-light"]{ stroke: ' + _0x6a4fx1[1] + '!important;}')
        }), _0x6a4fx1['forEach'](function(_0x6a4fx1) {
            $('.generated-styles')['append']('[data-feather-color="' + _0x6a4fx1[0] + '-fade-dark"]{ stroke: ' + _0x6a4fx41(_0x6a4fx1[2]) + '!important;} [data-feather-color="' + _0x6a4fx1[0] + '-fade-light"]{ stroke: ' + _0x6a4fx41(_0x6a4fx1[1]) + '!important;}')
        }), _0x6a4fx1['forEach'](function(_0x6a4fx1) {
            $('.generated-styles')['append']('.bg-' + _0x6a4fx1[0] + '-light{ background-color: ' + _0x6a4fx1[1] + '!important; color:#FFFFFF!important;} .bg-' + _0x6a4fx1[0] + '-light i, .bg-' + _0x6a4fx1[0] + '-dark i{color:#FFFFFF;} .bg-' + _0x6a4fx1[0] + '-dark{  background-color: ' + _0x6a4fx1[2] + '!important; color:#FFFFFF!important;} .border-' + _0x6a4fx1[0] + '-light{ border-color:' + _0x6a4fx1[1] + '!important;} .border-' + _0x6a4fx1[0] + '-dark{  border-color:' + _0x6a4fx1[2] + '!important;} .color-' + _0x6a4fx1[0] + '-light{ color: ' + _0x6a4fx1[1] + '!important;} .color-' + _0x6a4fx1[0] + '-dark{  color: ' + _0x6a4fx1[2] + '!important;}')
        }), _0x6a4fx1['forEach'](function(_0x6a4fx1) {
            $('.generated-styles')['append']('.bg-fade-' + _0x6a4fx1[0] + '-light{ background-color: ' + _0x6a4fx41(_0x6a4fx1[1]) + '!important; color:#FFFFFF;} .bg-fade-' + _0x6a4fx1[0] + '-light i, .bg-' + _0x6a4fx1[0] + '-dark i{color:#FFFFFF;} .bg-fade-' + _0x6a4fx1[0] + '-dark{  background-color: ' + _0x6a4fx41(_0x6a4fx1[2]) + '!important; color:#FFFFFF;} .border-fade-' + _0x6a4fx1[0] + '-light{ border-color:' + _0x6a4fx41(_0x6a4fx1[1]) + '!important;} .border-fade-' + _0x6a4fx1[0] + '-dark{  border-color:' + _0x6a4fx41(_0x6a4fx1[2]) + '!important;} .color-fade-' + _0x6a4fx1[0] + '-light{ color: ' + _0x6a4fx41(_0x6a4fx1[1]) + '!important;} .color-fade-' + _0x6a4fx1[0] + '-dark{  color: ' + _0x6a4fx41(_0x6a4fx1[2]) + '!important;}')
        }), _0x6a4fx1['forEach'](function(_0x6a4fx1) {
            $('.generated-styles')['append']('.bg-gradient-' + _0x6a4fx1[0] + '{background-image: linear-gradient(to bottom, ' + _0x6a4fx1[1] + ' 0, ' + _0x6a4fx1[2] + ' 100%)}')
        }), [
            ['facebook', '#3b5998'],
            ['linkedin', '#0077B5'],
            ['twitter', '#4099ff'],
            ['google', '#d34836'],
            ['whatsapp', '#34AF23'],
            ['pinterest', '#C92228'],
            ['sms', '#27ae60'],
            ['mail', '#3498db'],
            ['dribbble', '#EA4C89'],
            ['phone', '#27ae60'],
            ['skype', '#12A5F4'],
            ['instagram', '#e1306c']
        ]['forEach'](function(_0x6a4fx1) {
            $('.generated-styles')['append']('.bg-' + _0x6a4fx1[0] + '{background-color:' + _0x6a4fx1[1] + '!important; color:#FFFFFF;} .color-' + _0x6a4fx1[0] + '{color:' + _0x6a4fx1[1] + '!important;}')
        }), _0x6a4fx1['forEach'](function(_0x6a4fx1) {
            $('.generated-styles')['append']('.body-' + _0x6a4fx1[0] + '{background-image: linear-gradient(to bottom, ' + _0x6a4fx1[1] + ' 0, ' + _0x6a4fx1[3] + ' 100%)}')
        })), $('[data-menu-load]')['each'](function() {
            var _0x6a4fx1 = $(this)['data']('menu-load');
            $(this)['load'](_0x6a4fx1)
        })['promise']()['done'](function() {
            setTimeout(function() {
                _0x6a4fxa(),
                    function() {
                        $('.menu-hider')['length'] || $('#page')['append']('<div class="menu-hider"><div>');
                        var _0x6a4fx1 = $('.menu-hider'),
                            _0x6a4fx3 = $('[data-menu]');
                        _0x6a4fx2['each'](function() {
                            var _0x6a4fx1 = $(this)['data']('menu-height'),
                                _0x6a4fx2 = $(this)['data']('menu-width');
                            $(this)['data']('menu-active'), $(this)['hasClass']('menu-box-right') && $(this)['css']('width', _0x6a4fx2), $(this)['hasClass']('menu-box-left') && $(this)['css']('width', _0x6a4fx2), $(this)['hasClass']('menu-box-bottom') && $(this)['css']('height', _0x6a4fx1), $(this)['hasClass']('menu-box-top') && $(this)['css']('height', _0x6a4fx1), $(this)['hasClass']('menu-box-modal') && $(this)['css']({
                                height: _0x6a4fx1,
                                width: _0x6a4fx2
                            })
                        }), _0x6a4fx3['on']('click', function() {
                            _0x6a4fx2['removeClass']('menu-active'), _0x6a4fx1['addClass']('menu-active');
                            var _0x6a4fx3 = $(this)['data']('menu'),
                                _0x6a4fx4 = $('#' + _0x6a4fx3),
                                _0x6a4fx6 = $('#' + _0x6a4fx3)['data']('menu-effect'),
                                _0x6a4fx7 = _0x6a4fx4['data']('menu-width'),
                                _0x6a4fx8 = _0x6a4fx4['data']('menu-height');
                            return $('body')['addClass']('modal-open'), _0x6a4fx4['hasClass']('menu-header-clear') && _0x6a4fx1['addClass']('menu-active-clear'), _0x6a4fx4['hasClass']('menu-box-bottom') && $('#footer-bar')['addClass']('footer-menu-hidden'), 'menu-parallax' === _0x6a4fx6 && (_0x6a4fx4['hasClass']('menu-box-bottom') && _0x6a4fx5['css']('transform', 'translateY(' + _0x6a4fx8 / 5 * -1 + 'px)'), _0x6a4fx4['hasClass']('menu-box-top') && _0x6a4fx5['css']('transform', 'translateY(' + _0x6a4fx8 / 5 + 'px)'), _0x6a4fx4['hasClass']('menu-box-left') && _0x6a4fx5['css']('transform', 'translateX(' + _0x6a4fx7 / 5 + 'px)'), _0x6a4fx4['hasClass']('menu-box-right') && _0x6a4fx5['css']('transform', 'translateX(' + _0x6a4fx7 / 5 * -1 + 'px)')), 'menu-push' === _0x6a4fx6 && (_0x6a4fx4['hasClass']('menu-box-bottom') && _0x6a4fx5['css']('transform', 'translateY(' + -1 * _0x6a4fx8 + 'px)'), _0x6a4fx4['hasClass']('menu-box-top') && _0x6a4fx5['css']('transform', 'translateY(' + _0x6a4fx8 + 'px)'), _0x6a4fx4['hasClass']('menu-box-left') && _0x6a4fx5['css']('transform', 'translateX(' + _0x6a4fx7 + 'px)'), _0x6a4fx4['hasClass']('menu-box-right') && _0x6a4fx5['css']('transform', 'translateX(' + -1 * _0x6a4fx7 + 'px)')), 'menu-push-full' === _0x6a4fx6 && (_0x6a4fx4['hasClass']('menu-box-left') && _0x6a4fx5['css']('transform', 'translateX(100%)'), _0x6a4fx4['hasClass']('menu-box-right') && _0x6a4fx5['css']('transform', 'translateX(-100%)')), _0x6a4fx4 = _0x6a4fx4['addClass']('menu-active'), !1
                        });
                        var _0x6a4fx4 = $('[data-auto-activate]');
                        _0x6a4fx4['length'] && (_0x6a4fx4['addClass']('menu-active'), _0x6a4fx1['addClass']('menu-active')), $('body')['removeClass']('modal-open'), $('.menu-hider, .close-menu, .menu-close')['on']('click', function() {
                            return _0x6a4fx2['removeClass']('menu-active'), _0x6a4fx1['removeClass']('menu-active menu-active-clear'), _0x6a4fx5['css']('transform', 'translate(0,0)'), _0x6a4fx1['css']('transform', 'translate(0,0)'), $('#footer-bar')['removeClass']('footer-menu-hidden'), $('body')['removeClass']('modal-open'), !1
                        }), setTimeout(function() {
                            var _0x6a4fx1 = $('#menu-main')['data']('menu-active');
                            if ($('#' + _0x6a4fx1)['addClass']('nav-item-active'), $('[data-submenu]')['on']('click', function() {
                                    $(this)['toggleClass']('nav-item-active'), $(this)['find']('.fa-chevron-right')['toggleClass']('rotate-90');
                                    var _0x6a4fx1 = $(this)['data']('submenu');
                                    return $('#' + _0x6a4fx1)['slideToggle'](250), !1
                                }), $('[data-submenu]')['each'](function() {
                                    var _0x6a4fx1 = $(this)['data']('submenu'),
                                        _0x6a4fx2 = $('#' + _0x6a4fx1)['children']()['length'];
                                    $(this)['find']('strong')['html'](_0x6a4fx2)
                                }), $('.nav-item-active')['data']('submenu')) {
                                $('.nav-item-active')['find']('.fa-chevron-right')['toggleClass']('rotate-90');
                                var _0x6a4fx2 = $('.nav-item-active')['data']('submenu');
                                $('#' + _0x6a4fx2)['slideDown'](250)
                            };
                            $('.nav-item-active')['parent']()['hasClass']('submenu') && $('.nav-item-active')['parent']()['slideDown'](250)
                        }, 250)
                    }(), _0x6a4fx2a(), _0x6a4fx42(), _0x6a4fx3a(), _0x6a4fxd(), $(document)['ready'](function() {
                        $('#shape-cut-left')['on']('click', function() {
                            $('.header-card')['removeClass']('shape-rounded shape-cut-right')['addClass']('shape-cut-left'), $('.footer-card')['removeClass']('shape-rounded shape-cut-right')['addClass']('shape-cut-left')
                        }), $('#shape-cut-right')['on']('click', function() {
                            $('.header-card')['removeClass']('shape-rounded shape-cut-left')['addClass']('shape-cut-right'), $('.footer-card')['removeClass']('shape-rounded shape-cut-left')['addClass']('shape-cut-right')
                        }), $('#shape-rounded')['on']('click', function() {
                            $('.header-card')['removeClass']('shape-cut-left shape-cut-right')['addClass']('shape-rounded'), $('.footer-card')['removeClass']('shape-cut-left shape-cut-right')['addClass']('shape-rounded')
                        })
                    })
            }, 500)
        })
    }
    setTimeout(_0x6a4fx5, 0), $(function() {
        var _0x6a4fx1 = {
            prefetch: !0,
            prefetchOn: 'mouseover',
            cacheLength: 100,
            scroll: !0,
            blacklist: '.default-link',
            forms: 'contactForm',
            onStart: {
                duration: 180,
                render: function(_0x6a4fx1) {
                    return _0x6a4fx1['addClass']('is-exiting'), $('.menu, .menu-hider')['removeClass']('menu-active'), $('#preloader')['removeClass']('preloader-hide'), !1
                }
            },
            onReady: {
                duration: 70,
                render: function(_0x6a4fx1, _0x6a4fx2) {
                    _0x6a4fx1['removeClass']('is-exiting'), _0x6a4fx1['html'](_0x6a4fx2), setTimeout(_0x6a4fx5, 0), $('#preloader')['removeClass']('preloader-hide')
                }
            },
            onAfter: function(_0x6a4fx1, _0x6a4fx2) {
                setTimeout(function() {
                    $('.menu')['css']('display', 'block'), $('#preloader')['addClass']('preloader-hide')
                }, 145)
            }
        };
        $('#page')['smoothState'](_0x6a4fx1)['data']('smoothState')['clear']()
    });
    _0x6a4fx1 = 'scripts/pwa.js', _0x6a4fx2 = function() {}, _0x6a4fx3 = document['body'], (_0x6a4fx4 = document['createElement']('script'))['src'] = _0x6a4fx1, _0x6a4fx4['onload'] = _0x6a4fx2, _0x6a4fx4['onreadystatechange'] = _0x6a4fx2, _0x6a4fx3['appendChild'](_0x6a4fx4)
})