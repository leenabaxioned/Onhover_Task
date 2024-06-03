/* Author: */
var left = document.querySelector(".left");
console.log(left);
var leftContent = document.querySelector(".left-content");
//left.style.background = "#6b63da"
var right = document.querySelector(".right");
var rightContent = document.querySelector(".right-content");
//right.style.background = "#252525"

left.addEventListener('mouseover', () => {
  // left.style.backgroundImage = "url('assets/images/leftcolor.png')";
  left.style.flexBasis = '100%';
  left.style.transition = "all 2s"
  right.style.flexBasis = '35%';
  leftContent.style.left = "40%"
  rightContent.style.right = "10%"
});

right.addEventListener('mouseover', () => {
  // right.style.backgroundImage = "url('assets/images/rightgrey.jpg')";
  right.style.flexBasis = '100%';
  right.style.transition = "all 2s"
  left.style.flexBasis = '35%';
  rightContent.style.right = "40%"
  leftContent.style.left = "10%"
});