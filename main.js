// YouTube
const ytContent = document.getElementById('contents');
if (ytContent) {
  ytContent.parentNode.removeChild(ytContent);
}

// FaceBook
const fbContent = document.getElementById('contentArea');
if (fbContent) {
  fbContent.parentNode.removeChild(fbContent);
}

// Reddit
const rdContent = document.getElementById('2x-container');
if (rdContent) {
  rdContent.parentNode.removeChild(rdContent);
}

// Twitter - currently not working
const twContent = document.getElementById('react-root');
if (twContent) {
  twContent.parentNode.removeChild(twContent);
}
