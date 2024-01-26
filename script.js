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




     function resize(){
      sidebar.classList.toggle('active');
      if (sidebar.classList.contains('active' )){
      SVG_male_frontElement.style.display = 'none';
      SVG_male_backElement.style.display = 'none';
      SVG_female_frontElement.style.display = 'none';
      SVG_female_backElement.style.display = 'none';
      buttonElement.style.display = 'none'
    } else if(!sidebar.classList.contains('active') && buttonElement.innerHTML === '<i class="bx bx-male-sign"></i>' ) {
      SVG_male_frontElement.style.display = 'inline';
      SVG_male_backElement.style.display = 'inline';
      SVG_female_frontElement.style.display = 'none';
      SVG_female_backElement.style.display = 'none';
      buttonElement.style.display = 'inline';
    } else  {
      SVG_male_frontElement.style.display = 'none';
      SVG_male_backElement.style.display = 'none';
      SVG_female_frontElement.style.display = 'inline';
      SVG_female_backElement.style.display = 'inline';
      buttonElement.style.display = 'inline';
    }
    }
    function sidebar_toggle(){
      sidebar.classList.toggle('active');
    }
     function determine(){
      if (window.innerWidth >= 721){
        sidebar_toggle();
      } else{
        resize();
      }
     }
     btn.onclick = determine;
     let instructions = document.querySelector('.exercises_display')
     let computedStyle = window.getComputedStyle(instructions);
     console.log(computedStyle.display);
    
    let buttonElement_nd = document.querySelector('.js-swap_btn2')
    let specific_muscle = document.querySelector('.Body_map');
    let ex_name = document.querySelector('.exercise_name');
    let vieo_frames = document.querySelector('.video_container');
    function Show_exercise(){
      if (specific_muscle.id === 'chest'){
       ex_name.innerHTML = 'Barbell Bench Press';
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
 