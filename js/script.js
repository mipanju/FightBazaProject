let SVG_male_frontElement = document.querySelector('.Male-Front');
let SVG_male_backElement = document.querySelector('.Male-Back');
let SVG_female_frontElement = document.querySelector('.Female-Front');
let SVG_female_backElement = document.querySelector('.Female-Back');
let buttonElement = document.querySelector('.js-swap_btn');
let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let cal_container = document.querySelector('.cal_container');
function swap() {
  if (buttonElement.innerHTML === '<i class="bx bx-male-sign"></i>') {
    buttonElement.innerHTML = '<i class="bx bx-female-sign" ></i>';
    SVG_male_frontElement.style.display = 'none';
    SVG_male_backElement.style.display = 'none';
    SVG_female_frontElement.style.display = 'inline';
    SVG_female_backElement.style.display = 'inline';
  } else {
    buttonElement.innerHTML = '<i class="bx bx-male-sign"></i>';
    SVG_male_frontElement.style.display = 'inline';
    SVG_male_backElement.style.display = 'inline';
    SVG_female_frontElement.style.display = 'none';
    SVG_female_backElement.style.display = 'none';
  }
}

let instructions = document.querySelector('.exercises_display')

let ex_name = document.querySelector('.exercise_name');
let vieo_frames = document.querySelector('.video_container');
function Show_exercise() {

}
// function sidebar_toggle() {
//   sidebar.classList.toggle('active');
// }
// btn.onclick = sidebar_toggle;

let buttonElement_nd = document.querySelector('.js-swap_btn2')
let specific_muscle = document.querySelector('.Body_map');
let ex_name1 = document.querySelector('#exercise_name1');
let video_frames1 = document.querySelector('#video_container1');
let advice1 = document.querySelector('#instructions1');
let ex_name2 = document.querySelector('#exercise_name2');
let video_frames2 = document.querySelector('#video_container2');
let advice2 = document.querySelector('#instructions2');
let ex_name3 = document.querySelector('#exercise_name3');
let video_frames3 = document.querySelector('#video_container3');
let advice3 = document.querySelector('#instructions3');
function Show_exercise(muscle) {
  if (muscle === 'chest') {
    ex_name1.innerHTML = 'Barbell Bench Press';
    video_frames1.innerHTML = `<video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1"></video>
                                 <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-side_KciuhbB.mp4#t=0.1"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.</h2>
                           <h2> <span>2</span>Lower the bar to your mid chest.</h2>
                           <h2> <span>3</span>Raise the bar until you've locked your elbows.</h2>` ;
    ex_name2.innerHTML = 'Push Up';
    video_frames2.innerHTML = `<video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-push-up-front.mp4#t=0.1"></video>
                                 <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-push-up-side.mp4#t=0.1"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Lay Place your hands firmly on the ground, directly under shoulders.</h2>
                           <h2> <span>2</span>Flatten your back so your entire body is straight and slowly lower your body.</h2>
                           <h2> <span>3</span>Exhale as you push back to the starting position.</h2>` ;
    ex_name3.innerHTML = 'Dumbell Incline Bench Press';
    video_frames3.innerHTML = `<video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1"></video>
                                  <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-side_2HBfFN3.mp4#t=0.1"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'shoulders') {
    ex_name1.innerHTML = 'Barbell Overhead Press';
    video_frames1.innerHTML = `<video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-front_wHKQjdY.mp4#t=0.1"></video>
                                 <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-side_1DIUbfS.mp4#t=0.1"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Dumbell Seated Overhead Press';
    video_frames2.innerHTML = `<video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-front.mp4#t=0.1"></video>
                                 <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-side.mp4#t=0.1"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Cable Low Single Arm Laterlar Raise';
    video_frames3.innerHTML = `<video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-lateral-raise-front.mp4#t=0.1"></video>
                                  <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-lateral-raise-side.mp4#t=0.1"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle == 'biceps') {
    ex_name1.innerHTML = 'Barbell Curl';
    video_frames1.innerHTML = `<video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-front_wHKQjdY.mp4#t=0.1"></video>
                                 <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-side_1DIUbfS.mp4#t=0.1"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out.</h2>
                          <h2> <span>2</span>Continue the movement until your biceps are fully contracted and the bar is at shoulder level.</h2>
                          <h2> <span>3</span>Hold the contracted position for a second and squeeze the biceps hard.</h2>
                          <h2> <span>4</span>Slowly bring the weight back down to the starting position.</h2 >`;
    ex_name2.innerHTML = 'Chin Ups';
    video_frames2.innerHTML = `< video loop src = "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-front.mp4#t=0.1" ></video >
                           <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-side.mp4#t=0.1"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Grab the bar shoulder width apart with a supinated grip (palms facing you)</h2 >
                           <h2> <span>2</span>With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.</h2>
                           <h2> <span>3</span>Slowly return to starting position. Repeat.</h2>` ;
    ex_name3.innerHTML = 'Dumbbell Curl';
    video_frames3.innerHTML = `< video loop src = "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-lateral-raise-front.mp4#t=0.1" ></video >
                                <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-lateral-raise-side.mp4#t=0.1"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Stand up straight with a dumbbell in each hand at arm's length.</h2 >
                                               <h2> <span>2</span>Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.</h2>
                                               <h2> <span>3</span>Lower to original position and repeat with opposite arm</h2>`
  } else if (muscle == 'forearms') {
    ex_name1.innerHTML = 'Chin Ups';
    video_frames1.innerHTML = `<video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-front_wHKQjdY.mp4#t=0.1"></video>
                                 <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-side_1DIUbfS.mp4#t=0.1"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Grab the bar shoulder width apart with a supinated grip (palms facing you)</h2>
                          <h2> <span>2</span>With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.</h2>
                          <h2> <span>3</span>Slowly return to starting position. Repeat.</h2>`;
    ex_name2.innerHTML = 'Dumbbell Wrist Curl';
    video_frames2.innerHTML = `< video loop src = "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-front.mp4#t=0.1" ></video >
                           <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-side.mp4#t=0.1"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Grip the dumbbell with your palm facing upwards with your forearm rested against the bench.</h2 >
                           <h2> <span>2</span>Slowly curl your wrist upwards in a semicircular motion.</h2>
                           <h2> <span>3</span>Return to starting position and repeat.</h2>` ;
    ex_name3.innerHTML = 'Dumbbell Row Unilateral';
    video_frames3.innerHTML = `< video loop src = "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-lateral-raise-front.mp4#t=0.1" ></video >
                                <video loop src="https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-lateral-raise-side.mp4#t=0.1"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Stand up straight with a dumbbell in each hand at arm's length.</h2 >
                                               <h2> <span>2</span>Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.</h2>
                                               <h2> <span>3</span>Lower to original position and repeat with opposite arm</h2>`
  }



  instructions.style.display = 'inline';
  SVG_male_frontElement.style.display = 'none';
  SVG_male_backElement.style.display = 'none';
  buttonElement.style.display = 'none';
  buttonElement_nd.style.display = 'inline';
}
function get_back() {
  instructions.style.display = 'none';
  SVG_male_frontElement.style.display = 'inline';
  SVG_male_backElement.style.display = 'inline';
  buttonElement_nd.style.display = 'none';
  buttonElement.style.display = 'inline';
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    instructions.style.display = 'none';
    SVG_male_frontElement.style.display = 'inline';
    SVG_male_backElement.style.display = 'inline';
    buttonElement_nd.style.display = 'none';
    buttonElement.style.display = 'inline';
  }
});





