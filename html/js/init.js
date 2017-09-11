


(function() {

  "use strict";

/* =
PRE LOADER                     
=================================== */

function setDivHeight() {
    //height of browser viewport
    var viewportHeight = $(window).height();
    $('.home').height(viewportHeight); // OR viewportHeight - 180 as appropriate
}

// = onload and onresize
$(window).on("load resize", setDivHeight);




})(jQuery);
