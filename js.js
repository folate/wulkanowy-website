// select html element by class
var element = document.querySelector('header');

window.addEventListener('scroll', function () {
    // get element's size and position
    var position = element.getBoundingClientRect();
    // get element's position top
    var elmpos = position.top * -1;
    // get element's height
    var dim = position.height / 8;

    if (elmpos >= dim) {
        $("nav").css({'background-color': 'rgba(22, 22, 22, 1)', 'border-bottom': '1px solid rgba(177, 177, 177, 0.2)', 'color': 'rgba(255, 255, 255, 1)', 'fill': 'rgba(255, 255, 255, 1)'});
        $(".nav-items ul li a, .nav-items .logo a svg g, .nav-items .logo a svg g path, .nav-items .logo a svg path, .nav-items .logo a svg, .nav-items .logo a p").css({'fill': 'rgba(255, 255, 255, 1)', });
    } 
    else {
        $("nav").css({'background-color': 'rgba(22, 22, 22, 0)', 'border-bottom': '1px solid rgba(177, 177, 177, 0)'});
        $(".nav-items ul li a, .nav-items .logo a svg g, .nav-items .logo a svg g path, .nav-items .logo a svg path, .nav-items .logo a svg, .nav-items .logo a p").css({'fill': 'rgba(255, 255, 255, 1)', });
    }
});

// collapsable table shit..
//var coll = document.getElementsByClassName("collapse-table");
//var i;

//for (i = 0; i < coll.length; i++) {
//  coll[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var content = this.nextElementSibling;
//    if (content.style.maxHeight){
//      content.style.maxHeight = null;
//    } else {
//      content.style.maxHeight = content.scrollHeight + "px";
//    } 
//  });
//}


function GetLatestReleaseInfo() {
  $.getJSON("https://api.github.com/repos/wulkanowy/wulkanowy/releases/latest").done(function(release) {
    var asset = release.assets[0];
    var oneHour = 60 * 60 * 1000;
    var oneDay = 24 * oneHour;
    var dateDiff = new Date() - new Date(asset.updated_at);
    var timeAgo;
    //if (dateDiff < oneDay) {
    //  timeAgo = (dateDiff / oneHour).toFixed(1) + " godzin temu";
    //} else {                                                            <= could be usefull later
    //  timeAgo = (dateDiff / oneDay).toFixed(0) + " dni temu";
    //}
    var releaseInfo = timeAgo;
    $(".github-apk").attr("href", asset.browser_download_url);
    $(".ver").text(release.tag_name);
    //$(".release-time").text(releaseInfo);
    $(".dl-link").attr("href", release.html_url);
  });
}
GetLatestReleaseInfo();


$(document).ready(function() {
  document.getElementById('copyright-year').appendChild(
    document.createTextNode(
      new Date().getFullYear()
    )
  );
});
