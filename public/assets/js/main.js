$(function() {
    var modsJson = JSON.stringify($.getJSON('mods.json'));
    var options = {
        minMatchCharLength: 3,
        location: 1,
        distance: 100,
        keys: ["mcmod.name", "mcmod.tags"],
        shouldSort: true
    };
    var fuse = new Fuse(modsJson, options);
    $('#searchbar').on('keyup', function () {
        let result = fuse.search($(this).val());
        console.log("val: "+$(this).val()+"; result: "+result.length);
        // Output it
        let resultdiv = $('ul.searchresults');
        if (result.length === 0) {
            // Hide results
            resultdiv.hide();
        } else {
            // Show results
            resultdiv.empty();
            for (let item in result.slice(0,4)) {
                let searchitem = '<li><a href="/' + result[item].path + '">' + result[item].title + '</a></li>';
                resultdiv.append(searchitem);
            }
            resultdiv.show();
        }
    });
});