function sidebar_toggle() {
  sidebar.classList.toggle('active');
  cal_container.classList.toggle('active');
}

function sidebar_active() {
  sidebar.classList.add('active');
  cal_container.classList.add('active');
}

function sidebar_pasive() {
  sidebar.classList.remove('active');
  cal_container.classList.remove('active')
}
btn.onclick = sidebar_toggle;





// funcion for number of ages

// var age = document.querySelector('.age');
// var currentAge = parseInt(age.textContent);
// var weight = document.querySelector('.weight');
// var currentWeight = parseInt(weight.textContent);
// var height = document.querySelector('.height');
// var currentHeight = parseInt(height.textContent);




// age
// function upAge() {
//   if (currentAge < 100)
//     age.innerHTML = ++currentAge;
// }

// function downAge() {
//   if (currentAge > 0)
//     age.innerHTML = --currentAge;
// }

// // weight
// function upWeight() {
//   if (currentWeight < 150)
//     weight.innerHTML = ++currentWeight;
// }

// function downWeight() {
//   if (currentWeight > 0)
//     weight.innerHTML = --currentWeight;
// }

// // height
// function upHeight() {
//   if (currentHeight < 220)
//     height.innerHTML = ++currentHeight;
// }

// function downHeight() {
//   if (currentHeight > 0)
//     height.innerHTML = --currentHeight;
// }









// function for progressive bar

// var interior = document.querySelector('.exterior');
// var circle = document.querySelector('.circle');
// var pointer = document.querySelector('.pointer');
// var age = document.querySelector('.age');

// let isRotating = false;

