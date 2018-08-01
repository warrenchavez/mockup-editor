jQuery(function($) {
    $("#wizard").steps({
        headerTag: "a",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical",
        enableAllSteps: "true",
        enableFinishButton: "false",
        labels: {
            previous: '<span class="left"></span>&nbsp;Previous',
            next: 'Next&nbsp;<span class="right"></span>',
            finish: 'Next&nbsp;<span class="right"></span>'
        }
    });
    $("#preview-pane").steps({
        headerTag: "a",
        bodyTag: "section",
        // transitionEffect: "slideTop",
        stepsOrientation: "vertical",
        enableAllSteps: "true",
        enableFinishButton: "false",
        labels: {
            previous: '<span class="left"></span>&nbsp;Previous',
            next: 'Next&nbsp;<span class="right"></span>',
            finish: 'Next&nbsp;<span class="right"></span>'
        }
    });

    // PALETTE SELECTION
    $('.con-select.con-palettes .btn-selection-choice').find('.choice-icon').hide();
    $('.con-select.con-palettes .btn-selection-choice').click(function() {
        $(this).closest('.con-select').find('.choice-icon').removeClass('selected');
        $(this).find('.choice-icon').addClass('selected');
        $(this).closest('.con-select').find('h6').removeClass('bgc-red').addClass('bgc-dark');
        $(this).find('h6').removeClass('bgc-dark');
        $(this).find('h6').addClass('bgc-red');
    });

    $('.con-select.con-palettes .btn-selection-choice.palette-color').click(function() {
        $(this).closest('li').find('a').hide();
        $(this).closest('li').find('a.modal-edit-palette-color').show();
    });

    $('.con-select.con-palettes .btn-selection-choice.palette-pattern').click(function() {
        $(this).closest('li').find('a').hide();
        $(this).closest('li').find('a.modal-edit-palette-pattern').show();
    });


    $('.con-select.con-palettes .btn-selection-choice.palette-color .choice-icon').each(function(){
        if ($(this).hasClass('selected')) {
            $(this).closest('li').find('a').hide();
            $(this).closest('li').find('a.modal-edit-palette-color').show()
        }
        else
            $(this).closest('li').find('a').hide();
            $(this).closest('li').find('a.modal-edit-palette-pattern').show();
    });

    // SINGLE SELECTION
    $('.con-select .btn-selection-choice').click(function() {
        $(this).closest('.con-select').find('.btn-selection-choice').removeClass('uk-active');
        $(this).addClass('uk-active');
    });

    // TOGGLE-CHOOSE-SIZE
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


    // TOGGLE-VIEW-HIDE
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


    // ADD-APPLICATION
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




    $('.btn-bt-0').click(function() {
        $(this).closest('div').removeClass('uk-active');
        $('.left-nav div div').removeClass('uk-active');
        $('.left-nav div div').first().addClass('uk-active');
    });


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
});

// fonts
// fontsize
// font case
// itilize
// Icons
//
//
// header

// active button tab
// news letter