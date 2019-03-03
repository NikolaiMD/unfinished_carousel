var slides = [
  {/*index - 0*/
    title:"AMD Threadripper",
    src: "images/cpu.jpg",
    ads: "VOID_0"
  },
  {/*index - 1*/
    title:"AMD Threadripper Cooler",
    src: "images/cooler.jpg",
    ads: "VOID_1"
  },
  {/*index - 2*/
    title:"Nvidia 2080ti",
    src: "images/gpu.jpg",
    ads: "VOID_2"
  },
  {/*index - 3*/
    title:"Motherboard ",
    src: "images/motherboard.jpg",
    ads: "VOID_3"
  },
  {/*index - 4*/
    title:"RAM",
    src: "images/ram.jpg",
    ads: "VOID_4"
  },
  {/*index - 5*/
    title:"Monitor",
    src: "images/monitor.jpg",
    ads: "VOID_5"
  }
]; //Array of objects
var number = 1;
function showSlide(effect) {
  // SEARCHING FOR DIV
  let div_slide = document.querySelector('#carousel .slide');
  console.log(div_slide);
  for(var row = 0; row<6; row++){
    for(var col = 0; col<8; col++){
      let x = -100*col;
      let y = -100*row;
      let d = Math.random()/2;
      // let effect = 'flip';
      let src = slides[number].src;
      let title = slides[number].title;
      let ad = slides[number].ads;
      let html = `
      <div class="arrow_left" href="" onclick="(new showSlide()).frames_left();(new showSlide()).frames_left_new()">LEFT</div>
      <div class="arrow_right" href="" onclick="(new showSlide()).frames_right();(new showSlide()).frames_right_new()">RIGHT</div>
      <a class="ads">${ad}</a>
      <div style="background-image: url(${src}); background-position: ${x}px ${y}px; animation-delay: ${d}s;" class="box ${effect} animated"></div><h1 class="title">${title}</h1>`;
      div_slide.innerHTML += html;
    }
  }
  this.frames_right=function() {
    div_slide.innerHTML = '';
  }
  this.frames_right_new=function(){
    if(number<5){
      slides[number++];
    }
  }
  this.frames_left=function () {
    div_slide.innerHTML = '';
  }
  this.frames_left_new=function(){
    if(number>=1){
      number--;
    }
  }
}
showSlide('fadeInDown');
