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
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/BenchPress1.MOV"></video>
                                 <video autoplay playsinline loop  muted src="/Videos/BenchPress1.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Lay flat on the bench with your feet on the ground. With straight arms unrack the bar.</h2>
                           <h2> <span>2</span>Lower the bar to your mid chest.</h2>
                           <h2> <span>3</span>Raise the bar until you've locked your elbows.</h2>` ;
    ex_name2.innerHTML = 'Push Up';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Push_Up1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Push_Up2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Lay Place your hands firmly on the ground, directly under shoulders.</h2>
                           <h2> <span>2</span>Flatten your back so your entire body is straight and slowly lower your body.</h2>
                           <h2> <span>3</span>Exhale as you push back to the starting position.</h2>` ;
    ex_name3.innerHTML = 'Dumbell Incline Bench Press';
    video_frames3.innerHTML = `<video  autoplay playsinline loop muted src="/Videos/Dumbell_Incline_BenchPress1.MOV"></video>
                                  <video  autoplay playsinline loop muted src="/Videos/Dumbell_Incline_BenchPress2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'shoulders') {
    ex_name1.innerHTML = 'Barbell Overhead Press';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Overhead_Press1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Overhead_Press1.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Dumbell Seated Overhead Press';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Seated_Overhead_Press1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Dumbell_Seated_Overhead_Press2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Cable Low Single Arm Laterlar Raise';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Cable_Low_Single_Arm_Latral_Raise1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Cable_Low_Single_Arm_Lateral_Raise2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle == 'biceps') {
    ex_name1.innerHTML = 'Barbell Curl';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Curl1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Curl1.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out.</h2>
                          <h2> <span>2</span>Continue the movement until your biceps are fully contracted and the bar is at shoulder level.</h2>
                          <h2> <span>3</span>Hold the contracted position for a second and squeeze the biceps hard.</h2>
                          <h2> <span>4</span>Slowly bring the weight back down to the starting position.</h2 >`;
    ex_name2.innerHTML = 'Chin Ups';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Chin_Ups1.MOV" ></video >
                           <video autoplay playsinline loop muted src="/Videos/Chin_Ups1.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Grab the bar shoulder width apart with a supinated grip (palms facing you)</h2 >
                           <h2> <span>2</span>With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.</h2>
                           <h2> <span>3</span>Slowly return to starting position. Repeat.</h2>` ;
    ex_name3.innerHTML = 'Dumbbell Curl';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Dumbell_Curl1.MOV" ></video >
                                <video autoplay playsinline loop muted src="/Videos/Dumbell_Curl1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Stand up straight with a dumbbell in each hand at arm's length.</h2 >
                                               <h2> <span>2</span>Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.</h2>
                                               <h2> <span>3</span>Lower to original position and repeat with opposite arm</h2>`
  } else if (muscle == 'forearms') {
    ex_name1.innerHTML = 'Chin Ups';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Chin_Ups1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Chin_Ups1.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Grab the bar shoulder width apart with a supinated grip (palms facing you)</h2>
                          <h2> <span>2</span>With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.</h2>
                          <h2> <span>3</span>Slowly return to starting position. Repeat.</h2>`;
    ex_name2.innerHTML = 'Dumbbell Wrist Curl';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Wrist_Curls1.MOV" ></video >
                           <video autoplay playsinline loop muted src="/Videos/Wrist_Curls1.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Grip the dumbbell with your palm facing upwards with your forearm rested against the bench.</h2 >
                           <h2> <span>2</span>Slowly curl your wrist upwards in a semicircular motion.</h2>
                           <h2> <span>3</span>Return to starting position and repeat.</h2>` ;
    ex_name3.innerHTML = 'Forearm Wrist Rotations';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Forearm_Wrist_Rotations1.MOV" ></video >
                                <video autoplay playsinline loop muted src="/Videos/Forearm_Wrist_Rotations1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Stand up straight with a dumbbell in each hand at arm's length.</h2 >
                                               <h2> <span>2</span>Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.</h2>
                                               <h2> <span>3</span>Lower to original position and repeat with opposite arm</h2>`
  } else if (muscle === 'obliques') {
    ex_name1.innerHTML = 'Hand Side Plank';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Hand_Side_Plank1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Hand_Side_Plank2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Russian Twist';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Russian_Twist1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Russian_Twist2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Dumbell Landmine Side Band';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Landmine_Side_Band1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Dumbell_Landmine_Side_Band1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'abs') {
    ex_name1.innerHTML = 'Hand Plank';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Hand_Plank1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Hand_Plank2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Russian Twist';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Russian_Twist1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Russian_Twist2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Hip Thrust';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Hip_Thrust1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Hip_Thrust2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'quads') {
    ex_name1.innerHTML = 'Squat';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Squat1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Squat2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Leg Press';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Machine_Leg_Press.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Machine_Leg_Press2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Kettlebell Step Up';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Kettlebell_Step_Up1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Kettlebell_Step_Up2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'calves') {
    ex_name1.innerHTML = 'Barbell Calf Raises';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="../Videos/Barbell_Calf_Raises1.MOV"></video>
                                 <video autoplay playsinline loop muted src="../Videos/Barbell_Calf_Raises2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Machine Seated Calf Raises';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Machine_Seated_Calf_Raises1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Machine_Seated_Calf_Raises2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Dumbell Calf Raises';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Calf_Raises1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Dumbell_Calf_Raises1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'traps') {
    ex_name1.innerHTML = 'Dumbell Seated Shrugs';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Seated_Shrug1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Dumbell_Seated_Shrug1.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Dumbell Shrugs';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Shrug1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Dumbell_Shrug1.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Barbell Silverback Shrugs';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Silverback_Shrug.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Silverback_Shrug1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'lads') {
    ex_name1.innerHTML = 'Chin Ups';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Chin_Ups1.MOV"></video>
                                 <video autoplay playsinline loop muted src = "/Videos/Chin_Ups1.MOV"></video>`;
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
  } else if (muscle === 'traps-middle') {
    ex_name1.innerHTML = 'Deadlift';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Barbell Low Bar Good Morning';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Low_Bar_Good_Morning2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Silverback shrugs';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Silverback_Shrug.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Silverback_Shrug1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'lowerback') {
    ex_name1.innerHTML = 'Deadlift';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Machine 45 Degree Back Extension';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Machine_45_Degree_Back_Extension1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Machine_45_Degree_Extension2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Barbell Low Good Morning';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'triceps') {
    ex_name1.innerHTML = 'French Press';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/French_Press1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/French_Press2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Cable Row Pushdown';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Cable_Rope_Pushdown1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Cable_Row_Pushdown2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Dumbell Skullcrushers';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Skulcrusher1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Dumbell_Skulcrusher1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'glutes') {
    ex_name1.innerHTML = 'Squat';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Squat1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Squat2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Hip Thrust';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Hip_Thrust1.MOV""></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Hip_Thrust2.MOV""></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Barbell Low Bar Good Morning';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Low_Bar_Good_Morning2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'hamstrings') {
    ex_name1.innerHTML = 'Machine Hamstring curls';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Machine_Hamstring_Curl1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Machine_Hamstring_Curl2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Barbell Low Bar Good Morning';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Deadlift';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'chest-f') {
    ex_name1.innerHTML = 'Bench Press';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/BenchPress(F)1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/BenchPress(F)2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Dumbell Seated Overhead Press';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Incline_BenchPress(F)1.mp4"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Dumbell_Incline_BenchPress(F)2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Push Up';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Push_Up(F)1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Push_Up(F)2.mp4"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'shoulders-f') {
    ex_name1.innerHTML = 'Barbell Overhead Press';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Overhead_Press(F)1.mp4"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Overhead_Press(F)2.mp4"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Dumbell Seated Overhead Press';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Seated_Overhead_Press(F)1.mp4"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Dumbell_Seated_Overhead_Press(F)2.mp4"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Cable Low Single Arm Laterlar Raise';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Cable_Low_Single_Arm_Lateral_Raise(F)1.mp4"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Cable_Low_Single_Arm_Lateral_Raise(F)2.mp4"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle == 'biceps-f') {
    ex_name1.innerHTML = 'Barbell Curl';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Curl(F)1.mp4"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Curl(F)2.mp4"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out.</h2>
                          <h2> <span>2</span>Continue the movement until your biceps are fully contracted and the bar is at shoulder level.</h2>
                          <h2> <span>3</span>Hold the contracted position for a second and squeeze the biceps hard.</h2>
                          <h2> <span>4</span>Slowly bring the weight back down to the starting position.</h2 >`;
    ex_name2.innerHTML = 'Dumbell Hammer Curls';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Dumbell_Hammer_Curls(F)1.mp4" ></video >
                           <video autoplay playsinline loop muted src="/Videos/Dumbell_Hammer_Curls(F)1.mp4"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Grab the bar shoulder width apart with a supinated grip (palms facing you)</h2 >
                           <h2> <span>2</span>With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.</h2>
                           <h2> <span>3</span>Slowly return to starting position. Repeat.</h2>` ;
    ex_name3.innerHTML = 'Dumbbell Curl';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Dumbell_Curls(F)1.mp4" ></video >
                                <video autoplay playsinline loop muted src="/Videos/Dumbell_Curl(F)2.mp4"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Stand up straight with a dumbbell in each hand at arm's length.</h2 >
                                               <h2> <span>2</span>Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.</h2>
                                               <h2> <span>3</span>Lower to original position and repeat with opposite arm</h2>`
  } else if (muscle == 'forearms-f') {
    ex_name1.innerHTML = 'Dumbell Row Unilateral';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Row_Unilateral(1)F.mp4"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Dumbell_Row_Unilateral(F)2.mp4"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Grab the bar shoulder width apart with a supinated grip (palms facing you)</h2>
                          <h2> <span>2</span>With your body hanging and arms fully extended, pull yourself up until your chin is past the bar.</h2>
                          <h2> <span>3</span>Slowly return to starting position. Repeat.</h2>`;
    ex_name2.innerHTML = 'Dumbbell Wrist Curl';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Wrist_Curls1.MOV" ></video >
                           <video autoplay playsinline loop muted src="/Videos/Wrist_Curls1.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Grip the dumbbell with your palm facing upwards with your forearm rested against the bench.</h2 >
                           <h2> <span>2</span>Slowly curl your wrist upwards in a semicircular motion.</h2>
                           <h2> <span>3</span>Return to starting position and repeat.</h2>` ;
    ex_name3.innerHTML = 'Forearm Wrist Rotations';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Forearm_Wrist_Rotations1.MOV" ></video >
                                <video autoplay playsinline loop muted src="/Videos/Forearm_Wrist_Rotations1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Stand up straight with a dumbbell in each hand at arm's length.</h2 >
                                               <h2> <span>2</span>Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder.</h2>
                                               <h2> <span>3</span>Lower to original position and repeat with opposite arm</h2>`
  } else if (muscle === 'obliques-f') {
    ex_name1.innerHTML = 'Hand Side Plank';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Hand_Side_Plank(F)1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Hand_Side_Plank(F)2.mp4"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Russian Twist';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Russian_Twist1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Russian_Twist2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Dumbell Landmine Side Band';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Landmine_Side_Band1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Dumbell_Landmine_Side_Band1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'abs-f') {
    ex_name1.innerHTML = 'Hand Plank';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Hand_Plank(F)1.mp4"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Hand_Plank(f)2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Russian Twist';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Russian_Twist1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Russian_Twist2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Hip Thrust';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Hip_Thrust1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Hip_Thrust2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'quads-f') {
    ex_name1.innerHTML = 'Squat';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Squat1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Squat2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Leg Press';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Machine_Leg_Press.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Machine_Leg_Press2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Kettlebell Step Up';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Kettlebell_Step_Up1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Kettlebell_Step_Up2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'calves-f') {
    ex_name1.innerHTML = 'Barbell Calf Raises';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="../Videos/Barbell_Calf_Raises1.MOV"></video>
                                 <video autoplay playsinline loop muted src="../Videos/Barbell_Calf_Raises2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Machine Seated Calf Raises';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Machine_Seated_Calf_Raises1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Machine_Seated_Calf_Raises2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Dumbell Calf Raises';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Calf_Raises1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Dumbell_Calf_Raises1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'traps-f') {
    ex_name1.innerHTML = 'Dumbell Seated Shrugs';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Seated_Shrug1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Dumbell_Seated_Shrug1.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Dumbell Shrugs';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Shrug1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Dumbell_Shrug1.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Barbell Silverback Shrugs';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Silverback_Shrug.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Silverback_Shrug1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'lads-f') {
    ex_name1.innerHTML = 'Chin Ups';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src = "/Videos/Chin_Ups1.MOV"></video>
                                 <video autoplay playsinline loop muted src = "/Videos/Chin_Ups1.MOV"></video>`;
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
  } else if (muscle === 'traps-middle-f') {
    ex_name1.innerHTML = 'Deadlift';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Barbell Low Bar Good Morning';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Low_Bar_Good_Morning2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Silverback shrugs';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Silverback_Shrug.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Silverback_Shrug1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'lowerback-f') {
    ex_name1.innerHTML = 'Deadlift';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Machine 45 Degree Back Extension';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Machine_45_Degree_Back_Extension1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Machine_45_Degree_Extension2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Barbell Low Good Morning';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'triceps-f') {
    ex_name1.innerHTML = 'French Press';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/French_Press1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/French_Press2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Cable Row Pushdown';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Cable_Rope_Pushdown1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Cable_Row_Pushdown2.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Dumbell Skullcrushers';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Dumbell_Skulcrusher1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Dumbell_Skulcrusher1.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'glutes-f') {
    ex_name1.innerHTML = 'Squat';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Squat1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Squat2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Hip Thrust';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Hip_Thrust1.MOV""></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Hip_Thrust2.MOV""></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Barbell Low Bar Good Morning';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Low_Bar_Good_Morning2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  } else if (muscle === 'hamstrings-f') {
    ex_name1.innerHTML = 'Machine Hamstring curls';
    video_frames1.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Machine_Hamstring_Curl1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Machine_Hamstring_Curl2.MOV"></video>`;
    advice1.innerHTML = `<h2> <span>1</span>Take a roughly shoulder width grip. There should be a straight line from your elbow to fist (vertical forearms).</h2>
                           <h2> <span>2</span>Pull your chin back and press the weight toward the ceiling by extending at the elbow joint and flexing at the shoulder joint.</h2>
                           <h2> <span>3</span>Press until your elbows are extended and push your head forward slightly.</h2>` ;
    ex_name2.innerHTML = 'Barbell Low Bar Good Morning';
    video_frames2.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>
                                 <video autoplay playsinline loop muted src="/Videos/Barbell_Low_Good_Morning1.MOV"></video>`;
    advice2.innerHTML = `<h2> <span>1</span>Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.</h2>
                           <h2> <span>2</span>Raise the dumbbells upwards and pause at the contracted position.</h2>
                           <h2> <span>3</span>Lower the weights back to starting position.</h2>` ;
    ex_name3.innerHTML = 'Deadlift';
    video_frames3.innerHTML = `<video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift1.MOV"></video>
                                  <video autoplay playsinline loop muted src="/Videos/Barbell_Deadlift2.MOV"></video>`;
    advice3.innerHTML = `<h2> <span>1</span>Lay flat on the incline bench with your feet on the ground. Raise the dumbbells until you have straight arms.</h2>
                                               <h2> <span>2</span>Lower the dumbbells to your mid chest.</h2>
                                               <h2> <span>3</span>Raise the dumbbells until you've locked your elbows.</h2>` ;
  }



  instructions.style.display = 'inline';
  SVG_male_frontElement.style.display = 'none';
  SVG_male_backElement.style.display = 'none';
  SVG_female_frontElement.style.display = 'none';
  SVG_female_backElement.style.display = 'none';
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










