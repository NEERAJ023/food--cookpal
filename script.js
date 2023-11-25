let recipes=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


let container=document.querySelector(".container");

function allrecipes(recipes){
    container.innerHTML="";
recipes.forEach((recipe,index)=>{
    container.appendChild(creatediv(recipe,index));
})
}


function creatediv(recipe,index){
     let div=document.createElement("div");
     div.classList.add("card");
      div.innerHTML=`
      <img class="iimg" src="${recipe.imageSrc}" alt="${recipe.name}">
      <p>${recipe.type}<p>

      <div class="jc">
      <h2 class="h">${recipe.name}</h2>
      <p>${recipe.rating}</p> 
      </div>

      <div class="jc">
      <p class="p">${recipe.time}</p>
      <img height="23px" id="likeImage_${index}" onclick="toggleLike(${index}, ${recipe.isLiked})" 
      src="${recipe.isLiked ? "source_icons/Screenshot 2023-11-25 202342.png" : "source_icons/like.png"}" alt="pic">
      </div>
      `;
      return div;
}
allrecipes(recipes);

let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");

btn1.addEventListener("click",onclick);
btn2.addEventListener("click",onclick);
btn3.addEventListener("click",onclick);

function onclick(event){
    let data=event.target.value;

     let filterrecipes=recipes;
if(data!=="all"){
    
            filterrecipes=recipes.filter((recipe)=>
            recipe.type==data
            
            ) 
    }



allrecipes(filterrecipes);

    
}

let form =document.querySelector("form");
form.addEventListener("click",onchange);
let isform={
    istrue:true,
    value:null,
    re:null
};
function onchange(){
    let sort=form.radio.value;
    
    let filterrecipes=recipes;
    if(sort==4){
        filterrecipes=recipes.filter((recipe)=>
        recipe.rating>=sort
    )}else{
        filterrecipes=recipes.filter((recipe)=>
        recipe.rating<sort
    )}
    
    allrecipes(filterrecipes);
}

let search=document.querySelector(".ssearch");
search.addEventListener("input",onchnge);

function onchnge(){
    let val=search.value.toLowerCase();
    let card=document.querySelectorAll(".card")

    for(let i=0; i<card.length; i++){
        let name=card[i].querySelector(".jc");
        let con=name.querySelector(".h");
        if(con){
           let inner =con.innerHTML.toLowerCase();
            if(inner.indexOf(val)>-1){
             card[i].style.display="";
        }else{
            card[i].style.display="none";
        }
    }
}
}
function toggleLike(index) {
    
    const likeImage = document.getElementById(`likeImage_${index}`);
  
    recipes[index].isLiked = !recipes[index].isLiked;
  
    likeImage.src = recipes[index].isLiked?"source_icons/Screenshot 2023-11-25 202342.png" : "source_icons/like.png";
     
  }

  function toggleMenu() {
    const sideNav = document.querySelector(".icons");
    sideNav.style.display="none";
    const navo=document.querySelector(".hide");
    
    let div=document.createElement("div");
    div.classList.add("hero");
   div.innerHTML=`
   <div class="icons">
        <img src="source_icons/Cookpal 1.png"  alt="pic">
    </div>
    <div class="home">
     <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">Help</a></li>
     </ul>
      <div class="img">
        <img src="source_icons/Ellipse 2.png"  alt="pic">
      </div>
    </div>
   `
   navo.appendChild(div);
  }