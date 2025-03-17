import '../css/main.scss'
import Fuse from 'fuse.js'

var projects = [
    {
        title: 'Camomilla',
        description: '🍵 Our relaxing development kit for any kind of web based projects.',
        img: 'https://avatars.githubusercontent.com/u/76774490',
        tags: ['Django', 'Python', 'CMS'],
        github: 'https://github.com/camomillacms/camomilla-core',
        docs: 'https://camomillacms.github.io/camomilla-core/',
    },
    {
        title: 'Mapo',
        description: '🥭 Our Nuxt module to simplify the making of administration panels, and authenticated web applications.',
        img: 'https://avatars.githubusercontent.com/u/24320781',
        tags: ['VueJS', 'NuxtJS'],
        github: 'https://github.com/lotrekagency/mapo',
        docs: 'https://github.com/lotrekagency/mapo',
    },
    {
        title: 'Lotrek UI',
        description: '🏗 A collection of ready-to-use UI components written in HTML & CSS',
        img: 'https://github.com/lotrekagency/lotrek-UI/blob/main/static/assets/images/lotrek-ui-logo.svg',
        tags: ['HTML', 'CSS', 'layouts'],
        github: 'https://github.com/lotrekagency/lotrek-UI',
        docs: 'https://lotrekagency.github.io/lotrek-UI/',
    },
    {
        title: 'VagaJS',
        description: 'A simple and straightforward animation library to enable CSS based animations on scroll, as soon as the elements become visible by the user.',
        img: 'https://avatars.githubusercontent.com/u/24320781',
        tags: ['JS', 'CSS', 'Animation'],
        github: 'https://github.com/lotrekagency/vagajs',
        docs: 'https://lotrekagency.github.io/vagajs/',
    },
    {
        title: 'Piuma Project',
        description: '🌈 Simple and fast image optimizer service you can host on your machine',
        img: 'https://raw.githubusercontent.com/astagi/mystatics/master/piuma/Piuma_rounded_1.png',
        tags: ['Go', 'Various languages'],
        github: 'https://github.com/piumaio/',
        docs: 'https://github.com/piumaio/piuma/blob/master/README.md',
    },
    {
        title: 'Doaker',
        description: '🍫 Our internal set of utilities to manage Docker containers',
        img: 'https://images.emojiterra.com/google/android-12l/512px/1f36b.png',
        tags: ['Docker', 'Bash'],
        github: 'https://github.com/lotrekagency/doacker',
        docs: 'https://github.com/lotrekagency/doacker/blob/master/README.md',
    },
    {
        title: 'Emojiflag',
        description: "🇮🇹 Emoji country flags for language codes and LCID's",
        tags: ['Python', 'Library'],
        github: 'https://github.com/lotrekagency/emojiflag',
        docs: 'https://github.com/lotrekagency/emojiflag/blob/master/README.md',
    },
    {
        title: 'DjRobots',
        description: '🤖 Our internal utility to easily have robots.txt',
        tags: ['Python', 'Library', 'Django'],
        github: 'https://github.com/lotrekagency/djrobots',
        docs: 'https://github.com/lotrekagency/djrobots/blob/master/README.md',
    },
    {
        title: 'Doria',
        description: "🍪 The cookie box loved by cookies' fanatics",
        tags: ['Javascript','CSS','HTML'],
        github: 'https://github.com/lotrekagency/doria',
        docs: 'https://github.com/lotrekagency/doria/blob/master/README.md',
    },
    {
        title: 'Cody',
        description: "🦊 Execute deploy on your machine using Gitlab Webhooks",
        tags: ['Python', 'DevOps'],
        github: 'https://github.com/lotrekagency/cody',
        docs: 'https://github.com/lotrekagency/cody/blob/master/README.md',
    },
    {
        title: 'Mailupy',
        description: "💌 Yet another MailUp Python client",
        tags: ['Python', 'Library'],
        github: 'https://github.com/lotrekagency/mailupy',
        docs: '/readthedocs/mailupy_docs/',
    },
    {
        title: 'WC Price Changer',
        description: "💸  WooCommerce Plugin to manage prices in WooCommerce",
        tags: ['WordPress', 'PHP'],
        github: 'https://github.com/lotrekagency/wc-price-changer',
        docs: 'https://github.com/lotrekagency/wc-price-changer/blob/master/README.md',
    },
    {
        title: 'AC⚡️DC',
        description: "⚡️ Active Campaign DeepData Companion Microservice for facilitating deep data integration",
        tags: ['Python', 'Service', 'Django'],
        github: 'https://github.com/lotrekagency/acdc',
        docs: 'https://github.com/lotrekagency/acdc/blob/master/README.md',
    },
    {
        title: 'Handyman',
        description: "🔩 The best Lotrèk's friend for backups, monitoring and 🍻",
        tags: ['Python', 'Service', 'Django'],
        github: 'https://github.com/lotrekagency/handyman',
        docs: 'https://github.com/lotrekagency/handyman/blob/master/README.md',
    },
    {
        title: 'Vue Dark Mode Switcher',
        description: "🌗 Really simple dark mode switcher in Vue",
        tags: ['Vue',],
        github: 'https://github.com/lotrekagency/vue-dark-mode-switcher',
        docs: 'https://lotrekagency.github.io/vue-dark-mode-switcher/',
    },
    {
        title: 'DjSuperadmin',
        description: "✍🏻 Edit contents directly on your page with Django",
        tags: ['Python', 'Library', 'Django'],
        github: 'https://github.com/lotrekagency/djsuperadmin',
        docs: 'https://github.com/lotrekagency/djsuperadmin/blob/master/README.md',
    },
    {
        title: 'DjLotrèk',
        description: "📀 Our beloved Django utilities library",
        tags: ['Python', 'Library', 'Django'],
        github: 'https://github.com/lotrekagency/djlotrek',
        docs: 'https://github.com/lotrekagency/djlotrek/blob/master/README.md',
    },
    {
        title: 'Django Google Site Verification',
        description: "✅ Our internal module to add Google Site Verification",
        tags: ['Python', 'Library', 'Django'],
        github: 'https://github.com/lotrekagency/django-google-site-verification',
        docs: 'https://github.com/lotrekagency/django-google-site-verification/blob/master/README.md',
    },
    {
        title: 'DjLD',
        description: "🏰 Structured data with Django",
        tags: ['Python', 'Library', 'Django'],
        github: 'https://github.com/lotrekagency/djld',
        docs: 'https://github.com/lotrekagency/djld/blob/master/README.md',
    },
    {
        title: 'PyWoo',
        description: "💳 Python Client for WooCommerce",
        tags: ['Python', 'Library'],
        github: 'https://github.com/lotrekagency/pywoo',
        docs: 'https://github.com/lotrekagency/pywoo/blob/master/README.md',
    },
    {
        title: 'Django Huey Logger',
        description: "🕰 A simple Django app to let you know if huey tasks are working without errors.",
        tags: ['Python', 'Library', 'Django'],
        github: 'https://github.com/lotrekagency/django-huey-logger',
        docs: 'https://github.com/lotrekagency/django-huey-logger/blob/master/README.md',
    },
    {
        title: 'Doacker',
        description: "🐳 Our internal set of utilities to manage Docker containers",
        tags: ['Docker', 'Bash'],
        github: 'https://github.com/lotrekagency/doacker',
        docs: 'https://github.com/lotrekagency/doacker/blob/master/README.md',
    },
    {
        title: 'WC XML Catalog',
        description: "🛍 Microservice for generating xml catalogs from WooCommerce",
        tags: ['Python', 'Service'],
        github: 'https://github.com/lotrekagency/wc-xml-catalog',
        docs: 'https://github.com/lotrekagency/wc-xml-catalog/blob/master/README.md',
    },
    {
        title: 'NG Lotrèk',
        description: "🍜 A variety of pipes, components, attribute directives and services.",
        tags: ['Angular', 'Library'],
        github: 'https://github.com/lotrekagency/nglotrek',
        docs: 'https://github.com/lotrekagency/nglotrek/blob/master/README.md',
    },
    {
        title: 'Sidro Carousel',
        description: "🍏 Carousel with thumbnails Vue component",
        tags: ['Vue',],
        github: 'https://github.com/lotrekagency/sidro-carousel',
        docs: 'https://lotrekagency.github.io/sidro-carousel/',
    },
    {
        title: 'Cattp',
        description: "🐱 Django responses with cats from https://http.cat",
        tags: ['Python', 'Library'],
        github: 'https://github.com/lotrekagency/cattp',
        docs: 'https://github.com/lotrekagency/cattp/blob/master/README.md',
    },

    {
        title: 'Lotree',
        description: "🌲 Animations for our Xmas tree made with Arduino",
        tags: ['Arduino', 'C++'],
        github: 'https://github.com/lotrekagency/lotree',
        docs: 'https://github.com/lotrekagency/lotree/blob/master/README.md',
    },
    {
        title: 'NYR Generator',
        description: "🎊 New Year's Resolutions generator for lazy people",
        tags: ['Bottle', 'Service', 'Python'],
        github: 'https://github.com/lotrekagency/pyphoton',
        docs: 'https://github.com/lotrekagency/pyphoton/blob/master/README.md',
    },
    {
        title: 'Taiga Sprint Printer',
        description: "📃 A simple CLI tool for printing your sprints in Taiga",
        tags: ['Tool', 'Management'],
        github: 'https://github.com/lotrekagency/lotree',
        docs: 'https://github.com/lotrekagency/lotree/blob/master/README.md',
    },
    {
        title: 'jQuery Plugin Boilerplate',
        description: "🍲 A tool for generating jQuery plugins boilerplate code",
        tags: ['Tool', 'Python'],
        github: 'https://github.com/lotrekagency/jquery-plugin-boilerplate',
        docs: 'https://github.com/lotrekagency/jquery-plugin-boilerplate/blob/master/README.md',
    },
    {
        title: 'PyPhoton',
        description: "🗺 Light Komoot Photon client written in Python",
        tags: ['Python', 'Library'],
        github: 'https://github.com/lotrekagency/pyphoton',
        docs: 'https://github.com/lotrekagency/pyphoton/blob/master/README.md',
    },
    {
      title: 'Vue Image Placeholder',
      description: "🌉 Vue Image Placeholder component",
      tags: ['Vue',],
      github: 'https://github.com/lotrekagency/vue-image-placeholder',
      docs: 'https://github.com/lotrekagency/vue-image-placeholder/blob/master/README.md',
    }
]

