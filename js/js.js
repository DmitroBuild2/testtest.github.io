$( document ).ready(function() {
    
    $('.slider_container').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
      });
    $('.hotels_slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.hotels_slider_prev'),
        nextArrow: $('.hotels_slider_next'),
        responsive: [
            {
              breakpoint: 1024, // - от какой ширины изменять настройки(1024 и ниже)
              settings: {
                // вносим изменения на ширине 1024 и ниже 
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480, // брекпоинтов может быть сколько угодно
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

      });
      $('.service_slider').slick({
        
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.service_slider_prev'),
        nextArrow: $('.service_slider_next')

      });




      $(window).on("load resize", function(){
        var width = $(document).width();
        
        if (width > 768) {
            jQuery(function($) {
                $(window).scroll(function(){
                    if($(this).scrollTop()>140){
                        $('.fixed_top_menu').addClass('fixed_top_menu_visible');
                    }
                    else if ($(this).scrollTop()<140){
                        $('.fixed_top_menu').removeClass('fixed_top_menu_visible');   
                    }
                });
            });

            $('.room_item_left.tabs').filter('.slick-initialized').slick('unslick');

        } else {
            jQuery(function($) {
                $(window).scroll(function(){
                    if($(this).scrollTop()>140){
                        $('.fixed_top_menu').addClass('fixed_top_menu_visible');

                    }
                    else if ($(this).scrollTop()<140){
                        $('.fixed_top_menu').removeClass('fixed_top_menu_visible');

                    }
                });
            });
          $('.room_item_left.tabs').not('.slick-initialized').slick({  
            infinite: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.room_item_left_prev'),
            nextArrow: $('.room_item_left_next'),
            focusOnSelect: true,
            autoplay: false

          });

        // $('body').on('click', '.room_item_left_prev', function (tab) {
        //     $('.room_item_left').click();

        // });
        // $('body').on('click', '.room_item_left_next', function (tab) {
        //     $('.room_item_left').click();
        // });
        
        $('.room_item_left.tabs').on('afterChange', function(event, slick, currentSlide){
            var CurrentSlideDom=$(slick.$slides.get(currentSlide));
            var tab = $('.slick-current div .link_room_item.tab.js-tab-trigger').attr("data-tab");
            
            console.log(tab);
            console.log(CurrentSlideDom);
                $( ".slick-current div .link_room_item.tab.js-tab-trigger" ).trigger('click');;

        });
        }
        
      });

      $( function() {
        $( "#tabs" ).tabs();
      } );
      
      $('.room_slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.room_slider_nav'
    
      });
      $('.room_slider_nav').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.room_slider_for',
        prevArrow: $('.room_slider_prev'),
        nextArrow: $('.room_slider_next'),
        focusOnSelect: true

      });
      $('.room_slider_next').on('click', function() {
        $('.room_slider_nav').slick('slickNext');
        });
    $('.room_slider_prev').on('click', function() {
        $('.room_slider_nav').slick('slickPrev');
        });
        
      $(".phone_form").mask("+7(999) 999-9999");

    $('.js-tab-trigger').click(function() {
        
            $('.room_slider_nav').slick('slickNext');


        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="'+ id +'"]');

        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');
        
        $('.js-tab-content.active').removeClass('active');
        content.addClass('active');
     });
      (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
      $(function() {
        $('.items').click(function() {
            var div = document.getElementById('Name_city_id');
        
            div.innerHTML = document.querySelector('input[name=list]:checked').value;
        });
    });
    $(function() {
        $(document).on("click", ".mobile_menu_container .parent", function(e) {
            e.preventDefault();
            $(".mobile_menu_container .activity").removeClass("activity");
            $(this).siblings("ul").addClass("loaded").addClass("activity");
        });
        $(document).on("click", ".mobile_menu_container .back", function(e) {
            e.preventDefault();
            $(".mobile_menu_container .activity").removeClass("activity");
            $(this).parent().parent().removeClass("loaded");
            $(this).parent().parent().parent().parent().addClass("activity");
        });
        $(document).on("click", ".mobile_menu", function(e) {
            e.preventDefault();
            $(".mobile_menu_container").addClass("loaded");
            $(".mobile_menu_overlay").fadeIn();
        });
        $(document).on("click", ".mobile_menu_overlay", function(e) {
            $(".mobile_menu_container").removeClass("loaded");
            $(this).fadeOut(function() {
                $(".mobile_menu_container .loaded").removeClass("loaded");
                $(".mobile_menu_container .activity").removeClass("activity");
            });
        });
    })
    $(function() {
        $('.hide_menu').click(function() {
            $(".mobile_menu_container").removeClass("loaded");
            $(".mobile_menu_overlay").fadeOut(function() {
                $(".mobile_menu_container .loaded").removeClass("loaded");
                $(".mobile_menu_container .activity").removeClass("activity");
            });
        });
    });


      !function (e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (e, t) {
        "use strict";
        var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, l = n.indexOf, u = {},
            c = u.toString, d = u.hasOwnProperty, p = d.toString, f = p.call(Object), h = {};
    

    

    
        function T(e) {
            var t = !!e && "length" in e && e.length, n = g.type(e);
            return "function" !== n && !g.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
    
        
        function nt(e, t, n) {
            var r, i, o = 0, a = nt.prefilters.length, s = g.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (i) return !1;
                for (var t = Ve || Ze(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; a > o; o++) u.tweens[o].run(r);
                return s.notifyWith(e, [u, r, n]), 1 > r && a ? n : (s.resolveWith(e, [u]), !1)
            }, u = s.promise({
                elem: e,
                props: g.extend({}, t),
                opts: g.extend(!0, {specialEasing: {}, easing: g.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ve || Ze(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = g.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0, r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }), c = u.props;
            for (function (e, t) {
                var n, r, i, o, a;
                for (n in e) if (i = t[r = g.camelCase(n)], o = e[n], g.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = g.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
            }(c, u.opts.specialEasing); a > o; o++) if (r = nt.prefilters[o].call(u, e, c, u.opts)) return g.isFunction(r.stop) && (g._queueHooks(u.elem, u.opts.queue).stop = g.proxy(r.stop, r)), r;
            return g.map(c, tt, u), g.isFunction(u.opts.start) && u.opts.start.call(e, u), g.fx.timer(g.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
    
    });
    var domLoad = function (e) {
        if ("function" != typeof e && "string" != typeof e) throw"type of callback must be a string or function";
        document.addEventListener("DOMContentLoaded", function () {
            "function" == typeof e ? e.call(window) : window[e]
        })
    }, iterate = function (e, t) {
        for (var n = 0; n < e.length; n++) t(n, e[n])
    }, log = function (e) {
        window.__KP_debug && console.log(e)
    };
    
    function get_url_param(e) {
        var t = new URL(location.href);
        return new URLSearchParams(t.search).get(e) || !1
    }
    
    function clear_url_params(e) {
        return e.replace(/\?.*$/g, "")
    }
    
    function remove_location(e) {
        return e.replace(/^.*\?+/g, "")
    }
    
    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    
    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    
    function _createClass(e, t, n) {
        return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
    }
    
    !function (e) {
        e(document).ready(function (t) {
            var n, r = [];
            r.en = {
                months: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
                today: "Сегодня "
            }, r.ru = {
                months: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
                today: "Сегодня "
            };
            var i = {
                init: function (t) {
                    n = e("html").attr("lang") || "ru";
                    e(this).hide();
                    e(this).data("season");
                    for (id = 0; e("#datepicker-" + id).length > 0;) id++;
                    this.attr("id", "datepicker-input-" + id);
                    var r = e("<div></div>").append('<div class="caption datepicker__caption"></div><div class="value datepicker__value"><table><tr><td class="day" rowspan="2"></td><td class="month"></td></tr><tr><td class="year"></td></tr></table></div>').addClass(e(this).attr("class")).attr({
                        id: "datepicker-" + id,
                        "data-input": "#datepicker-input-" + id
                    }), i = new Date;
                    if (e(this).attr("data-date") && e(this).attr("data-date").length > 0) {
                        var o = parseInt(e(this).attr("data-date").replace(/[^\d]*/, ""));
                        i.setDate(i.getDate() + o)
                    }
                    if (e(this).attr("placeholder")) {
                        var a = e(this).attr("placeholder").split(/[\.\,\;\-\:]/);
                        e(r).find(".value .day").text(a[0]), e(r).find(".value .year").text(a[2]), e(r).find(".value .month").html(a[1]), e(r).find(".value").addClass("datepicker__value--placeholder")
                    } else e(r).datePicker("setDate", i, this);
                    var s = get_url_param(e(this).attr("name"));
                    if (e(this).hasClass("js-url-param") && s) {
                        a = (s = s.replace(/(-([1..9]){1}-)/, "-0$2-")).split(/[\.\,\;\-\:]/);
                        i.setDate(a[2]), i.setMonth(parseInt(a[1]) - 1), i.setYear(a[0]), e(r).datePicker("setDate", i, this)
                    }
                    return e(this).attr("data-locale") && pickmeup.defaults.locales.hasOwnProperty(e(this).attr("data-locale")) && (n = e(this).attr("data-locale")), e(r).insertAfter(this), pickmeup("#datepicker-" + id, {
                        locale: n,
                        next: '<i class="fa fa-angle-right"></i>',
                        prev: '<i class="fa fa-angle-left"></i>',
                        hide_on_select: !0,
                        position: function () {
                            if (0 == e(this).parent().index()) var t = e(this).offset().left; else t = parseInt(e(this).parent().offset().left);
                            var n = window.innerWidth;
                            return t = t + 337 > n ? n - 337 : t, {
                                top: parseInt(e(this).offset().top) + parseInt(e(this).height()) + "px",
                                left: t + "px"
                            }
                        },
                        min: new Date,
                        format: "d-m-Y"
                    }), r[0].addEventListener("pickmeup-hide", function (t) {
                        e(r).children(".caption").removeClass("datepicker__caption--open"), e(r).children(".value").removeClass("datepicker__value--open")
                    }), r[0].addEventListener("pickmeup-show", function (t) {
                        e(r).children(".caption").addClass("datepicker__caption--open"), e(r).children(".value").addClass("datepicker__value--open")
                    }), e(r).children(".caption").text(e(this).attr("data-caption")), r[0].addEventListener("pickmeup-change", function (t) {
                        var n = e(e(t.target).attr("data-input"));
                        e(r).datePicker("setDate", t.detail.date, n), e(r).children(".caption").removeClass("datepicker__caption--open"), e(r).children(".value").removeClass("datepicker__value--open")
                    }), this
                }, setDate: function (t, i) {
                    var o = parseInt(t.getDate());
                    o = o > 9 ? o : "0" + o;
                    var a = t.getFullYear(), s = t.getMonth(), l = a + "-" + (s + 1) + "-" + o;
                    return e(this).find(".value .day").text(o), e(this).find(".value .year").text(a), e(this).find(".value .month").html(r[n].months[s]), e(this).find(".value").removeClass("datepicker__value--placeholder"), e(this).find(".caption").removeClass("datepicker__caption--open"), i.val(l), this
                }
            };
            e.fn.datePicker = function (t) {
                return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error('method "' + t + '" not found') : i.init.apply(this, arguments)
            }, e(".js-datepicker").each(function () {
                e(this).datePicker()
            })
        })
    }(jQuery), function (e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.pickmeup = t()
    }(this, function () {
        function e(e) {
            !function (e, t, n) {
                var r, i;
                if (n = n || [], e instanceof Element) t.apply(t, [e].concat(n)); else for (r = e.length, i = 0; i < r; ++i) t.apply(t, [e[i]].concat(n))
            }(e, function (e) {
                e.parentElement.removeChild(e)
            })
        }
    
        function t(e, t) {
            var r = e;
            do {
                r = r.parentElement
            } while (r && !n(r, t));
            return r
        }
    
        function n(e, t) {
            return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(e, t)
        }
    
        function r(e, t) {
            return e && e.classList.contains(t)
        }
    
        function i(e, t) {
            e.classList.add(t)
        }
    
        function o(e, t) {
            e.classList.remove(t)
        }
    
        function a(e, t) {
            return e.querySelector(t)
        }
    
        function s(e, t) {
            return Array.prototype.slice.call(e.querySelectorAll(t))
        }
    
        function l(e, t, n, r) {
            if (-1 !== n.indexOf(" ")) {
                var i, o = n.split(" "), a = o.length;
                for (i = 0; i < a; ++i) l(e, t, o[i], r)
            } else e.__pickmeup.events.push([t, n, r]), t.addEventListener(n, r)
        }
    
        function u(e, t, n, r) {
            var i, o, a;
            if (n && -1 !== n.indexOf(" ")) for (o = (i = n.split(" ")).length, a = 0; a < o; ++a) u(e, t, i[a], r); else for (o = (i = e.__pickmeup.events).length, a = 0; a < o; ++a) t && t != i[a][0] || n && n != i[a][1] || r && r != i[a][2] || i[a][0].removeEventListener(i[a][1], i[a][2])
        }
    
        function c(e, t, n) {
            var r = document.createEvent("Event");
            return n && (r.detail = n), r.initEvent("pickmeup-" + t, !1, !0), e.dispatchEvent(r)
        }
    
        function d(e) {
            for (var t = new Date(e), n = 28, r = t.getMonth(); t.getMonth() == r;) ++n, t.setDate(n);
            return n - 1
        }
    
        function p(e, t) {
            e.setDate(e.getDate() + t)
        }
    
        function f(e, t) {
            var n = e.getDate();
            e.setDate(1), e.setMonth(e.getMonth() + t), e.setDate(Math.min(n, d(e)))
        }
    
        function h(e, t) {
            var n = e.getDate();
            e.setDate(1), e.setFullYear(e.getFullYear() + t), e.setDate(Math.min(n, d(e)))
        }
    
        function m(t) {
            var n, o, l, u, d, m, v = t.__pickmeup.element, b = t.__pickmeup.options, w = Math.floor(b.calendars / 2),
                x = b.date, T = b.current, k = b.min ? new Date(b.min) : null, _ = b.max ? new Date(b.max) : null;
            k && (k.setDate(1), f(k, 1), p(k, -1)), _ && (_.setDate(1), f(_, 1), p(_, -1)), e(s(v, ".pmu-instance > :not(nav)"));
            for (var C = 0; C < b.calendars; C++) if (g(n = new Date(T)), l = s(v, ".pmu-instance")[C], r(v, "pmu-view-years") ? (h(n, 12 * (C - w)), o = n.getFullYear() - 6 + " - " + (n.getFullYear() + 5)) : r(v, "pmu-view-months") ? (h(n, C - w), o = n.getFullYear()) : r(v, "pmu-view-days") && (f(n, C - w), o = y(n, b.title_format, b.locales[b.locale])), !d && _ && (m = new Date(n), b.select_day ? f(m, b.calendars - 1) : b.select_month ? h(m, b.calendars - 1) : h(m, 12 * (b.calendars - 1)), m > _)) --C, f(T, -1), d = void 0; else if (d = new Date(n), !u && ((u = new Date(n)).setDate(1), f(u, 1), p(u, -1), k && k > u)) --C, f(T, 1), u = void 0; else {
                a(l, ".pmu-month").textContent = o;
                var D = function (e) {
                    return "range" == b.mode && e >= new Date(x[0]).getFullYear() && e <= new Date(x[1]).getFullYear() || "multiple" == b.mode && -1 !== x.reduce(function (e, t) {
                        return e.push(new Date(t).getFullYear()), e
                    }, []).indexOf(e) || new Date(x).getFullYear() == e
                }, E = function (e, t) {
                    var n = new Date(x[0]).getFullYear(), r = new Date(x[1]).getFullYear(), i = new Date(x[0]).getMonth(),
                        o = new Date(x[1]).getMonth();
                    return "range" == b.mode && (e > n && e < r || e > n && e == r && t <= o || e == n && e < r && t >= i || e == n && e == r && t >= i && t <= o) || "multiple" == b.mode && -1 !== x.reduce(function (e, t) {
                        return t = new Date(t), e.push(t.getFullYear() + "-" + t.getMonth()), e
                    }, []).indexOf(e + "-" + t) || new Date(x).getFullYear() == e && new Date(x).getMonth() == t
                };
                !function () {
                    var e, t, r, o = [], a = n.getFullYear() - 6, s = new Date(b.min).getFullYear(),
                        u = new Date(b.max).getFullYear();
                    for (r = 0; r < 12; ++r) e = a + r, (t = document.createElement("div")).textContent = e, t.__pickmeup_year = e, b.min && e < s || b.max && e > u ? i(t, "pmu-disabled") : D(e) && i(t, "pmu-selected"), o.push(t);
                    l.appendChild(b.instance_content_template(o, "pmu-years"))
                }(), function () {
                    var e, t, r = [], o = n.getFullYear(), a = new Date(b.min).getFullYear(),
                        s = new Date(b.min).getMonth(), u = new Date(b.max).getFullYear(), c = new Date(b.max).getMonth();
                    for (e = 0; e < 12; ++e) (t = document.createElement("div")).textContent = b.locales[b.locale].monthsShort[e], t.__pickmeup_month = e, t.__pickmeup_year = o, b.min && (o < a || e < s && o == a) || b.max && (o > u || e > c && o >= u) ? i(t, "pmu-disabled") : E(o, e) && i(t, "pmu-selected"), r.push(t);
                    l.appendChild(b.instance_content_template(r, "pmu-months"))
                }(), function () {
                    var e, t, r, o, a, s, u = [], c = n.getMonth(), d = g(new Date).valueOf();
                    for (function () {
                        n.setDate(1);
                        var e = (n.getDay() - b.first_day) % 7;
                        p(n, -(e + (e < 0 ? 7 : 0)))
                    }(), e = 0; e < 42; ++e) (t = document.createElement("div")).textContent = n.getDate(), t.__pickmeup_day = n.getDate(), t.__pickmeup_month = n.getMonth(), t.__pickmeup_year = n.getFullYear(), c != n.getMonth() && i(t, "pmu-not-in-month"), 0 == n.getDay() ? i(t, "pmu-sunday") : 6 == n.getDay() && i(t, "pmu-saturday"), r = b.render(new Date(n)) || {}, o = g(new Date(n)).valueOf(), a = b.min && b.min > n || b.max && b.max < n, s = b.date.valueOf() == o || b.date instanceof Array && b.date.reduce(function (e, t) {
                        return e || o === t.valueOf()
                    }, !1) || "range" == b.mode && o >= b.date[0] && o <= b.date[1], r.disabled || !("disabled" in r) && a ? i(t, "pmu-disabled") : (r.selected || !("selected" in r) && s) && i(t, "pmu-selected"), o == d && i(t, "pmu-today"), r.class_name && r.class_name.split(" ").forEach(i.bind(t, t)), u.push(t), p(n, 1);
                    l.appendChild(b.instance_content_template(u, "pmu-days"))
                }()
            }
            u.setDate(1), d.setDate(1), f(d, 1), p(d, -1);
            var j = a(v, ".pmu-prev"), S = a(v, ".pmu-next");
            j && (j.style.visibility = b.min && b.min >= u ? "hidden" : "visible"), S && (S.style.visibility = b.max && b.max <= d ? "hidden" : "visible"), c(t, "fill")
        }
    
        function v(e, t) {
            var n, r = t.format, i = t.separator, o = t.locales[t.locale];
            if (e instanceof Date || e instanceof Number) return g(new Date(e));
            if (!e) return g(new Date);
            if (e instanceof Array) {
                for (e = e.slice(), n = 0; n < e.length; ++n) e[n] = v(e[n], t);
                return e
            }
            var a = e.split(i);
            if (a.length > 1) return a.forEach(function (e, n, r) {
                r[n] = v(e.trim(), t)
            }), a;
            i = (i = [].concat(o.daysShort, o.daysMin, o.days, o.monthsShort, o.months)).map(function (e) {
                return "(" + e + ")"
            }), i = new RegExp("[^0-9a-zA-Z" + i.join("") + "]+");
            var s, l, u, c, d, p = e.split(i), f = r.split(i), h = new Date;
            for (n = 0; n < p.length; n++) switch (f[n]) {
                case"b":
                    l = o.monthsShort.indexOf(p[n]);
                    break;
                case"B":
                    l = o.months.indexOf(p[n]);
                    break;
                case"d":
                case"e":
                    s = parseInt(p[n], 10);
                    break;
                case"m":
                    l = parseInt(p[n], 10) - 1;
                    break;
                case"Y":
                case"y":
                    u = parseInt(p[n], 10), u += u > 100 ? 0 : u < 29 ? 2e3 : 1900;
                    break;
                case"H":
                case"I":
                case"k":
                case"l":
                    c = parseInt(p[n], 10);
                    break;
                case"P":
                case"p":
                    /pm/i.test(p[n]) && c < 12 ? c += 12 : /am/i.test(p[n]) && c >= 12 && (c -= 12);
                    break;
                case"M":
                    d = parseInt(p[n], 10)
            }
            var m = new Date(void 0 === u ? h.getFullYear() : u, void 0 === l ? h.getMonth() : l, void 0 === s ? h.getDate() : s, void 0 === c ? h.getHours() : c, void 0 === d ? h.getMinutes() : d, 0);
            return isNaN(1 * m) && (m = new Date), g(m)
        }
    
        function g(e) {
            return e.setHours(0, 0, 0, 0), e
        }
    
        function y(e, t, n) {
            var r = e.getMonth(), i = e.getDate(), o = e.getFullYear(), a = e.getDay(), s = e.getHours(), l = s >= 12,
                u = l ? s - 12 : s, c = function (e) {
                    var t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0) - new Date(e.getFullYear(), 0, 0, 0, 0, 0);
                    return Math.floor(t / 864e5)
                }(e);
            0 == u && (u = 12);
            for (var d, p = e.getMinutes(), f = e.getSeconds(), h = t.split(""), m = 0; m < h.length; m++) {
                switch (d = h[m]) {
                    case"a":
                        d = n.daysShort[a];
                        break;
                    case"A":
                        d = n.days[a];
                        break;
                    case"b":
                        d = n.monthsShort[r];
                        break;
                    case"B":
                        d = n.months[r];
                        break;
                    case"C":
                        d = 1 + Math.floor(o / 100);
                        break;
                    case"d":
                        d = i < 10 ? "0" + i : i;
                        break;
                    case"e":
                        d = i;
                        break;
                    case"H":
                        d = s < 10 ? "0" + s : s;
                        break;
                    case"I":
                        d = u < 10 ? "0" + u : u;
                        break;
                    case"j":
                        d = c < 100 ? c < 10 ? "00" + c : "0" + c : c;
                        break;
                    case"k":
                        d = s;
                        break;
                    case"l":
                        d = u;
                        break;
                    case"m":
                        d = r < 9 ? "0" + (1 + r) : 1 + r;
                        break;
                    case"M":
                        d = p < 10 ? "0" + p : p;
                        break;
                    case"p":
                    case"P":
                        d = l ? "PM" : "AM";
                        break;
                    case"s":
                        d = Math.floor(e.getTime() / 1e3);
                        break;
                    case"S":
                        d = f < 10 ? "0" + f : f;
                        break;
                    case"u":
                        d = a + 1;
                        break;
                    case"w":
                        d = a;
                        break;
                    case"y":
                        d = ("" + o).substr(2, 2);
                        break;
                    case"Y":
                        d = o
                }
                h[m] = d
            }
            return h.join("")
        }
    
        function b(e, t) {
            var r, i = e.__pickmeup.options;
            g(t), function () {
                var e;
                switch (i.mode) {
                    case"multiple":
                        for (e = t.valueOf(), r = 0; r < i.date.length; ++r) if (i.date[r].valueOf() === e) return void i.date.splice(r, 1);
                        i.date.push(t);
                        break;
                    case"range":
                        i.lastSel || (i.date[0] = t), t <= i.date[0] ? (i.date[1] = i.date[0], i.date[0] = t) : i.date[1] = t, i.lastSel = !i.lastSel;
                        break;
                    default:
                        i.date = t.valueOf()
                }
            }();
            var o = x(i);
            n(e, "input") && (e.value = "single" == i.mode ? o.formatted_date : o.formatted_date.join(i.separator)), c(e, "change", o), i.flat || !i.hide_on_select || "range" == i.mode && i.lastSel || i.bound.hide()
        }
    
        function w(e, a) {
            var l = a.target;
            if (!r(l, "pmu-current-month") && (r(l, "pmu-button") || (l = t(l, ".pmu-button")), !r(l, "pmu-button") || r(l, "pmu-disabled"))) return !1;
            a.preventDefault(), a.stopPropagation();
            var u = e.__pickmeup.options, c = t(l, ".pmu-instance"), d = c.parentElement,
                p = s(d, ".pmu-instance").indexOf(c);
            if (r(l, "pmu-current-month")) {
                (new Date).getDate();
                return u.current = new Date, o(d, "pmu-view-months"), u.bound.fill(), !0
            }
            if (n(l.parentElement, "nav")) r(l, "pmu-month") ? (f(u.current, p - Math.floor(u.calendars / 2)), r(d, "pmu-view-years") ? ("single" != u.mode ? u.current = new Date(u.date[u.date.length - 1]) : u.current = new Date(u.date), u.select_day ? (o(d, "pmu-view-years"), i(d, "pmu-view-days")) : u.select_month && (o(d, "pmu-view-years"), i(d, "pmu-view-months"))) : r(d, "pmu-view-months") ? u.select_year ? (o(d, "pmu-view-months"), i(d, "pmu-view-years")) : u.select_day && (o(d, "pmu-view-months"), i(d, "pmu-view-days")) : r(d, "pmu-view-days") && (u.select_month ? (o(d, "pmu-view-days"), i(d, "pmu-view-months")) : u.select_year && (o(d, "pmu-view-days"), i(d, "pmu-view-years")))) : r(l, "pmu-prev") ? u.bound.prev(!1) : u.bound.next(!1); else if (r(d, "pmu-view-years")) u.current.setFullYear(l.__pickmeup_year), u.select_month ? (o(d, "pmu-view-years"), i(d, "pmu-view-months")) : u.select_day ? (o(d, "pmu-view-years"), i(d, "pmu-view-days")) : u.bound.update_date(u.current); else if (r(d, "pmu-view-months")) u.current.setMonth(l.__pickmeup_month), u.current.setFullYear(l.__pickmeup_year), u.select_day ? (o(d, "pmu-view-months"), i(d, "pmu-view-days")) : u.bound.update_date(u.current), f(u.current, Math.floor(u.calendars / 2) - p); else {
                var h = new Date(u.current);
                h.setYear(l.__pickmeup_year), h.setMonth(l.__pickmeup_month), h.setDate(l.__pickmeup_day), u.bound.update_date(h)
            }
            return u.bound.fill(), !0
        }
    
        function x(e) {
            var t;
            return "single" == e.mode ? {
                formatted_date: y(t = new Date(e.date), e.format, e.locales[e.locale]),
                date: t
            } : (t = {formatted_date: [], date: []}, e.date.forEach(function (n) {
                var r = new Date(n);
                t.formatted_date.push(y(r, e.format, e.locales[e.locale])), t.date.push(r)
            }), t)
        }
    
        function T(e, t) {
            var i, a, s = e.__pickmeup.element;
            if (t || r(s, "pmu-hidden")) {
                var u = e.__pickmeup.options, d = {
                    top: (a = e.getBoundingClientRect()).top + window.pageYOffset - document.documentElement.clientTop,
                    left: a.left + window.pageXOffset - document.documentElement.clientLeft
                }, p = {
                    l: window.pageXOffset,
                    t: window.pageYOffset,
                    w: document.documentElement.clientWidth,
                    h: document.documentElement.clientHeight
                }, f = d.top, h = d.left;
                if (u.bound.fill(), n(e, "input") && ((i = e.value) && u.bound.set_date(i), l(e, e, "keydown", function (e) {
                    9 == e.which && u.bound.hide()
                }), u.lastSel = !1), !c(e, "show")) return;
                if (!u.flat) {
                    if (o(s, "pmu-hidden"), u.position instanceof Function) h = (d = u.position.call(e)).left, f = d.top; else {
                        switch (u.position) {
                            case"top":
                                f -= s.offsetHeight;
                                break;
                            case"left":
                                h -= s.offsetWidth;
                                break;
                            case"right":
                                h += e.offsetWidth;
                                break;
                            case"bottom":
                                f += e.offsetHeight
                        }
                        f + s.offsetHeight > p.t + p.h && (f = d.top - s.offsetHeight), f < p.t && (f = d.top + e.offsetHeight), h + s.offsetWidth > p.l + p.w && (h = d.left - s.offsetWidth), h < p.l && (h = d.left + e.offsetWidth), h += "px", f += "px"
                    }
                    s.style.left = h, s.style.top = f, setTimeout(function () {
                        l(e, document.documentElement, "click", u.bound.hide), l(e, window, "resize", u.bound.forced_show)
                    })
                }
            }
        }
    
        function k(e, t) {
            var n = e.__pickmeup.element, r = e.__pickmeup.options;
            t && t.target && (t.target == e || 16 & n.compareDocumentPosition(t.target)) || c(e, "hide") && (i(n, "pmu-hidden"), u(e, document.documentElement, "click", r.bound.hide), u(e, window, "resize", r.bound.forced_show), r.lastSel = !1)
        }
    
        function _(e) {
            var t = e.__pickmeup.options;
            u(e, document.documentElement, "click", t.bound.hide), u(e, window, "resize", t.bound.forced_show), t.bound.forced_show()
        }
    
        function C(e) {
            var t = e.__pickmeup.options;
            "single" != t.mode && (t.date = [], t.lastSel = !1, t.bound.fill())
        }
    
        function D(e, t) {
            void 0 === t && (t = !0);
            var n = e.__pickmeup.element, i = e.__pickmeup.options;
            r(n, "pmu-view-years") ? h(i.current, -12) : r(n, "pmu-view-months") ? h(i.current, -1) : r(n, "pmu-view-days") && f(i.current, -1), t && i.bound.fill()
        }
    
        function E(e, t) {
            void 0 === t && (t = !0);
            var n = e.__pickmeup.element, i = e.__pickmeup.options;
            r(n, "pmu-view-years") ? h(i.current, 12) : r(n, "pmu-view-months") ? h(i.current, 1) : r(n, "pmu-view-days") && f(i.current, 1), t && i.bound.fill()
        }
    
        function j(e, t) {
            var n = e.__pickmeup.options, r = x(n);
            if ("string" == typeof t) {
                var i = r.date;
                return i instanceof Date ? y(i, t, n.locales[n.locale]) : i.map(function (e) {
                    return y(e, t, n.locales[n.locale])
                })
            }
            return r[t ? "formatted_date" : "date"]
        }
    
        function S(e, t, r) {
            var i, o = e.__pickmeup.options;
            if (!(t instanceof Array) || t.length > 0) if (o.date = v(t, o), "single" != o.mode) for (o.date instanceof Array ? (o.date[0] = o.date[0] || v(new Date, o), "range" == o.mode && (o.date[1] = o.date[1] || v(o.date[0], o))) : (o.date = [o.date], "range" == o.mode && o.date.push(v(o.date[0], o))), i = 0; i < o.date.length; ++i) o.date[i] = L(o.date[i], o.min, o.max); else o.date instanceof Array && (o.date = o.date[0]), o.date = L(o.date, o.min, o.max); else o.date = [];
            if (!o.select_day) if (o.date instanceof Array) for (i = 0; i < o.date.length; ++i) o.date[i].setDate(1); else o.date.setDate(1);
            if ("multiple" == o.mode) for (i = 0; i < o.date.length; ++i) o.date.indexOf(o.date[i]) !== i && (o.date.splice(i, 1), --i);
            if (r ? o.current = v(r, o) : (r = "single" === o.mode ? o.date : o.date[o.date.length - 1], o.current = r ? new Date(r) : new Date), o.current.setDate(1), o.bound.fill(), n(e, "input") && !1 !== o.default_date) {
                var a = x(o), s = e.value, l = "single" == o.mode ? a.formatted_date : a.formatted_date.join(o.separator);
                s || c(e, "change", a), s != l && (e.value = l)
            }
        }
    
        function N(t) {
            var n = t.__pickmeup.element;
            u(t), e(n), delete t.__pickmeup
        }
    
        function L(e, t, n) {
            return t && t > e ? new Date(t) : n && n < e ? new Date(n) : e
        }
    
        function A(e, t) {
            if ("string" == typeof e && (e = document.querySelector(e)), !e) return null;
            if (!e.__pickmeup) {
                var n, r, o = {};
                for (n in t = t || {}, A.defaults) o[n] = n in t ? t[n] : A.defaults[n];
                for (n in o) null !== (r = e.getAttribute("data-pmu-" + n)) && (o[n] = r);
                "days" != o.view || o.select_day || (o.view = "months"), "months" != o.view || o.select_month || (o.view = "years"), "years" != o.view || o.select_year || (o.view = "days"), "days" != o.view || o.select_day || (o.view = "months"), o.calendars = Math.max(1, parseInt(o.calendars, 10) || 1), o.mode = /single|multiple|range/.test(o.mode) ? o.mode : "single", o.min && (o.min = v(o.min, o), o.select_day || o.min.setDate(1)), o.max && (o.max = v(o.max, o), o.select_day || o.max.setDate(1));
                var a = document.createElement("div");
                e.__pickmeup = {
                    options: o,
                    events: [],
                    element: a
                }, a.__pickmeup_target = e, i(a, "pickmeup"), o.class_name && i(a, o.class_name), o.bound = {
                    fill: m.bind(e, e),
                    update_date: b.bind(e, e),
                    click: w.bind(e, e),
                    show: T.bind(e, e),
                    forced_show: T.bind(e, e, !0),
                    hide: k.bind(e, e),
                    update: _.bind(e, e),
                    clear: C.bind(e, e),
                    prev: D.bind(e, e),
                    next: E.bind(e, e),
                    get_date: j.bind(e, e),
                    set_date: S.bind(e, e),
                    destroy: N.bind(e, e)
                }, i(a, "pmu-view-" + o.view);
                var s = o.instance_template(o), u = "";
                for (n = 0; n < o.calendars; ++n) u += s;
                a.innerHTML = u, l(e, a, "click", o.bound.click), l(e, a, "onselectstart" in Element.prototype ? "selectstart" : "mousedown", function (e) {
                    e.preventDefault()
                }), o.flat ? (i(a, "pmu-flat"), e.appendChild(a)) : (i(a, "pmu-hidden"), document.body.appendChild(a), l(e, e, "click", T.bind(e, e, !1)), l(e, e, "input", o.bound.update), l(e, e, "change", o.bound.update)), o.bound.set_date(o.date, o.current)
            }
            return {
                hide: (o = e.__pickmeup.options).bound.hide,
                show: o.bound.show,
                clear: o.bound.clear,
                update: o.bound.update,
                prev: o.bound.prev,
                next: o.bound.next,
                get_date: o.bound.get_date,
                set_date: o.bound.set_date,
                destroy: o.bound.destroy
            }
        }
    
        return A.defaults = {
            current: null,
            date: new Date,
            default_date: new Date,
            flat: !1,
            first_day: 1,
            prev: "&#9664;",
            next: "&#9654;",
            mode: "single",
            select_year: !0,
            select_month: !0,
            select_day: !0,
            view: "days",
            calendars: 1,
            format: "d-m-Y",
            title_format: "B, Y",
            position: "bottom",
            class_name: "",
            separator: " - ",
            hide_on_select: !1,
            min: null,
            max: null,
            render: function () {
            },
            locale: "en",
            locales: {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    months_genitive: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today "
                },
                ru: {
                    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                    daysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    months_genitive: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
                    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                    today: "Сегодня "
                }
            },
            instance_template: function (e) {
                var t = e.locales[e.locale].daysMin.slice();
                e.first_day && t.push(t.shift());
                var n = new Date, r = parseInt(n.getDate()), i = n.getMonth(),
                    o = e.locales[e.locale].today + r + " " + e.locales[e.locale].months_genitive[i];
                return '<div class="pmu-instance"><nav><div class="pmu-prev pmu-button">' + e.prev + '</div><div class="pmu-month pmu-button"></div><div class="pmu-next pmu-button">' + e.next + '</div></nav><nav class="pmu-day-of-week"><div>' + t.join("</div><div>") + '</div></nav><nav class="pmu-goto-today"><div  class="pmu-current-month">' + o + "</div></nav></div>"
            },
            instance_content_template: function (e, t) {
                var n = document.createElement("div");
                i(n, t);
                for (var r = 0; r < e.length; ++r) i(e[r], "pmu-button"), n.appendChild(e[r]);
                return n
            }
        }, A
    }), domLoad(function () {
        if (window.addEventListener("scroll", function () {
            var e = document.getElementsByClassName("js-kp-header")[0];
            0 === pageYOffset ? e.classList.remove("header--fixed") : e.classList.add("header--fixed")
        }), 0 === pageYOffset) {
            var e = new Event("scroll");
            window.dispatchEvent(e)
        }
    }), domLoad(function () {
        var e = document.getElementsByClassName("js-kp-menu-sw")[0], t = document.getElementsByClassName("js-kp-menu")[0];
        e && e.addEventListener("click", function (e) {
            e.target.classList.toggle("header__menu-switch--open"), e.target.classList.contains("header__menu-switch--open") ? t.classList.add("header__controls--open") : t.classList.remove("header__controls--open")
        })
    }),
    function (e) {
      e(document).ready(function (t) {
          var n = {
              1: '<a class="guests__minus js-minus">–</a>\t\t    \t\t<a class="guests__plus js-plus">+</a>\t\t    \t\t<p class="guests__value %placeholder_class% js-value ">%placeholder%<span>%postfix%</span></p>',
              2: '<div class="guests__panel js-panel">\t\t\t\t\t\t<a class="guests__minus js-minus">–</a>\t\t\t\t\t\t<a class="guests__plus js-plus">+</a>\t\t\t\t\t\t<p class="guests__value js-value guests__value--init">%placeholder%<span>%postfix%</span></p>\t\t    \t\t</div>'
          }, r = {
              children: {
                  ru: {0: "детей", 1: "ребенок", 4: "ребенка", 99: "детей"},
                  en: {0: "children", 1: "child", 99: "children"}
              }
          }, i = {
              init: function (t) {
                  var n = this, i = e("html").attr("lang") || "ru", o = e(this).find(".js-guests__group");
                  return e(o).each(function (t, r) {
                      e(n).guests("renderInput", t, r)
                  }), e(n).find(".js-plus").click(function (t) {
                      var n = this;
                      e(n).parent().hasClass("js-panel") && (n = e(n).parent());
                      var o = e(n).siblings("input")[0], a = parseInt(e(o).val()), s = parseInt(e(o).attr("max")) || 10,
                          l = e(o).data("postfix");
                      if (s > a) {
                          if (++a, e(o).val(a), e(n).hasClass("js-panel")) var u = e(n).children(".js-value")[0]; else u = e(n).siblings(".js-value")[0];
                          if (void 0 !== r[l] && e.each(r[l][i], function (e, t) {
                              if (a <= e) return l = t, !1
                          }), e(u).html(a + "<span>" + l + "</span>"), e(u).removeClass("guests__value--placeholder"), e(n).hasClass("js-panel")) {
                              var c = e(n).siblings(".js-caption");
                              c.addClass("guests__caption--has-value"), c.text("+" + a + " " + l)
                          }
                      }
                  }), e(n).find(".js-minus").click(function (t) {
                      var n = this;
                      e(n).parent().hasClass("js-panel") && (n = e(n).parent());
                      var o = e(n).siblings("input")[0], a = parseInt(e(o).val()), s = parseInt(e(o).attr("min")) || 0,
                          l = e(o).data("postfix");
                      if (s < a) {
                          if (--a, e(o).val(a), e(n).hasClass("js-panel")) var u = e(n).children(".js-value")[0]; else u = e(n).siblings(".js-value")[0];
                          if (void 0 !== r[l] && e.each(r[l][i], function (e, t) {
                              if (a <= e) return l = t, !1
                          }), e(u).html(a + "<span>" + l + "</span>"), e(u).removeClass("guests__value--placeholder"), e(n).hasClass("js-panel")) {
                              var c = e(n).siblings(".js-caption");
                              c.addClass("guests__caption--has-value"), c.text("+" + a + " " + l)
                          }
                      }
                  }), e(n).find(".js-caption").click(function (t) {
                      t.stopPropagation();
                      var n = e(this).siblings(".js-panel"), r = e(n).closest(".booking-form__item")[0], i = e(r).width();
                      e(this).position().top;
                      e(document).on("click", function (t) {
                          n.is(t.target) || 0 !== n.has(t.target).length || (e(n).removeClass("guests__panel--visible"), e(document).off("click", n))
                      }), e(n).css({left: "0rem", width: i + "px"}), e(n).addClass("guests__panel--visible")
                  }), e(n).addClass("guests--ready"), this
              }, renderInput: function (t = 0, i) {
                  var o = e("html").attr("lang") || "ru", a = e(i).find("input")[0], s = {
                      mode: e(a).data("mode") || ++t % 2,
                      placeholder: e(a).val() || e(a).data("placeholder") || "",
                      placeholder_class: null == e(a).data("placeholder") ? "" : "guests__value--placeholder",
                      caption: e(a).data("caption") || "",
                      postfix: e(a).data("postfix") || "",
                      min: e(a).attr("min") || 0,
                      max: e(a).attr("max") || 10,
                      value: e(a).val() || e(a).attr("value") || 0
                  };
                  void 0 !== r[s.postfix] && e.each(r[s.postfix][o], function (e, t) {
                      if (s.value <= e) return s.postfix = t, !1
                  });
                  var l = n[s.mode];
                  for (key in s) l = l.replace("%" + key + "%", s[key]);
                  if (e(a).val() && 2 == s.mode) {
                      var u = parseInt(e(a).val()), c = parseInt(e(a).attr("min")) || 0,
                          d = e(i).children(".js-value")[0], p = e(a).data("postfix");
                      if (c < u) {
                          e(a).val(u), void 0 !== r[p] && e.each(r[p][o], function (e, t) {
                              if (u <= e) return p = t, !1
                          }), e(d).html(u + "<span>" + p + "</span>");
                          var f = e(i).find(".js-caption");
                          f.addClass("guests__caption--has-value"), f.text("+" + u + " " + p)
                      }
                  }
                  e(i).append(e(l)), e(a).hide()
              }
          };
          e.fn.guests = function (t) {
              return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error('method "' + t + '" not found') : i.init.apply(this, arguments)
          }, e(".js-guests").each(function (t, n) {
              e(this).guests()
          })
      })
  }(jQuery);

});