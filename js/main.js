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



    // $('.con-palettes .box-palette').find('.palette-toggle').hide();
    // $('.con-palettes .box-palette').click(function() {
    //     $(this).closest('.con-palettes').find('.palette-toggle').removeClass('palette-toggle-show');
    //     $(this).find('.palette-toggle').addClass('palette-toggle-show');
    //     // $(this).find('h6').addClass('bgc-dark');
    //     // $(this).find('h6').addClass('bgc-red');
    // });



    $('.con-select .btn-selection-choice').find('.choice-icon').hide();
    $('.con-select .btn-selection-choice').click(function() {
        $(this).closest('.con-select').find('.choice-icon').removeClass('selected');
        $(this).find('.choice-icon').addClass('selected');
        // $(this).find('h6').addClass('bgc-red');
        // $(this).find('h6').addClass('bgc-dark');
        $(this).closest('.con-select').find('.choice-icon').removeClass('selected');
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