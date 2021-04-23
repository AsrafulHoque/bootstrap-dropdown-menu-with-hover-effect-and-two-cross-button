/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // code should be execute here

    $(function () {
        if ($('.navbar .dropdown').length) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $('.navbar .dropdown').hover(function () {
                    $(this).children(".dropdown-menu").stop(true, false, true).slideToggle(350);
                });
            }
        }
        $('.navbar-toggler').on('click', function () {
            $('.navbar-toggler').find('span').toggleClass('ni-menu-right ni-cross');
        });
    });
});
