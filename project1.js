

let  meals = JSON.parse(localStorage.getItem("fav")) || [
  {
    id: 0,
    name: "'Apple pie' porridge",
    inFav: false,
    img: 'ApplePie.jpeg',
    description:
      "Serves: 1 adult, Preparation time: 10 minutes, Cooking time: 5 minutes, Calories per portion: 315kcal (1,318kJ)",
    ingredients: [
      "50g porridge oats",
      "200ml semi-skimmed milk",
      "1 medium dessert apple, diced",
      "Pinch of cinnamon",
    ],
    method: [
      "Throw all the ingredients into a saucepan. Heat and stir until boiling, then lower the heat and simmer gently for 5 minutes, stirring often.",
      "Spoon the porridge into a serving bowl and add a sprinkle of cinnamon.",
    ],
    type: "breakfast",
  },
  {
    id: 1,
    name: "English breakfast muffin",
    inFav: false,
    img: "Englishbreakfast.jpeg",
    description:
      "Serves: 1 adult, Preparation time: 10 minutes, Cooking time: 5 minutes, Calories per portion: 309kcal (1,293kJ)",
    ingredients: [
      "1 wholemeal English muffin, cut in half ",
      "1 poached egg <br>- 1 slice lean roast beef",
      "20g reduced-fat or (light) medium-hard cheese",
      "2 tsp low-fat spread",
      "20g fresh spinach leaves",
      "Pinch of ground black pepper",
    ],
    method: [
      "Preheat the grill and toast the muffins on the cut sides only. Poach the egg in gently simmering water for 3 to 4 minutes until the yoke is set but still runny in the middle.",
      "Spread the toasted muffin sides with the low-fat spread, and layer the spinach leaves, beef and cheese on 1 half. Place the poached egg on top, season with black pepper, and top with the other half of the muffin.",
    ],
    type: "breakfast",
  },
  {
    id: 2,
    name: "Coconut Flour Pancakes",
    inFav: false,
    img: "pancakes.jpeg",
    description:
      "Serves: 1 adult, Preparation time: 10 minutes, Cooking time: 15 minutes, Calories per portion: 320kcal (1,323kJ)",
    ingredients: [
      "1/3 Greek yogurt",
      "2 tbsp maple syrup",
      "3 large eggs, separated ",
      "2 tbsp melted butter",
      "1/3 coconut flour ",
      "1/2 tsp baking soda ",
      "Pinch kosher salt ",
      " Cooking spray.",
    ],
    method: [
      "1. In a large bowl, whisk to combine Greek yogurt, egg yolks, maple syrup, and melted butter. Add coconut flour, baking soda, and salt, and gently fold until just combined.",
      "2.In a separate large bowl using a hand or stand mixer, whip egg whites until stiff peaks form, 4 to 5 minutes. Gently fold whipped egg whites into batter until evenly combined.",
      "3.Grease a large nonstick pan with cooking spray and place over medium-low heat. Pour about 2 tablespoons of pancake batter onto the pan, spreading it out evenly. When a lip forms around the edge of the pancake and little bubbles appear, flip (about 1-2 minutes). Cook until both sides are lightly golden. Serve with butter and maple syrup.",
    ],
    type: "breakfast",
  },
  {
    id: 3,
    name: "Buddha Bowls",
    inFav: false,
    img: "buddha.jpeg",
    description:
      "Serves: 4 adults, Preparation time: 10 minutes, Cooking time: 30 minutes, Calories per portion: 400kcal (1,587kJ)",
    ingredients: [
      "1 large sweet potato, peeled and cut into cubes. ",
      "1 large red onion, diced.",
      "Kosher salt",
      "Freshly ground black pepper.",
      "1 lb. boneless, skinless chicken breasts.",
      "1/2 tsp garlic powder.",
      "1/2 tsp ground ginger.",
      "1 small clove garlic, minced.",
      "1/4 c. Juice of 1 lime.",
      "1 tbsp honey.",
      "1 tbsp toasted sesame oil.",
      "4 c. cooked brown rice.",
      "1 avocado, thinly sliced.",
    ],
    method: [
      "In a large bowl, whisk to combine Greek yogurt, egg yolks, maple syrup, and melted butter. Add coconut flour, baking soda, and salt, and gently fold until just combined.",
      "In a separate large bowl using a hand or stand mixer, whip egg whites until stiff peaks form, 4 to 5 minutes. Gently fold whipped egg whites into batter until evenly combined.",
      "Grease a large nonstick pan with cooking spray and place over medium-low heat. Pour about 2 tablespoons of pancake batter onto the pan, spreading it out evenly. When a lip forms around the edge of the pancake and little bubbles appear, flip (about 1-2 minutes). Cook until both sides are lightly golden. Serve with butter and maple syrup.",
    ],
    type: "lunch",
  },
  {
    id: 4,
    name: "Sesame Soba Noodles",
    inFav: false,
    img: "sobaNoodles.jpeg",
    description:
      "Serves: 2-4 adults, Preparation time: 10 minutes, Cooking time: 10 minutes, Calories per portion: 309kcal (1,293kJ)",
    ingredients: [
      "1 wholemeal English muffin, cut in half",
      "1 poached egg",
      "1 slice lean roast beef",
      "20g reduced-fat or (light) medium-hard cheese",
      "2 tsp low-fat spread",
      "20g fresh spinach leaves",
      "Pinch of ground black pepper",
      " 1 lb. boneless, skinless chicken breasts.",
      "1/2 tsp garlic powder.",
      "1/2 tsp. ground ginger.",
      " 1 small clove garlic, minced.",
      " 2 tbsp. creamy peanut butter.",
      " 1/4 c. Juice of 1 lime.",
      " 1 tbsp low-sodium soy sauce.",
      " 1 tbsp honey.",
      " 1 tbsp. toasted sesame oil.",
      " 4 c. cooked brown rice.",
      " 1 avocado, thinly sliced.",
      " 2 c. baby spinach. ",
      " 1 tbsp. Freshly chopped cilantro, for garnish. ",
      "1 tsp. Toasted sesame seeds.",
    ],
    method: [
      "Preheat oven to 425°. On a large baking sheet, toss sweet potatoes and onion with 1 tablespoon of oil and season with salt and pepper. Bake until tender, 20 to 25 minutes.",
      "Meanwhile, in a large skillet over medium- high heat, heat 1 tablespoon of oil. Season chicken with garlic powder, ginger, salt, and pepper. Cook until golden and no longer pink, 8 minutes per side. Let rest 10 minutes, then slice. ",
      "In a small bowl, whisk together garlic, peanut butter, lime juice, soy sauce, and honey. Whisk in sesame oil and remaining 1 tablespoon olive oil until smooth. ",
      "Divide rice among four bowls and top each with sweet potato mixture, chicken, avocado, and baby spinach. Sprinkle with cilantro and sesame seeds and drizzle with dressing before serving.",
    ],
    type: "lunch",
  },
  {
    id: 5,
    name: "San choy bau",
    inFav: false,
    img: "Sanchoybau.jpeg",
    description:
      "Serves: 4 adults, Preparation time: 15 minutes, Cooking time: 6 minutes, Calories per portion: 305kcal (1,278kJ)",
    ingredients: [
      "1 tbsp peanut oil",
      "2 garlic cloves, crushed",
      "2cm piece ginger, finely grated",
      "500g lean pork mince",
      "1 tbsp soy sauce",
      "2 tbsp oyster sauce",
      "3 shallots, thinly sliced",
      "1/2 lime, juiced.",
      "1 tsp sesame oil.",
      "1 cup beansprouts, trimmed",
      "12 large lettuce leaves",
      "1/4 cup fresh coriander leaves",
      "1/4 cup chopped roasted peanuts, optional.",
    ],
    method: [
      "Heat wok over high heat until hot. Add peanut oil and swirl to coat. Add garlic, ginger and pork. Stir-fry for 2 to 3 minutes or until pork just changes colour.",
      "Add soy sauce and oyster. Add shallots, 2 teaspoons of lime juice and sesame oil to wok. Stir-fry for 3 minutes or until heated through. Stir in beansprouts. ",
      "Spoon pork mixture into lettuce leaves. Sprinkle with coriander and peanuts, if using. Serve.",
    ],
    type: "dinner",
  },
  {
    id: 6,
    name: "Healthy tacos",
    inFav: false,
    img: "SmokeyTaco.webp",
    description:
      "Serves: 4 adults, Preparation time: 15 minutes, Cooking time: 15 minutes, Calories per portion: 460kcal (1,278kJ)",
    ingredients: [
      "red onion 1, thinly sliced",
      "cider vinegar 75ml",
      "ground cumin 1 tsp",
      "chipotle flakes 1 tsp",
      "sweet smoked paprika 2 tsp",
      "olive oil 2½ tbsp",
      "garlic 2 cloves, finely chopped",
      "black beans 400g can, rinsed and drained",
      "coriander a large handful.",
      "dairy-free yogurt 120g",
      "lime 1, juiced",
      "corn tortillas 8 small",
      "salad leaves 150g",
      "avocado 1 small, thinly sliced",
    ],
    method: [
      "Combine the onion and vinegar in a small bowl with a pinch of salt and set aside. Mix the paprika, cumin, chipotle flakes and 2 tbsp of olive oil in a large bowl, seasoning well. Add the courgettes and toss together until coated. Put a large frying pan on a medium-high heat and, once hot, add the courgettes – you will probably need to do this in two or three batches. Cook on each side for 2-3 minutes or until deep in colour and charred, then transfer to a plate lined with kitchen paper. Cover and set aside.",
      "Without cleaning the frying pan, add the remaining oil. Cook the garlic for 30 seconds, then add the black beans with a splash of water, cooking through for a few minutes until just warm and the water has evaporated. Season to taste, cover and set aside. ",
      "Finely chop half the coriander and put in a bowl along with the yogurt, lime juice and zest, mix together and season to taste. Heat the tortillas according to pack instructions.",
      "Strain the pickled onions. When it’s time to build your tacos, layer the tortillas with the salad leaves and avocado. Sprinkle over the black beans and top with the courgettes, a drizzle of the herby lime yogurt and some of the pickled onions. Garnish with the remaining coriander (you can keep as is, or roughly chop if you’d prefer) and serve with the lime wedges to squeeze over.",
    ],
    type: "dinner",
  }
];