var interior_1 = document.querySelector('.interior_1');
var circle_1 = document.querySelector('.circle_1');
var pointer_1 = document.querySelector('.pointer_1');
var interior_2 = document.querySelector('.interior_2');
var circle_2 = document.querySelector('.circle_2');
var pointer_2 = document.querySelector('.pointer_2');
var interior_3 = document.querySelector('.interior_3');
var circle_3 = document.querySelector('.circle_3');
var pointer_3 = document.querySelector('.pointer_3');
var age = document.querySelector('.age');
var weight = document.querySelector('.weight');
var height = document.querySelector('.height');
var currentAge = parseInt(age.textContent);
var currentWeight = parseInt(weight.textContent);
var currentHeight = parseInt(height.textContent)

let isRotating = false;
let lastAngle_1 = 0;
let lastAngle_2 = 0;
let lastAngle_3 = 0;


//age
document.addEventListener('mousedown', function (e) {
  if (e.target.closest('.interior_1')) {
    isRotating = true;

    let interiorX = interior_1.getBoundingClientRect().left + interior_1.clientWidth / 2;
    let interiorY = interior_1.getBoundingClientRect().top + interior_1.clientHeight / 2;
    let deltaX = e.clientX - interiorX;
    let deltaY = e.clientY - interiorY;
    lastAngle_1 = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  } else
    //weight
    if (e.target.closest('.interior_2')) {
      isRotating = true;

      let interiorX = interior_2.getBoundingClientRect().left + interior_2.clientWidth / 2;
      let interiorY = interior_2.getBoundingClientRect().top + interior_2.clientHeight / 2;
      let deltaX = e.clientX - interiorX;
      let deltaY = e.clientY - interiorY;
      lastAngle_2 = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    } else
      //height
      if (e.target.closest('.interior_3')) {
        isRotating = true;

        let interiorX = interior_3.getBoundingClientRect().left + interior_3.clientWidth / 2;
        let interiorY = interior_3.getBoundingClientRect().top + interior_3.clientHeight / 2;
        let deltaX = e.clientX - interiorX;
        let deltaY = e.clientY - interiorY;
        lastAngle_3 = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      }
});



