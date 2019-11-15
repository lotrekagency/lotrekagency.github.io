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

    fuse = new Fuse(projects, options);

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
                        <picture class="item__logo" style="` + (library[i].img ? 'display: block;' : 'display: none;') + `">
                            <img src="` + library[i].img + `" alt="" class="item__logo__img">
                        </picture>

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
