// {/* <img alt="logo" src="images/pied-piper-logo-secondary.png" />
// ><img src="images/pied_piper_logo.png" alt=""> */}

let imgcir1 = "images/sv-cover.jpeg";
let imgcir2 = "images/sv-garage.jpg";
let imgcir3 = "images/sv-conference.jpg";
let imgcir4 = "images/sv-pair-programming.jpg";
let imgArr = [imgcir1,imgcir2,imgcir3,imgcir4]
let idx = 0; 

let headImg = document.getElementById("rotate");

const rotateImg = () =>{
  headImg.src = imgArr[idx];
  idx = (idx + 1)%imgArr.length;
}
rotateImg()
let intervalID = setInterval(rotateImg, 5000);



