const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2ZlYXRoZXJlZGRpbm9zLXVyc3NjaHdlaXR6ZXItaW1hZ25vLWdldHR5aW1hZ2VzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "https://cdn.sci.news/images/enlarge10/image_11996_1e-Fukuivenator-paradoxus.jpg",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "https://www.fossilera.com/media/W1siZiIsIjIwMjAvMDEvMTYvMTZfNTFfMjJfNDIxX2Rpbm9zYXVyXzM1NDI1NjZfMTkyMC5qcGciXV0/dinosaur-3542566_1920.jpg",
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://images.newscientist.com/wp-content/uploads/2021/10/13130821/PRI_204705771.jpg",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://www.leugardens.org/wp-content/uploads/2023/04/Allosaurus-Baby-Close-Up-660x330.jpg",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://oneplymouth.co.uk/wp-content/uploads/2023/04/Dinosaurs-in-the-Park-Plymouth-Dino-T-rex-scaled.jpg",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://i.kinja-img.com/image/upload/c_fit,f_auto,g_center,q_60,w_645/a7d2f74bdbb6b00665c864d01edddf0f.jpg",
  },
];

// const myFunction = () => {

// }

// myFunction()

// Part 2: HTML Representation of Data
// Using the data provided in main.js, take a look at the format and update the data if needed based on the data example above.
// Loop through each object and render each item to the DOM
const app = document.querySelector("#app");

const renderToDom = (array) => {
  let domString = "";
  for (object of array) {
    domString += `<div class="card element text-center animal "  style="width: 1rem;">
    
    <div class="card-header"><h5 class="card-title">${object.name}</h5></div>
    
    <img src="${object.imageUrl}" class="card-img-top imgs" alt="imgaltname">
   
    <div class="card-body">        
        <p class="card-text">${object.color}</p>
        <p>${object.specialSkill}</p>        
       
        <footer class="card-footer"><p>${object.type}</p></footer>
        <button id="delete--${object.id}" class="delbtn">Delete </button>
    </div>
    </div>`;
  }
  app.innerHTML = domString;
};

renderToDom(pets);

//  Part 3: Event Listeners
// As a user, I want to see 3 category(type) buttons rendered at the top of the page. Each should be a different color. These can be hard-coded in the HTML.
// I want to be able to click one of the 3 buttons, then only the cards that are in the category(type) should show.
// There should be some way for the user to unfilter the results (ie All Pets button).

const catButton = document.querySelector("#cat");
const dogButton = document.querySelector("#dog");
const dinoButton = document.querySelector("#dino");
const allPetsButton = document.querySelector("#allPets");

catButton.addEventListener("click", () => {
  renderPetsOfType(pets, "cat");
});

dogButton.addEventListener("click", () => {
  renderPetsOfType(pets, "dog");
});

dinoButton.addEventListener("click", () => {
  renderPetsOfType(pets, "dino");
});

allPetsButton.addEventListener("click", () => {
  renderToDom(pets);
});

const renderPetsOfType = (petsArr, animalType) => {
  // console.log("filter function: ", petsArr, animalType);
  let petArray = petsArr.filter((pet) => pet.type == animalType);
  // filter() is 
  renderToDom(petArray);
  
  // let petArray = [];
  // for(pet of petsArr){
  //   if(pet.type === animalType){
  //     petArray.push(pet);
  //   }
  // }
};

// Part 4: Create Pets
// Create a form that allows a user to add pets with a submit button
// When the submit button is pressed, the pet is added to the array and the DOM rerenders adding the new pet on the DOM.
const form = document.querySelector("form");

const createPet = (e) => {
  e.preventDefault();
  let petOptions = Array.from(document.querySelectorAll(".pet-option"));
  let selectedPetOption = petOptions.find((radio) => radio.checked).value;
  // console.log("e", e, "petOption", selectedPetOption);

  const newPetObject = {
    id: pets.length + 1,
    name: document.querySelector("#pet-name").value,
    color: document.querySelector("#pet-color").value,
    specialSkill: document.querySelector("#special-skill").value,
    type: selectedPetOption,
  };
  // pets.push(newPetObject);
  pets.unshift(newPetObject);
  renderToDom(pets);
  form.reset();
};

form.addEventListener("submit", createPet);

//  Part 5: Delete Pets
// Each card should have a delete button that when clicked removes the pet from the array and re-renders the DOM

const deletePet = (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex((object) => object.id === Number(id));
    // console.log(index, object, object.id, Number(id)
    pets.splice(index, 1);
    renderToDom(pets);
  }
};
app.addEventListener("click", deletePet);
// const app = document.querySelector("app");
