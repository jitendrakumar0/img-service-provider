// $('.example').owlCarousel({
//     loop: true,
//     items: 9,
//     margin: 0,
//     nav: true,
//     dots: false,
//     autoplay: true,
//     center: true,
//     freeDrag: false,
//     lazyLoad: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     smartSpeed: 1200,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 3,
//             nav: false
//         },
//         500: {
//             items: 4,
//             nav: false
//         },
//         600: {
//             items: 6,
//             nav: false
//         },
//         1000: {
//             items: 7,
//             nav: true
//         },
//         1299: {
//             items: 8,
//             nav: true
//         },
//         1499: {
//             items: 9,
//             nav: true
//         }
//     },
//     navText: ["<i class='imgs img-chevron-left'></i>", "<i class='imgs img-chevron-right'></i>"]
// });


// $('.custom1').owlCarousel({
//     animateOut: 'slideOutDown',
//     animateIn: 'flipInX',
//     animateOut: 'fadeOut',
//     items:1,
//     margin:0,
//     autoplay: true,
//     center: true,
//     lazyLoad: true,
//     loop: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     smartSpeed: 1200,
//     stagePadding:0,
//     smartSpeed:450,
//     responsive: {
//         0: {
//             items: 1,
//             nav: false
//         },
//         500: {
//             items: 1,
//             nav: true,
//             dots: false,
//         }
//     },
//     navText: ["<i class='imgs img-chevron-left'></i>", "<i class='imgs img-chevron-right'></i>"]
// });




















    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add  ('was-validated')
            }, false)
        })
    })()
