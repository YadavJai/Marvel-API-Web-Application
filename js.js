
const publicKey = "5f46b962a09adfde55aa214488894481";
const privateKey = "138c68eadfbd4c29c34e12375ca4debe45525aa7";
const timestamp = Date.now().toString();
const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
const baseUrl = 'https://gateway.marvel.com/v1/public';
let subbutt=document.querySelector('button');
let input=document.querySelector('input');
let para=document.querySelector('#para');
let name=document.querySelector('#name');
let img=document.querySelector(".op img");
let output=document.querySelector(".op");
let load=document.querySelector("#loading");
let start=document.querySelector(".start");


window.addEventListener("load",()=>{
var screenWidth = window.innerWidth;
console.log(screenWidth)
if(screenWidth<500){
  start.style.backgroundImage = "url('https://thypix.com/wp-content/uploads/2022/04/marvel-phone-wallpaper-thypix-84-394x700.jpg')";
}
start.style.display="block";
setTimeout(()=>{
  start.style.display="none";
},9000)  
})

//for searching

subbutt.addEventListener("click",async()=>
  {    
  const characterName=input.value;
// Construct the API URL for Iron Man's information
const characterUrl = `${baseUrl}/characters?name=${encodeURIComponent(characterName)}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
load.style.display="flex";
// Make the API request using the Fetch API
  fetch(characterUrl)
  .then(response => response.json())
  .then(data => {
    load.style.display="none";
    // Handle the API response
    if (data.code === 200) {
      const character = data.data.results[0];
      console.log(character);
      para.innerText=character.description;
      name.innerText=character.name;
      img.src=character.thumbnail.path + '.' + character.thumbnail.extension;
      output.style.display="flex";
      // Process Iron Man's information here
    } else {
      console.log('Error:', data.status);
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });
  }
  )

//done for searching 

