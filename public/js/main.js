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
            var keyword = document.getElementsByClassName('searchbar__input')[0].value;
            var result = fuse.search(keyword);
            console.log(result);
        });

}, false);