/////////////////////////////////////////////////////// breakfast render////////////////////////////

function myFunction() {
  $(".homePageD").hide()
  $(".breakfastCard").show()
  $(".dinnerCard").hide()
  $(".lunchCard").hide()
  let breakfast = meals.filter((item) => item.type === "breakfast");
             console.log(breakfast);

  const renderBreakFast = () => {
    breakfast = meals.filter((item) => item.type === "breakfast");
    $(".breakfastCard").html("")
    breakfast.forEach((meal, i) => {
      $(".breakfastCard").append(
        `<div class="cardfood">
        <p class="nameP"> ${meal.name}</p>
        <img src="${meal.img}" alt="IT" class="Img">
        <p class="descriptionF">${meal.description}</p>
        <div id= 'Ingredients-${i}'> 
        <p class="Ingredients"> Ingredients: </p>
        <ul id='ul-${i}'>   </ul>
        </div> 
    
        <div id ='description-${i}'>
        <p class="description"> Method: </p>
        <ol id= 'ol-${i}'>  </ol>
        </div>
      
        <div>
        <button type = "button" class ="like" id="fav-${i}"><i id="emptyHeart" class="heart fa fa-heart-o"></i>Add to Favorite</button>
        </div>
        </div>`
      );

      if (meal.inFav === true) {
        $("#fav-" + i).html(` <i id='fullHeart' class="fas fa-heart"></i>
        remove from Favorite`);
      }
  
      meal.ingredients.forEach((item, index1) => {
        $("#ul-" + i).append(`<li> ${item} </li>`);
      });
      meal.method.forEach((item, index) => {
        $("#ol-" + i).append(`<li> ${item}</li>`);
      });

   $("#fav-"+i).click(()=> {
    //   console.log(i);
       meals = meals.map((ee) => {
         if(meal.id === ee.id ) {
           return { ...ee, inFav : !ee.inFav }
         } else {
           return ee;
         }
       })
       
      localStorage.setItem("fav",JSON.stringify(meals))
      renderBreakFast()
    })
    
    });

  } 
  renderBreakFast();
}

