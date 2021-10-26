
const meals = JSON.parse(localStorage.getItem("meals"))

const myFav = meals.filter((item) => item.inFav === true);


console.log(myFav);


const renderFav = ()=>{
    myFav.forEach((meal, i) => {
        $(".favo").append(
            `<div class="cardfood">
            <p class="nameP"> ${meal.name}</p>
            <img src="${meal.img}" alt="IT" class="Img">
            <p class="description">${meal.description}</p>
        
        
            <div id= 'Ingredients-${i}'> 
            <p class="Ingredients"> Ingredients </p>
            <ul id='ul-${i}'>   
            </ul>
            </div> 
        
            <div id ='description-${i}'>
            <p class="description"> Method </p>
            <ol id= 'ol-${i}'>  </ol>
            </div>
          
            `
          );    

          if(meal.inFav === false){
            $("#fav-"+i).text("Add to Favorite")
          }
          
          
          meal.ingredients.forEach((item, index1) => {
            $("#ul-" + i).append(`<li> ${item} </li>`);
          });
        
          meal.method.forEach((item, index) => {
            $("#ol-" + i).append(`<li> ${item}</li>`);

    
          });

          $("#fav-"+i).click(()=>{
            console.log(i);
            meals[i].inFav = !meals[i].inFav 
            localStorage.setItem("meals",JSON.stringify(meals))
            renderFav()
        })
        
        });
    }
    renderFav(); 






/*
    const removeFav = () => {
        myFav.forEach((meal, i) => {
            $(".favo").remove();
        })
    }

    */