document.addEventListener("DOMContentLoaded", function (event) {
    var options = {
        shouldSort: true,
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title', 'author']
    };
    
    var fuse = new Fuse(projects, options);

    document.getElementsByClassName('searchbar__input')[0].addEventListener("keydown",
        function() {
            setTimeout(function(){
                var keyword = document.getElementsByClassName('searchbar__input')[0].value;

                if(keyword != "") {
                    var result = fuse.search(keyword);
                    document.getElementById('item-wrapper').innerHTML = "";
                    printItems(result);
                } else if(keyword == "") {
                    document.getElementById('item-wrapper').innerHTML = "";
                    printItems(projects);
                }
            }, 150);
        }
    );

    function printItems (library) {
        for(var i = 0; i < library.length; i++) {

            if(library[i].title !== "") {
                var htmltags = '';

                for(var j = 0; j < library[i].tags.length; j++) {
                    if(library[i].tags[j] !== "") {
                        htmltags += '<span class="item__label">'+library[i].tags[j]+'</span>';
                    }
                }

                var item = `
                <!--item-->
                <article class="item">

                    <div class="item__inner">
                        <div class="item__main">
                            <header class="item__head">
                                <h3 class="item__title">`+library[i].title+`</h3>
                            </header>

                            <div class="item__body">
                                <div class="item__labels">` + htmltags + `</div>
                                <p class="item__descr">
                                    `+library[i].description+`
                                </p>
                            </div>
                        </div>
                        <picture class="item__logo" style="` + (library[i].img ? 'display: block;' : 'display: none;') + `">
                            <img src="` + library[i].img + `" alt="" class="item__logo__img">
                        </picture>
                    </div>

                    <div class="item__foot">
                        <a href="`+library[i].docs+`" class="item__foot__btn">Documentation</a>
                        <a href="`+library[i].github+`" class="item__foot__link">GitHub <span class="item__link__icon"></span></a>
                    </div>

                </article><!--/item-->
                `;
                document.getElementById('item-wrapper').insertAdjacentHTML('beforeend', item);
            }
        }
    }

    printItems(projects);

}, false);
