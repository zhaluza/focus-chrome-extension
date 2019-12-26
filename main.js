// Make a single div with both elements inside

// YouTube
var ytContent = $('#content');
var ytRemove = $('#page-manager');
if (ytContent) {
  ytRemove.remove();
  ytContent.append(
    '<div class="center-div"><p class="center text">Get to work!</p><img class="cat-pic" src="https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="an adorable cat" /></div>'
  );
}

// Facebook
var fbContent = $('#contentArea');
var fbParent = fbContent.parent();
var fbAds = $('#pagelet_ego_pane');
if (fbContent) {
  fbParent.append(
    '<div class="center-div"><p class="center text">Get to work!</p><img class="cat-pic" src="https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="an adorable cat" /></div>'
  );
  fbContent.remove();
  fbAds.remove();
}

// Reddit
var rdContent = $('#2x-container');
var rdParent = rdContent.parent();
if (rdContent) {
  rdParent.append(
    '<div class="center-div"><p class="center text">Get to work!</p><img class="cat-pic" src="https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="an adorable cat" /></div>'
  );
  rdContent.remove();
}
