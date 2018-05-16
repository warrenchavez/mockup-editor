jQuery(function($) {
    $("#wizard").steps({
        headerTag: "a",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical",
        enableAllSteps: "true",
        labels: {
            previous: '<span class="left"></span>&nbsp;Previous',
            next: 'Next&nbsp;<span class="right"></span>'
        }
    });
    $("#preview-pane").steps({
        headerTag: "a",
        bodyTag: "section",
        // transitionEffect: "slideLeft",
        stepsOrientation: "vertical",
        enableAllSteps: "true",
        labels: {
            previous: '<span class="left"></span>&nbsp;Previous',
            next: 'Next&nbsp;<span class="right"></span>'
        }
    });
});