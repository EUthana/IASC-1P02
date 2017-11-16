var start;
var count;
var end ;
function stopTime() {
  var start = new Date();
  var end = getTime();
  var count = getDiff(start,end);
  prompt(“Enter your favorite colour:”);
document.write("you have been on the page for " + count + "seconds")
}
