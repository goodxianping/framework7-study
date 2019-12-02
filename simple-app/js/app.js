let app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    theme: 'auto',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        // Load via Ajax
        {
            path: '/about/',
            componentUrl: "./pages/about.html"
        },
        // Dynamic page from content
        {
            path: '/news/',
            content: `
      <div class="page">
        <div class="page-content">
          <div class="block">
            <p>This page created dynamically</p>
          </div>
        </div>
      </div>
    `,
        },
        // By page name (data-name="services") presented in DOM
        {
            path: '/services/',
            pageName: 'services',
        },
        // By page HTMLElement
        {
            path: '/contacts/',
            el: document.querySelector('.page[data-name="contacts"]'),
        },
        // By template
        {
            path: '/template/:name/',
            template: `
              <div class="page">
                <div class="page-content">
                  <div class="block">
                    <p>Hello {{$route.params.name}}</p>
                  </div>
                </div>
              </div>`,
        },
        // By template URL
        {
            path: '/blog/',
            templateUrl: './pages/blog.html',
        },
        // By component
        {
            path: '/posts/',
            component: {
                // look below
            },
        },
        // By component url
        {
            path: '/post/:id/',
            componentUrl: './pages/component.html',
        },
        // Async
        {
            path: '/something/',
            async: function (routeTo, routeFrom, resolve, reject) {
                // Requested route
                console.log(routeTo);
                // Get external data and return template7 template
                this.app.request.json('http://some-endpoint/', function (data) {
                    resolve(
                        // How and what to load: template
                        {
                            template: '<div class="page">{{users}}</div>'
                        },
                        // Custom template context
                        {
                            context: {
                                users: data,
                            },
                        }
                    );
                });
            }
        }
    ],
    on: {
        pageInit: function (page) {
            for (let attr in page) {
                console.log("page[" + attr + "]:" + page[attr]);
            }
        },
        pageAfterIn: function (popup) {
            console.log("pageAfterIn: " + popup);
        }
    }
});

let mainView = app.views.create('.view-main');

var pickerDevice = app.picker.create({
    inputEl: '#demo-picker-device',
    renderToolbar: function () {
        return '<div class="toolbar">' +
            '<div class="toolbar-inner">' +
            '<div class="left">' +
            '<a href="#" class="link toolbar-randomize-link"></a>' +
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
