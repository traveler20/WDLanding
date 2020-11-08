$( function () {
    let timer = 0;
    $( ".js-hamburger--bt" ).click( function() {
        $( this ).toggleClass( "is-open" );
        $( ".js-hamburger" ).toggleClass( "is-open");
        $( "body" ).toggleClass( "is-open");
    } );
    $( window ).on( "resize", function() {
        let pcwidth = 769;
        if( timer > 0 ) {
            clearTimeout( timer );
        }
        timer = setTimeout( function() {
            let resizeWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clickWidht;
            if( resizeWidth >= pcwidth ) {
                $( ".js-hamburger--bt" ).removeClass( "is-open" );
                $( ".js-hamburger" ).removeClass( "is-open");
                $( "body" ).removeClass( "is-open");
            }
        },200 );
    } );
} );
