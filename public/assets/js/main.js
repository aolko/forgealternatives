var modsJson = $.getJSON('mods.json');
var options = {
    keys: ["mcmod.name", "mcmod.tags"],
    minMatchCharLength: 3,
    shouldSort: true
};
var fuse = new Fuse(modsJson, options);
$(function() {
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