/////////////////////////////////////////////////////// Lunch render ////////////////////////////

function myFunction2() {
  $(".homePageD").hide()
  $(".breakfastCard").hide()
  $(".dinnerCard").hide()
  $(".lunchCard").show()


  let lunch = meals.filter((item) => item.type === "lunch");

  const renderLunch = () => {
    lunch = meals.filter((item) => item.type === "lunch");

    $('.lunchCard').html("")
    lunch.forEach((meal, i) => {
      console.log(meal);
      $(".lunchCard").append(
        `<div class="cardfood">
        <p class="nameP"> ${meal.name}</p>
        <img src="${meal.img}" alt="IT" class="Img">
        <p class="descriptionF"> ${meal.description} </p>
       
        <div id= 'Ingredients-${i}'> 
        <p class="Ingredients"> Ingredients </p>
        <ul id='ul-${i}'>   </ul>
        </div> 
    
        <div id ='description-${i}'>
        <p class="description"> Method </p>
        <ol id= 'ol-${i}'>  </ol>
        </div>
    
        <div>
        <button type = "button" class ="like" id="fav-${i}"><i class="heart fa fa-heart-o"></i>Add to Favorite</button>
        </div>
        </div>`
      );

      if (meal.inFav === true) {
        $("#fav-" + i).html( `<i class="fas fa-heart"></i>
        remove from Favorite`);
      }
    
      meal.ingredients.forEach((item, index1) => {
        $("#ul-" + i).append(`<li> ${item} </li>`);
      });
    
      meal.method.forEach((item, index) => {
        $("#ol-" + i).append(`<li> ${item}</li>`);
      });
    
      $("#fav-"+i).click(()=> {
        //   console.log(i);
           meals = meals.map((ee) => {
             if(meal.id === ee.id ) {
               return { ...ee, inFav : !ee.inFav }
             } else {
               return ee;
             }
           })
           
          localStorage.setItem("fav",JSON.stringify(meals))
          renderLunch()
        })
    });
  } 
  renderLunch();
}



