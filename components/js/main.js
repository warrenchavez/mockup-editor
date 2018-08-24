jQuery(function($) {

    // function productItems (){

        var data =
            {
                all: [
                    {
                        name: '3000-1',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-2',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-3',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-4',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-5',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-6',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-7',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-8',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png',
                        price: '86.00'
                    }
                ],
                twoButtons: [
                    {
                        name: '3000-1',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/e2d11662bd4a544a557e21893da67277.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-2',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/e2d11662bd4a544a557e21893da67277.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-3',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/e2d11662bd4a544a557e21893da67277.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-4',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/e2d11662bd4a544a557e21893da67277.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-5',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/e2d11662bd4a544a557e21893da67277.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-6',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/e2d11662bd4a544a557e21893da67277.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-7',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/e2d11662bd4a544a557e21893da67277.png',
                        price: '86.00'
                    },
                    {
                        name: '3000-8',
                        img: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/e2d11662bd4a544a557e21893da67277.png',
                        price: '86.00'
                    }
                ],
                vNeck: [
                    {
                        name: '3000-1',
                        img: '',
                        price: '86.00'
                    },
                    {
                        name: '3000-2',
                        img: '',
                        price: '86.00'
                    },
                    {
                        name: '3000-3',
                        img: '',
                        price: '86.00'
                    },
                    {
                        name: '3000-4',
                        img: '',
                        price: '86.00'
                    },
                    {
                        name: '3000-5',
                        img: '',
                        price: '86.00'
                    },
                    {
                        name: '3000-6',
                        img: '',
                        price: '86.00'
                    },
                    {
                        name: '3000-7',
                        img: '',
                        price: '86.00'
                    },
                    {
                        name: '3000-8',
                        img: '',
                        price: '86.00'
                    }
                ],
            };

        var template = $('#all-products').html();
        var markup = Mustache.render(template, data);
        $('#m-all-products').html(markup);

        var template = $('#2-button').html();
        var markup = Mustache.render(template, data);
        $('#m-2-button').html(markup);
    // };

        var data =
            {
                logoActive: [
                    {
                        name:"136: Beavers_2",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Beavers_2/00585c46c4acd535948bae93.png'
                    },
                    {
                        name:"160: Bess_13",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Bees_13/29d9294061ff1b3a9c94db30.png'
                    },
                    {
                        name:"156: Bees_9",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Bees_9/fb64165e078cb5a51cdecbec.png'
                    },
                    {
                        name:"162: Bees_15",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Bees_15/183ef20c4c605d3a47a6cb6d.png'
                    },
                    {
                        name:"148: Bees_1",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Bees_1/826a848d3281e1e5cb962608.png'
                    },
                    {
                        name:"247: Duck_1",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Duck_1/04eb4d8010cc0a209a667143.png'
                    },
                    {
                        name:"248: Duck_2",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Duck_2/209b3e397aeeabc71a120314.png'
                    },
                    {
                        name:"249: Duck_3",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Duck_3/399326009fe075c211d8abea.png'
                    }
                ],
                logoArchive: [
                    {
                        name:"137: Beavers_3",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Beavers_3/ddb5886e0ba6d61aa108bc44.png'
                    },
                    {
                        name:"189: Bulldog_9",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Bulldog_9/10811cf29ca6cd7665c8ac72.png'
                    },
                    {
                        name:"182: Bulldog_2",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Bulldog_2/59cc873d2f8f47bf1898846c.png'
                    },
                    {
                        name:"191: Cardinal_2",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Cardinal_2/e3d436933b8246f95735cfd5.png'
                    },
                    {
                        name:"192: Cardinal_3",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Cardinal_3/a025c5d2fcd2197302ec5cff.png'
                    },
                    {
                        name:"193: Cardinal_4",
                        logo: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/materials/staging/Cardinal_4/a0d89abc2ac4b164adcab046.png'
                    }
                ],
            };

        var template = $('#logo-active').html();
        var markup = Mustache.render(template, data);
        $('#m-logo-active').html(markup);

        var template = $('#logo-archive').html();
        var markup = Mustache.render(template, data);
        $('#m-logo-archive').html(markup);

        var data =
            {applications: [
                    {app: '#2 Letters - Player Name'},
                    {app: '#3 Front Numbers'},
                    {app: '#1 Letters - Team Name'},
                    {app: '#5 Custom Logo - Bear'}
                ]};

        var template = $('#applications').html();
        var markup = Mustache.render(template, data);
        $('#m-applications').html(markup);

    function fabrics (){

        var data =
            {fabrics: [
                    {
                        name: 'Etx',
                        fabric: './img/fabric-texture.jpg',
                        description: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description2: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description3: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description4: 'Lorem ipsum dolor amet, asdasd consectetur.'
                    },
                    {
                        name: 'Extxx',
                        fabric: './img/fabric-texture-2.jpg',
                        description: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description2: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description3: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description4: 'Lorem ipsum dolor amet, asdasd consectetur.'
                    },
                    {
                        name: 'Etxxx',
                        fabric: './img/fabric-texture-3.jpg',
                        description: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description2: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description3: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description4: 'Lorem ipsum dolor amet, asdasd consectetur.'
                    },
                    {
                        name: 'Etxxxx',
                        fabric: './img/fabric-texture-4.jpg',
                        description: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description2: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description3: 'Lorem ipsum dolor amet, asdasd consectetur.',
                        description4: 'Lorem ipsum dolor amet, asdasd consectetur.'
                    },
                ]};

        var template = $('#fabrics').html();
        var markup = Mustache.render(template, data);
        $('#m-fabrics').html(markup);
    };

    function preview (){

        var data =
            {previewLinks: [
                    {links: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/984010a0a226dc207ee5430a1e00a1b7.png'},
                    {links: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/ff11e98804c31eace338c140fc3b4e2f.png'},
                    {links: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/decdfb5513247463255f68634de2bcfb.png'},
                    {links: 'https://s3-us-west-2.amazonaws.com/uniformbuilder/uploads/staging/801f4aaa30cc9cb9f960d7c04ece745c.png'}
                ]};

        var template = $('#preview-pane-thumb-nav').html();
        var markup = Mustache.render(template, data);
        $('#m-preview-pane-thumb-nav').html(markup);

        var template = $('#preview').html();
        var markup = Mustache.render(template, data);
        $('#m-preview').html(markup);
    };

    function singleSelect (){
        $('.con-select .btn-selection-choice').click(function () {
            $(this).closest('.con-select').find('.btn-selection-choice').removeClass('uk-active');
            $(this).addClass('uk-active');
        });
    };

    function toggleBtnEditPattenColor (){

        $('.con-select.con-palettes.w-btn-toggle .btn-selection-choice').click(function() {
            $(this).addClass('uk-active');
            if ($(this).hasClass('palette-pattern')) {
                $(this).closest('.con-select.con-palettes ').find('.modal-edit-palette-pattern').show();
            }
            else
                $(this).closest('.con-select.con-palettes ').find('.modal-edit-palette-pattern').hide();
        });
        $('.con-select.con-palettes.w-btn-toggle .btn-selection-choice.palette-pattern').each(function(){
            if ($(this).hasClass('uk-active')) {
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

    function paletteColor (){
        var data =
            {
                paletteColor:[
                    {color:'black'},
                    {color:'lightBlue'},
                    {color:'charcoalGray'},
                    {color:'maroon'},
                    {color:'green'},
                    {color:'gold'},
                    {color:'grey'},
                    {color:'silverGray'},
                    {color:'green-2'},
                    {color:'maroonBrown'},
                    {color:'darkBlue'},
                    {color:'orange'},
                    {color:'purple'},
                    {color:'cardinal'},
                    {color:'cornBlue'},
                    {color:'seminol'},
                    {color:'creamYellow'},
                    {color:'white'},
                    {color:'neonPink'}
                ]
            };

        var template = '' +
            '{{#paletteColor}}\n' +
            '<div>\n' +
            '<button class="uk-inline box-palette btn-selection-choice palette-color">\n' +
            '<div class="palette palette-c-{{color}}"></div>\n' +
            '<div class="uk-overlay-primary uk-position-cover choice-icon bdr-lightGray">\n' +
            '<span class="icon icon-check uk-text-bold uk-position-center"></span>\n' +
            '</div>\n' +
            '</button>\n' +
            '</div>\n' +
            '{{/paletteColor}}';
        var markup = Mustache.render(template, data);
        $('.m-palette-color').html(markup);
    };

    function palettePattern (){
        var data =
            {
                palettePattern: [
                    {pattern: 'camo'},
                    {pattern: 'check'},
                    {pattern: 'diamonds'},
                    {pattern: 'digital-camo'},
                    {pattern: 'distresser'},
                    {pattern: 'fiber'},
                    {pattern: 'lockdown'},
                    {pattern: 'pixel-fade-body'},
                    {pattern: 'pixel-fade-sleeve'},
                    {pattern: 'quake'},
                    {pattern: 'score'},
                    {pattern: 'thick-stripe'},
                    {pattern: 'thin-stripes'},
                    {pattern: 'trips-arrow'},
                    {pattern: 'upper-stripes'},
                    {pattern: 'upper-stripes-body'},
                    {pattern: 'wave-stripe'},
                    {pattern: 'wave-stripes'},
                    {pattern: 'gradient-2'}
                ]
            };

        var template = '' +
            '{{#palettePattern}}\n' +
            '<div>\n' +
            '<button class="uk-inline box-palette btn-selection-choice palette-pattern">\n' +
            '<div class="palette palette-{{pattern}}"></div>\n' +
            '<div class="uk-overlay-primary uk-position-cover choice-icon bdr-lightGray">\n' +
            '<span class="icon icon-check uk-text-bold uk-position-center"></span>\n' +
            '</div>\n' +
            '</button>\n' +
            '</div>\n' +
            '{{/palettePattern}}';
        var markup = Mustache.render(template, data);
        $('.m-palette-pattern').html(markup);
    };

    function pipings (){
        var data =
            {
                Titles: [
                    {titleName: 'Neck Piping'},
                    {titleName: 'Yoke Piping'},
                    {titleName: 'Set-In Piping'},
                    {titleName: 'Sleeve Piping 1" Up'},
                    {titleName: 'End of Sleeve Piping'}
                ]
            };

        var template = $('#pipings').html();
        var markup = Mustache.render(template, data);
        $('#m-pipings-list').html(markup);
    };

    function accents (){
        var data =
            {
                accents: [
                    {accent: 'http://customizer.prolook.com/images/sidebar/no-accent.png'},
                    {accent: 'http://customizer.prolook.com/images/sidebar/outlined.png'},
                    {accent: 'http://customizer.prolook.com/images/sidebar/single_outline_with_shadow.png'},
                    {accent: 'http://customizer.prolook.com/images/sidebar/drop_shadow.png'},
                    {accent: 'http://customizer.prolook.com/images/sidebar/no-accent.png'}
                ]
            };

        var template = ''+
            '{{#accents}}\n' +
            '<div>\n' +
            '<button class="uk-inline bgc-transparent box-palette btn-selection-choice">\n' +
            '<div class=" bdr-thin bdr-gray">\n' +
            '<img src="{{accent}}" uk-img>\n' +
            '</div>\n' +
            '<div class="uk-position-cover choice-icon bdr-lightGray">\n' +
            '<span uk-icon="icon: check; ratio: 1.5" class="uk-text-bold uk-position-center uk-overlay-primary "></span>\n' +
            '</div>\n' +
            '</button>\n' +
            '</div>\n' +
            '{{/accents}}'
        var markup = Mustache.render(template, data);
        $('.m-accents').html(markup);
    };

    function layouts (){
        var data =
            {
                layouts: [
                    {layout: './img/font-layout-plain.png'},
                    {layout: './img/font-layout-arc.png'}
                ]
            };

        var template = ''+
            '{{#layouts}}\n' +
            '<div>\n' +
            '<button class="uk-inline bgc-transparent box-palette btn-selection-choice">\n' +
            '<div class=" bdr-thin bdr-gray">\n' +
            '<img src="{{layout}}" uk-img>\n' +
            '</div>\n' +
            '<div class="uk-position-cover choice-icon selected bdr-lightGray">\n' +
            '<span uk-icon="icon: check; ratio: 1.5" class="uk-text-bold uk-position-center uk-overlay-primary"></span>\n' +
            '</div>\n' +
            '</button>\n' +
            '</div>\n' +
            '{{/layouts}}'
        var markup = Mustache.render(template, data);
        $('.m-layouts').html(markup);
    };

    function previewLogo (){

        var data =
            {previewLogo: [
                    {logo: './img/branding-right-chest.jpg'},
                    {logo: './img/branding-left-sleeve.jpg'},
                    {logo: './img/branding-back.jpg'}
                ]};

        var template = $('#preview-logo').html();
        var markup = Mustache.render(template, data);
        $('#m-preview-logo').html(markup);
    };








    $('.btn-bt-0').click(function() {
        $(this).closest('div').removeClass('uk-active');
        $('.left-nav div div').removeClass('uk-active').first().addClass('uk-active');
    });

    $( "#con-preview-pane" ).load( "preview-pane.html"  ,function() {
        preview();
    });

    $( "#m-fabric-selection" ).load( "m-fabric-selection.html" ,function() {
        singleSelect();
        fabrics();
    });

    $( "#m-base-color-selection" ).load( "m-base-color-selection.html",function(){
        paletteColor();
        palettePattern();
        singleSelect();
        toggleBtnEditPattenColor();
    });

    $( "#m-sleeve-inserts" ).load( "m-sleeve-inserts.html",function(){
        paletteColor();
        palettePattern();
        singleSelect();
        toggleBtnEditPattenColor();
    });

    $( "#m-pipings" ).load( "m-pipings.html",function(){
        singleSelect();
        pipings();
        toggleConChooseNumbersColors();
    });

    $( "#m-decorations-letters" ).load( "m-decorations-letters.html",function(){
        paletteColor();
        toggleBtnEditPattenColor();
        singleSelect();
        toggleConInputObject();
        toggleConAddApplication();
        sliders();
        accents();
        layouts();
    });

    $( "#m-decorations-numbers" ).load( "m-decorations-numbers.html",function(){
        paletteColor();
        toggleBtnEditPattenColor();
        singleSelect();
        toggleConInputObject();
        toggleConAddApplication();
        sliders();
        accents();
    });

    $( "#m-decorations-mascots" ).load( "m-decorations-mascots.html",function(){
        paletteColor();
        toggleBtnEditPattenColor();
        singleSelect();
        toggleConAddApplication();
        sliders();
    });

    $( "#m-richardson-logo" ).load( "m-richardson-logo.html",function(){
        previewLogo();
    });
});