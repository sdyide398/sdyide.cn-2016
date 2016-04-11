$(document).ready(function() {
    var $macImg = $('#mac_img');
    $('.mac_menu').find('li').mouseover(function(event) {
        $macImg.attr('src', $(this).data('img'));
    });
    //Show dropdown on click only for mobile devices
    //-----------------------------------------------
    if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch) {
        $('.mega-menu .dropdown-toggle').on('click', function(event) {
            // Avoid following the href location when clicking
            event.preventDefault();
            // Avoid having the menu to close when clicking
            event.stopPropagation();
            // close all the siblings
            $(this).parent().siblings().removeClass('resp-active');
            // close all the submenus of siblings
            $(this).parent().siblings().find('.dropdown-toggle').parent().removeClass('resp-active');
            // opening the one you clicked on
            $(this).parent().addClass('resp-active');
        });
    };
    $(".itemfilter").hide();
    window.onload = function () {
        setTimeout('var $container = $(".isotope").isotope({itemSelector: ".isotope-item"});$(".itemfilter").show("fast");',1000);
        
        var filters = {};
        $('.itemfilter').on('click', 'a.item', function(e) {
            e.preventDefault();
            var $this = $(this)
            var $buttonGroup = $this.parents('.itemfilter-item');
            $this.siblings().removeClass("active");
            $this.addClass("active");
            var filterGroup = $buttonGroup.data('filter-group');
            // set filter for group
            filters[filterGroup] = $this.data('filter');
            // combine filters
            var filterValue = [];
            for (var prop in filters) {
                if (filters[prop]) {
                    filterValue.push(filters[prop]);
                }
            }
            $container.isotope({
                filter: filterValue.join('')
            });
            console.log(filterValue);
        });

        $(".showmore").click(function(a) {
            a.preventDefault();
            var b = $(this).parents(".itemfilter-item").find(".collapsible");
            b.hasClass("collapsed") ? ($(this).text("隐藏"), b.removeClass("collapsed")) : ($(this).text("更多"), b.addClass("collapsed"))
        });
    }
});