/////////////////////////////////////////////////////// dinner render ////////////////////////////

function myFunction3() {
  $(".homePageD").hide()
  $(".breakfastCard").hide()
  $(".dinnerCard").show()
  $(".lunchCard").hide()  
  
  let dinner = meals.filter((item) => item.type === "dinner");

  const renderDinner = () => {
    $('.dinnerCard').html("")
    dinner.forEach((meal, i) => {
      console.log(meal);
      $(".dinnerCard").append(
        `<div class="cardfood">
        <p class="nameP"> ${meal.name}</p>
        <img src="${meal.img}" alt="IT" class="Img">
        <p class="descriptionF"> ${meal.description} </p>
       
        <div id= 'Ingredients-${i}'> 
        <p class="Ingredients"> Ingredients </p>
        <ul id='ul-${i}'>   </ul>
        </div> 
    
        <div id ='description-${i}'>
        <p class="description"> Method </p>
        <ol id= 'ol-${i}'>  </ol>
        </div>
    
        <div>
        <button type = "button" class ="like" id="fav-${i}"><i class="heart fa fa-heart-o"></i>Add to Favorite</button>
        </div>
        </div>`
      );

      if (meal.inFav === true) {
        $("#fav-" + i).text("remove from Favorite");
      }
    
      meal.ingredients.forEach((item, index1) => {
        $("#ul-" + i).append(`<li> ${item} </li>`);
      });
    
      meal.method.forEach((item, index) => {
        $("#ol-" + i).append(`<li> ${item}</li>`);
      });
      $("#fav-"+i).click(()=> {
        //   console.log(i);
           meals = meals.map((ee) => {
             if(meal.id === ee.id ) {
               return { ...ee, inFav : !ee.inFav }
             } else {
               return ee;
             }
           })
           
          localStorage.setItem("fav",JSON.stringify(meals))
          renderDinner()
        })
    });
  } 
  renderDinner();
}



/////////////////////////////////////////////////////// search function ////////////////////////////



/*$('#sear').click(function() {
  const inp = $('#fsearch').val();
  if ($("#fsearch").val().length == 0) {
      alert ("add meal to search");
      }
      else {
        $("#fsearch").val()
}
}) */
