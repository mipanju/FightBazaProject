    let SVG_male_frontElement = document.querySelector('.Male-Front');
    let SVG_male_backElement = document.querySelector ('.Male-Back');
    let SVG_female_frontElement = document.querySelector('.Female-Front');
    let SVG_female_backElement = document.querySelector ('.Female-Back');
    let buttonElement = document.querySelector('.js-swap_btn');
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


    let btn = document.querySelector('#btn');
    let sidebar = document.querySelector('.sidebar');
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
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
    };
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