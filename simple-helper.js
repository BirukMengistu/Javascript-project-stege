var Helper = {};

Helper.getValue = function (tag) {
    return document.getElementById(tag).value;
}

Helper.setValue = function (tag, value) {
    document.getElementById(tag).value = value;
}

Helper.setHtml = function (tag, html) {
    document.getElementById(tag).innerHTML = html;
}

Helper.getHtml = function (tag) {
    return document.getElementById(tag).innerHTML;
}

Helper.show = function (tag) {
    document.getElementById(tag).style.display="block";
}

Helper.hide = function (tag) {
    document.getElementById(tag).style.display="none";
}

Helper.onClick = function (tag, action) {
    document.getElementById(tag).addEventListener("click", action);
}