//age
const rotateInterior_1 = function (e) {
  if (isRotating === true) {
    let interiorX = interior_1.getBoundingClientRect().left + interior_1.clientWidth / 2;
    let interiorY = interior_1.getBoundingClientRect().top + interior_1.clientHeight / 2;

    let deltaX = e.clientX - interiorX;
    let deltaY = e.clientY - interiorY;

    let angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = (angleRad * 180) / Math.PI;

    let rotationAngle = ((angleDeg + 90 + 360) % 360);

    lastAngle_1 = rotationAngle;

    pointer_1.style.transform = `rotate(${rotationAngle}deg)`;

    let progressPercent = rotationAngle / 360;
    circle_1.style.strokeDashoffset = `${880 - (880 * (progressPercent))}`;

    let currentAge = Math.round(progressPercent * 100);
    age.innerHTML = `${currentAge}`;


  }
  corectAgeInput()

}

interior_1.addEventListener('mousemove', rotateInterior_1);


//weight
const rotateInterior_2 = function (e) {
  if (isRotating === true) {
    let interiorX = interior_2.getBoundingClientRect().left + interior_2.clientWidth / 2;
    let interiorY = interior_2.getBoundingClientRect().top + interior_2.clientHeight / 2;

    let deltaX = e.clientX - interiorX;
    let deltaY = e.clientY - interiorY;

    let angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = (angleRad * 180) / Math.PI;

    let rotationAngle = (angleDeg + 90 + 360) % 360;

    lastAngle_2 = rotationAngle;

    pointer_2.style.transform = `rotate(${rotationAngle}deg)`;

    let progressPercent = rotationAngle / 360;
    circle_2.style.strokeDashoffset = `${880 - (880 * progressPercent)}`;

    let currentWeight = Math.round((progressPercent * 2) * 100) + 40;
    weight.innerHTML = `${currentWeight}`;


  }
  corectWeightInput()


}
interior_2.addEventListener('mousemove', rotateInterior_2);

