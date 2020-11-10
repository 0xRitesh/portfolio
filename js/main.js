// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const sel = document.getElementById('change');
const changeMod =document.getElementById('bg-img');



//Type writer effect+

const TypeWriter=function(txtElement,words,wait=3000){

this.txtElement=txtElement;
this.words=words;
this.txt='';
this.wordIndex=0;
this.wait=parseInt(wait,10);
this.type();

this.isDeleting=false;  
}
TypeWriter.prototype.type=function(){

//Current index of words
const current=this.wordIndex % this.words.length;

//Get full text of current word
const fullTxt=this.words[current];

//console.log(this.words.length);

//check if deleting
if(this.isDeleting){

  //Remove char
  this.txt=fullTxt.substring(0,this.txt.length-1);
}else{

  this.txt=fullTxt.substring(0,this.txt.length+1);
}

//Insert txt into element
this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;


// Initial Type speed

let typeSpeed=300;
if(this.isDeleting){

  typeSpeed /=2;
}

//If word id complete

if(!this.isDeleting && this.txt===fullTxt){
  //Make pause
  typeSpeed=this.wait;

  //Set delete to true
  this.isDeleting=true;

  //Change the color in css

  //Red:#E74C3C green:#1D8348 
  let col=['#E74C3C','#7FB3D5','#eece1a'];

  let ra=Math.floor(Math.random()*3);

  //console.log(ra);




  this.txtElement.innerHTML=`<span style="color:${col[ra]}";>${this.txt}</span>`;


}else if(this.isDeleting && this.txt===''){//after completes deletes the word

this.isDeleting=false;

//Move to next word

this.wordIndex++;

//pause before start typing
typeSpeed=500;





}
setTimeout(()=>this.type(),typeSpeed)

}

//Type Method


//Init on DOM load

document.addEventListener('DOMContentLoaded',init);
//Init App

function init(){

const txtElement=document.querySelector('.txt-type');
const words=JSON.parse(txtElement.getAttribute('data-words'));
const wait=txtElement.getAttribute('data-wait');


//Init TypeWriter

new TypeWriter(txtElement,words,wait);


}
//setting strike








// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click',function()
{


  if (showMenu===false) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {

    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
  }
);
//MODE change 
let val=sel.textContent;
let mode = false;
sel.addEventListener('click',function()
{
//console.log('clicked');
//console.log(val);

if(mode===false && val==='LIGHT MODE')
{

// chbkMod.classList.add('bkcolor');
changeMod.classList.add('mod');
mode=true;
//document.getElementById(elementID).innerHTML = "";
sel.innerHTML="";
sel.insertAdjacentHTML('afterbegin','<span style="transition:ease-in 2s;color:#FFFAFA;">DARK MODE</span>');
val='DARK MODE';
}
else if(mode===true && val==='DARK MODE')
{
  changeMod.classList.remove('mod');
  mode=false;
  sel.innerHTML="";
  sel.insertAdjacentHTML('afterbegin','LIGHT MODE');
  val='LIGHT MODE';
}


});
