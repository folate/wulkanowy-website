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
        $(".navbar").addClass("scrolled");
    } 
    else {
        $(".navbar").removeClass("scrolled");
    }
});

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

var coll = document.getElementsByClassName("faq-collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.parentNode.classList.remove("faq-dec");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.parentNode.classList.add("faq-dec");
    }
  });
}