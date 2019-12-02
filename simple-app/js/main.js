let app = new Framework7({
    root: "#app",
    name: "CarPay",
    id: "com.lj.carpay",
    theme: "ios",
    routes: [
        {
            path: "/",
            componentUrl: "pages/home.html"
        },
        {
            path: "/about/",
            componentUrl: "pages/about.html"
        }
    ],
});

setTimeout(function () {
    app.picker.create({
        inputEl: '#my-picker-device',
        renderToolbar: function () {
            return '<div class="toolbar">' +
                '<div class="toolbar-inner">' +
                '<div class="left">' +
                '<a href="#" disable="true" class="link toolbar-randomize-link"></a>' +
                '</div>' +
                '<div class="right">' +
                '<a href="#" class="link sheet-close popover-close">完成</a>' +
                '</div>' +
                '</div>' +
                '</div>';
        },
        cols: [
            {
                textAlign: 'center',
                values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
            }
        ]
    });
},3000);