// document.addEventListener('mousedown', function (e) {
//   if (e.target.closest('.exterior')) {
//     isRotating = true;
//   }
// });

// const rotateInterior = function (e) {
//   if (isRotating === true) {
//     let interiorX = interior.getBoundingClientRect().left + interior.clientWidth / 2;
//     let interiorY = interior.getBoundingClientRect().top + interior.clientHeight / 2;

//     let deltaX = e.clientX - interiorX;
//     let deltaY = e.clientY - interiorY;

//     let angleRad = Math.atan2(deltaY, deltaX);
//     let angleDeg = (angleRad * 180) / Math.PI;

//     let rotationAngle = ((angleDeg + 90 + 360) % 360);
//     pointer.style.transform = `rotate(${rotationAngle}deg)`

//     let progressPercent = rotationAngle / 360;
//     circle.style.strokeDashoffset = `${880 - (880 * (progressPercent))}`;

//     age.innerHTML = `${Math.round(progressPercent * 100)}`

//   }
// }

// document.addEventListener('mousemove',
//   rotateInterior);



var interior = document.querySelector('.interior');
var circle = document.querySelector('.circle');
var pointer = document.querySelector('.pointer');
var age = document.querySelector('.age');
var currentAge = parseInt(age.textContent)

let isRotating = false;
let lastAngle = 0; // Variable to store the last angle

document.addEventListener('mousedown', function (e) {
  if (e.target.closest('.interior')) {
    isRotating = true;
    // Get initial angle when mouse is clicked
    let interiorX = interior.getBoundingClientRect().left + interior.clientWidth / 2;
    let interiorY = interior.getBoundingClientRect().top + interior.clientHeight / 2;
    let deltaX = e.clientX - interiorX;
    let deltaY = e.clientY - interiorY;
    lastAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  }
});

const rotateInterior = function (e) {
  if (isRotating === true) {
    let interiorX = interior.getBoundingClientRect().left + interior.clientWidth / 2;
    let interiorY = interior.getBoundingClientRect().top + interior.clientHeight / 2;

    let deltaX = e.clientX - interiorX;
    let deltaY = e.clientY - interiorY;

    let angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = (angleRad * 180) / Math.PI;

    let rotationAngle = ((angleDeg + 90 + 360) % 360);

    // Calculate the difference in angle from the last position
    let angleDiff = rotationAngle - lastAngle;
    lastAngle = rotationAngle; // Update the last angle

    pointer.style.transform = `rotate(${rotationAngle}deg)`;

    let progressPercent = rotationAngle / 360;
    circle.style.strokeDashoffset = `${880 - (880 * (progressPercent))}`;

    let currentAge = Math.round(progressPercent * 100);
    age.innerHTML = `${currentAge}`;

  }
}

document.addEventListener('mousemove', rotateInterior);

document.addEventListener('mouseup', function () {
  isRotating = false;
});






// var age = document.querySelector('.age');
// var currentAge = parseInt(age.textContent);
var weight = document.querySelector('.weight');
var currentWeight = parseInt(weight.textContent);
var height = document.querySelector('.height');
var currentHeight = parseInt(height.textContent);
var upButton = document.querySelector('.up_button');

//age
function upAge(e) {
  if (currentAge < 100) {
    let interiorX = interior.getBoundingClientRect().left + interior.clientWidth / 2;
    let interiorY = interior.getBoundingClientRect().top + interior.clientHeight / 2;

    let deltaX = e.clientX - interiorX;
    let deltaY = e.clientY - interiorY;

    let angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = (angleRad * 180) / Math.PI;

    let rotationAngle = ((angleDeg + 90 + 360) % 360);
    console.log(rotationAngle)

    pointer.style.transform = `rotate(${rotationAngle}deg)`;

    let progressPercent = rotationAngle / 360;
    circle.style.strokeDashoffset = `${880 - (880 * (progressPercent))}`;


    let currentAge = Math.round(progressPercent * 100);
    console.log(currentAge)
    age.innerHTML = `${++currentAge}`;
  }
}

upButton.addEventListener('click', upAge);


function downAge() {
  if (currentAge > 0)
    age.innerHTML = --currentAge;
}

// weight
function upWeight() {
  if (currentWeight < 150)
    weight.innerHTML = ++currentWeight;
}

function downWeight() {
  if (currentWeight > 0)
    weight.innerHTML = --currentWeight;
}

// height
function upHeight() {
  if (currentHeight < 220)
    height.innerHTML = ++currentHeight;
}

function downHeight() {
  if (currentHeight > 0)
    height.innerHTML = --currentHeight;
}
