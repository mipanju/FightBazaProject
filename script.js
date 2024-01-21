function swap(){
    const SVG_male_frontElement = document.querySelector('.Male-Front');
    const SVG_male_backElement = document.querySelector ('.Male-Back');
    const SVG_female_frontElement = document.querySelector('.Female-Front');
    const SVG_female_backElement = document.querySelector ('.Female-Back');
    const buttonElement = document.querySelector('.js-swap_btn');
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

    btn.onclick = function(){
      sidebar.classList.toggle('active');
    };