//height
const rotateInterior_3 = function (e) {
  if (isRotating === true) {
    let interiorX = interior_3.getBoundingClientRect().left + interior_3.clientWidth / 2;
    let interiorY = interior_3.getBoundingClientRect().top + interior_3.clientHeight / 2;

    let deltaX = e.clientX - interiorX;
    let deltaY = e.clientY - interiorY;

    let angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = (angleRad * 180) / Math.PI;

    let rotationAngle = (angleDeg + 90 + 360) % 360;

    lastAngle_3 = rotationAngle;

    pointer_3.style.transform = `rotate(${rotationAngle}deg)`;

    let progressPercent = rotationAngle / 360;
    circle_3.style.strokeDashoffset = `${880 - (880 * progressPercent)}`;

    let currentHeight = Math.round(progressPercent * 100) + 120;
    height.innerHTML = `${currentHeight}`;

  }
  corectHeightInput()
}
interior_3.addEventListener('mousemove', rotateInterior_3);


document.addEventListener('mouseup', function () {
  isRotating = false;
});




//age
function corectAgeInput() {
  if (age.textContent <= 100 && age.textContent >= 0) {
    progressPercent = age.textContent / 100;
    circle_1.style.strokeDashoffset = `${880 - (880 * (progressPercent))}`
    rotationAngle = progressPercent * 360;
    pointer_1.style.transform = `rotate(${rotationAngle}deg)`
  } else
    if (age.textContent < 0) {
      age.textContent = 17;
    } else
      if (age.textContent > 100) {
        age.textContent = 100
      }
}
//weight
function corectWeightInput() {
  var maxW = 240;
  var minW = 40;
  if (weight.textContent <= maxW && weight.textContent >= minW) {
    progressPercent = (weight.textContent - 40) / 200;
    circle_2.style.strokeDashoffset = `${880 - (880 * progressPercent)}`;
    rotationAngle = progressPercent * 360;
    pointer_2.style.transform = `rotate(${rotationAngle}deg)`;
  } else
    if (weight.textContent < minW) {
      weight.textContent = minW;
    } else
      if (weight.textContent > maxW) {
        weight.textContent = maxW;
      }
}

