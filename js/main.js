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
        // $(this).find('h6').addClass('bgc-red');
        // $(this).find('h6').addClass('bgc-dark');
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

    $('.con-select .btn-selection-choice').click(function() {
        $(this).closest('.con-select').find('.btn-selection-choice').removeClass('uk-active');
        $(this).addClass('uk-active');
        if ($(this).hasClass('btn-choose-numbers-colors-none')) {
            $(this).closest('li').find('.con-choose-numbers-colors').hide();
        }
        else
            $(this).closest('li').find('.con-choose-numbers-colors').show();
    });

    $('.con-select .btn-selection-choice.btn-choose-numbers-colors-none').each(function(){
        if ($(this).hasClass('uk-active')) {
            $(this).closest('li').find('.con-choose-numbers-colors').hide();
        }
        else
            $(this).closest('li').find('.con-choose-numbers-colors').show();
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