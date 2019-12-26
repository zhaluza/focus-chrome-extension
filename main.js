function getRandomNum(min, max) {
  var result = Math.random() * (max - min + min);
  return Math.floor(result);
}

// YouTube
var ytContent = $('#content');
var ytRemove = $('#page-manager');
if (ytContent) {
  ytRemove.remove();
  $.get('https://unsplash.it/list', function(result) {
    var randomNum = getRandomNum(0, result.length);
    var randomId = result[randomNum].id;
    var randomImg = `https://unsplash.it/1200/800?image=${randomId}`;
    ytContent.append(
      `<div class="center-div"><p class="center text">Get to work!</p><img class="random-pic" src=${randomImg} alt="random image!" /></div>`
    );
  });
}

// Facebook
var fbContent = $('#contentArea');
var fbParent = fbContent.parent();
var fbAds = $('#pagelet_ego_pane');
if (fbContent) {
  fbContent.remove();
  fbAds.remove();
  $.get('https://unsplash.it/list', function(result) {
    var randomNum = getRandomNum(0, result.length);
    var randomId = result[randomNum].id;
    var randomImg = `https://unsplash.it/1200/800?image=${randomId}`;
    fbParent.append(
      `<div class="center-div"><p class="center text">Get to work!</p><img class="random-pic" src=${randomImg} alt="random image!" /></div>`
    );
  });
}

// Reddit
var rdContent = $('#2x-container');
var rdParent = rdContent.parent();
if (rdContent) {
  rdContent.remove();
  $.get('https://unsplash.it/list', function(result) {
    var randomNum = getRandomNum(0, result.length);
    var randomId = result[randomNum].id;
    var randomImg = `https://unsplash.it/1200/800?image=${randomId}`;
    rdParent.append(
      `<div class="center-div"><p class="center text">Get to work!</p><img class="random-pic" src=${randomImg} alt="random image!" /></div>`
    );
  });
}