//height
function corectHeightInput() {
  var maxH = 220;
  var minH = 120;
  if (height.textContent <= maxH && height.textContent >= minH) {
    progressPercent = (height.textContent - 120) / 100;
    circle_3.style.strokeDashoffset = `${880 - (880 * progressPercent)}`;
    rotationAngle = progressPercent * 360;
    pointer_3.style.transform = `rotate(${rotationAngle}deg)`;
  } else
    if (height.textContent < minH) {
      height.textContent = minH;
      console.log(rotationAngle)
    } else
      if (height.textContent > maxH) {
        height.textContent = maxH;
      }
}


// let x;
let finalResult;
let objectiveList = Array.from(document.querySelectorAll('.weight_list input[type = "radio"]'));
// let intensityList = Array.from(document.querySelectorAll('.intensity_list input[type = "radio"]'))



// function checkObjective(event) {
//   x = event.target.value;
//   rezultat();
// }

// function rezultat() {
//   console.log(x)
// }

var y = 0;
function calculateResult() {

  objectiveList.forEach(function (objectiveItem) {
    objectiveItem.addEventListener('click', function checkObjective(event) {
      x = event.target.value;
      console.log(parseInt(x) + 1)
      // return parseInt(x)
    })
  })
  // y = checkObjective();
  // console.log(y)

}

calculateResult();


// aurel();


// function aurel() {
//   var y = 0;
//   x = checkObjective()
//   y = x;
//   console.log(y)
// }

// aurel()




// function aurel() {
//   checkObjective()
// }
// aurel()



// function checkIntensity(e) {
//   y = e.target.value;
//   console.log(y)
// }

// intensityList.forEach(function (intensityItem) {
//   intensityItem.addEventListener('click', checkIntensity)
// })










// function sidebar_active() {
//   sidebar.classList.add('active');
//   cal_container.classList.add('active');
// }

// function sidebar_pasive() {
//   sidebar.classList.remove('active');
//   cal_container.classList.remove('active')
// }
// btn.onclick = sidebar_toggle;
