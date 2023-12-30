[
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

// var allButton = document.getElementById("all-button");
//   var vegButton = document.getElementById("veg-button");
//   var nonVegButton = document.getElementById("non-veg-button");
var likeButton = document.getElementById("like-button");

// var recipesContainer = document.getElementById("recipes-container");

// function displayRecipes(recipes) {
//     // Clear the previous recipes
//     recipesContainer.innerHTML = "";

//     // Loop through the recipes array
//     for (var i = 0; i < recipes.length; i++) {
//       // Get the current recipe object
//       var recipe = recipes[i];

//       // Create a div element for the recipe card
//       var recipeCard = document.createElement("div");
//       recipeCard.className = "recipe-card";

//       // Create an img element for the recipe image
//       var recipeImage = document.createElement("img");
//       recipeImage.src = recipe.image;
//       recipeImage.alt = recipe.name;
//       var recipeDetails = document.createElement("div");
//       recipeDetails.className = "recipe-details";

//       // Create a h2 element for the recipe name
//       var recipeName = document.createElement("h2");
//       recipeName.innerText = recipe.name;

//       // Create a button element for the recipe instructions
//       var recipeButton = document.createElement("button");
//       recipeButton.innerText = "View Recipe";
//       recipeButton.addEventListener("click", function() {
//         // Get the index of the clicked button
//         var index = this.getAttribute("data-index");

//         // Get the recipe object from the array
//         var recipe = recipes[index];
//     });
//     recipeButton.setAttribute("data-index", i);

//     // Append the elements to the recipe card
//     recipeCard.appendChild(recipeImage);
//     recipeDetails.appendChild(recipeName);
//     recipeDetails.appendChild(recipeButton);
//     recipeCard.appendChild(recipeDetails);

//     // Append the recipe card to the recipes container
//     recipesContainer.appendChild(recipeCard);
//   }
// }

// // Define a function to filter the recipes based on the type
// function filterRecipes(type) {
//   // Create a new array to store the filtered recipes
//   var filteredRecipes = [];
//   for (var i = 0; i < recipes.length; i++) {
//     // Get the current recipe object
//     var recipe = recipes[i];

//     // Check if the recipe type matches the given type
//     if (recipe.type == type) {
//       // Add the recipe to the filtered array
//       filteredRecipes.push(recipe);
//     }
//   }

//   // Return the filtered array
//   return filteredRecipes;
// }

// // Add a click event listener to the all button
// allButton.addEventListener("click", function() {
//     displayRecipes(recipes);
//   });

//   // Add a click event listener to the veg button
//   vegButton.addEventListener("click", function() {
//     // Filter the recipes by veg type
//     var vegRecipes = filterRecipes("veg");

//     // Display the veg recipes
//     displayRecipes(vegRecipes);
//   });

//   // Add a click event listener to the non-veg button
//   nonVegButton.addEventListener("click", function() {
//     // Filter the recipes by non-veg type
//     var nonVegRecipes = filterRecipes("non-veg");

//     // Display the non-veg recipes
//     displayRecipes(nonVegRecipes);
//   });
//   displayRecipes(recipes);

  // Get the recipe object
  var recipe = {
    // Some properties of the recipe
    isLiked: false // Initially not liked
  };

  // Add a click event listener to the icon element
  likeButton.addEventListener("click", function() {
    // Toggle the isLiked property of the recipe object
    recipe.isLiked = !recipe.isLiked;

    // Update the icon color and fill based on the isLiked property
    if (recipe.isLiked) {
      // Change the icon to red filled heart
      likeButton.style.color = "red";
      likeButton.classList.remove("fa-heart-o");
      likeButton.classList.add("fa-heart");
    } else {
      // Change the icon to black empty heart
      likeButton.style.color = "red";
      likeButton.classList.remove("fa-heart");
      likeButton.classList.add("fa-heart-o");
    }
  });

