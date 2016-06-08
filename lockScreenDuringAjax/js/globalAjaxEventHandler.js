$body = $("body");
if($(".loadingAjax").length < 1){
    $body.append("<div class='loadingAjax'></div>");
}

$(document).on({
    ajaxStart: function() { 
        $body.addClass("loading");
    },
    ajaxStop: function() {
        $body.removeClass("loading"); 
    }    
});