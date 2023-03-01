const data = [{
  img : "images/image-tanya.jpg",
  text : "\" I've been interested in coding for a while but never taken the jump, until now. I could'nt recommend this course enough. I'm now in the job of my dreams and so excited about the future. \"", 
  name : "Tanya Sinclair",
  job : "UX Engineer"
},{
  img : "images/image-john.jpg",
  text : "\" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \"",
  name : "John Tarkpor", 
  job : "Junior Front-end Developer"
}];

var x = 0;
function handleClick() {
  if(x === 0) {
    x += 1;
  }else if(x === 1) {
    x = 0;
  }
  document.getElementById('img').children[0].src = data[x].img;
  document.getElementById('text').innerHTML = data[x].text;
  document.getElementById('name').innerHTML = data[x].name;
  document.getElementById('job').innerHTML = data[x].job;
}

document.getElementById('img').children[0].src = data[x].img;
document.getElementById('text').innerHTML = data[x].text;
document.getElementById('name').innerHTML = data[x].name;
document.getElementById('job').innerHTML = data[x].job;

document.getElementById('prev').addEventListener('click', ()=>{handleClick()});
document.getElementById('next').addEventListener('click', ()=>{handleClick()});