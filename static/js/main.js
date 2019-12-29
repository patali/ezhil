function checkCommentPosted() {
  if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    if(hash === "comment-submitted") {
      alert("Thank you for posting a comment! Your comment is now under review.");
    }
  }
}

window.onload = checkCommentPosted;
