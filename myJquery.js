    $(".progress-bar").mouseenter(function() {
        // Pass the new string into .html()
        $(this).find(".years").css( "display", "block" );
        $(this).find(".skill").css( "display", "none" );
    });
    
        $(".progress-bar").mouseleave(function() {
        // Pass the new string into .html()
        $(this).find(".skill").css( "display", "block" );
        $(this).find(".years").css( "display", "none" );
    });
