jQuery(function($) {

    function singleSelect (){
        $('.con-select .btn-selection-choice').click(function () {
            $(this).closest('.con-select').find('.btn-selection-choice').removeClass('uk-active');
            $(this).addClass('uk-active');
        });
    };

    function toggleBtnEditPattenColor (){

        $('.con-select.con-palettes .btn-selection-choice').click(function() {
            $(this).addClass('uk-active');
            if ($(this).hasClass('palette-pattern')) {
                $(this).closest('.con-select.con-palettes ').find('.modal-edit-palette-pattern').show();
            }
            else
                $(this).closest('.con-select.con-palettes ').find('.modal-edit-palette-pattern').hide();
        });
        $('.con-select.con-palettes .btn-selection-choice.uk-active').each(function(){
            if ($(this).hasClass('palette-pattern')) {
                $(this).closest('.con-select.con-palettes ').find('.modal-edit-palette-pattern').show();
            }
            else
                $(this).closest('.con-select.con-palettes ').find('.modal-edit-palette-pattern').hide();
        });
    };

    function toggleConChooseNumbersColors () {
        $('.con-select.con-toggle .btn-selection-choice').click(function() {
            if ($(this).hasClass('toggle-hide')) {
                $(this).closest('li').find('.con-choose-numbers-colors').hide();
            }
            else
                $(this).closest('li').find('.con-choose-numbers-colors').show();
        });
        $('.con-select.con-toggle .btn-selection-choice.toggle-hide').each(function(){
            if ($(this).hasClass('uk-active')) {
                $(this).closest('li').find('.con-choose-numbers-colors').hide();
            }
            else
                $(this).closest('li').find('.con-choose-numbers-colors').show();
        });
    };

    function toggleConAddApplication (){
        $('.con-select.con-toggle .btn-selection-choice').click(function() {
            if ($(this).hasClass('toggle-show')) {
                $(this).toggleClass('bgc-dark').toggleClass('fc-light');
                $(this).closest('li').find('.con-add-application').toggle();
            }
            else if ($(this).hasClass('toggle-hide')) {
                $(this).closest('li').find('.con-add-application').hide();
                $(this).closest('.con-select.con-toggle').find('.btn-selection-choice').removeClass('bgc-dark').removeClass('fc-light').addClass('bdr-light');
            }
        });
    };

    function toggleConInputObject (){
        $('.con-select.con-toggle .btn-selection-choice').click(function() {
            if ($(this).hasClass('toggle-hide')) {
                $(this).closest('li').find('.con-input-object').hide();
            }
            else
                $(this).closest('li').find('.con-input-object').show();
        });
        $('.con-select.con-toggle .btn-selection-choice.toggle-hide').each(function(){
            if ($(this).hasClass('uk-active')) {
                $(this).closest('li').find('.con-input-object').hide();
            }
            else
                $(this).closest('li').find('.con-input-object').show();
        });
    };

    function sliders (){
        $('.btn-archive').click(function() {
            $(this).closest('.mascot-item').remove();
        });

        $(".slider").roundSlider({
            radius: 70,
            width: 12,
            handleSize: "+14",
        });

        $(".slider-range")
            .slider({
                min: -100,
                max: 100
            })

            .slider("float", {

                handle: true,
                pips: false,
                labels: false,
                prefix: "",
                suffix: ""

            });

        $(".slider-range.range-small-large")
            .slider("pips", {
                labels: {first:"Small", last:"Large"},
            });

        $(".slider-range.range-left-right")
            .slider("pips", {
                labels: {first:"Left", last:"Right"},
            });

        $(".slider-range.range-up-down")
            .slider("pips", {
                labels: {first:"Down", last:"Up"},
            });
    };

    $('.btn-bt-0').click(function() {
        $(this).closest('div').removeClass('uk-active');
        $('.left-nav div div').removeClass('uk-active');
        $('.left-nav div div').first().addClass('uk-active');
    });




    $( "#con-preview-pane" ).load( "preview-pane.html" );

    $( "#m-fabric-selection" ).load( "m-fabric-selection.html" ,function() {
        singleSelect();
    });

    $( "#m-base-color-selection" ).load( "m-base-color-selection.html",function(){
        singleSelect();
        toggleBtnEditPattenColor();
    });

    $( "#m-sleeve-inserts" ).load( "m-sleeve-inserts.html",function(){
        singleSelect();
        toggleBtnEditPattenColor();
    });

    $( "#m-pipings" ).load( "m-pipings.html",function(){
        singleSelect();
        toggleConChooseNumbersColors();
    });

    $( "#m-decorations-letters" ).load( "m-decorations-letters.html",function(){
        singleSelect();
        toggleConInputObject();
        toggleConAddApplication();
        sliders();
    });

    $( "#m-decorations-numbers" ).load( "m-decorations-numbers.html",function(){
        singleSelect();
        toggleConInputObject();
        toggleConAddApplication();
        sliders();
    });

    $( "#m-decorations-mascots" ).load( "m-decorations-mascots.html",function(){
        singleSelect();
        toggleConAddApplication();
        sliders();
    });

    $( "#m-richardson-logo" ).load( "m-richardson-logo.html" );


    // EDIT PATTERN COLOR BUTTON

    // $('.con-select.con-palettes .btn-selection-choice').click(function() {
    // $('#m-con-steps').on('click','.btn-selection-choice',function(e) {
    //         $(this).addClass('uk-active');
    //     if ($(this).hasClass('palette-pattern')) {
    //         $(this).closest('.con-select.con-palettes').find('.modal-edit-palette-pattern').show();
    //     }
    //     else
    //         $(this).closest('.con-select.con-palettes').find('.modal-edit-palette-pattern').hide();
    // });
    // $('.con-select.con-palettes .btn-selection-choice.uk-active').each(function(){
    // $('#m-con-steps .btn-selection-choice').each(function(e) {
    //     if ($(this).hasClass('palette-pattern')) {
    //         $(this).closest('.con-select.con-palettes').find('.modal-edit-palette-pattern').show();
    //     }
    //     else
    //         $(this).closest('.con-select.con-palettes').find('.modal-edit-palette-pattern').hide();
    // });
    // END EDIT PATTERN COLOR BUTTON

    // var data =
    //     {previewLinks: [
    //         {links: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png'},
    //         {links: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/ff11e98804c31eace338c140fc3b4e2f.png'},
    //         {links: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/decdfb5513247463255f68634de2bcfb.png'},
    //         {links: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/801f4aaa30cc9cb9f960d7c04ece745c.png'}
    //         ]};
    //
    // var template = $('#preview-pane-thumb-nav').html();
    // var markup = Mustache.render(template, data);
    // $('#m-preview-pane-thumb-nav').html(markup);
    //
    // var template = $('#preview').html();
    // var markup = Mustache.render(template, data);
    // $('#m-preview').html(markup);

});