    let SVG_male_frontElement = document.querySelector('.Male-Front');
    let SVG_male_backElement = document.querySelector ('.Male-Back');
    let SVG_female_frontElement = document.querySelector('.Female-Front');
    let SVG_female_backElement = document.querySelector ('.Female-Back');
    let buttonElement = document.querySelector('.js-swap_btn');
    let btn = document.querySelector('#btn');
    let sidebar = document.querySelector('.sidebar');
function swap(){
    if (buttonElement.innerHTML === '<i class="bx bx-male-sign"></i>'){
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
    function Show_exercise(muscle){
      if (muscle === 'chest'){
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
      } else if(muscle === 'shoulders'){
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
      }
      instructions.style.display = 'inline';
      SVG_male_frontElement.style.display = 'none';
      SVG_male_backElement.style.display = 'none';
      buttonElement.style.display = 'none';
      buttonElement_nd.style.display = 'inline';
    }
    function get_back(){
      instructions.style.display = 'none';
      SVG_male_frontElement.style.display = 'inline';
      SVG_male_backElement.style.display = 'inline';
      buttonElement_nd.style.display = 'none';
      buttonElement.style.display = 'inline';
    }

    
    function sidebar_toggle(){
      sidebar.classList.toggle('active');
    }
     btn.onclick = sidebar_toggle;