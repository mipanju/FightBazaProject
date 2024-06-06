const createBtn = document.querySelector(".main_btn"),
popupBox = document.querySelector(".popup-box"),
logo = document.querySelector(".logo_svg"),
logoContainer = document.querySelector(".bg_logo"),
nextBtn = document.querySelector(".next_btn"),
backBtn = document.querySelector(".back_btn"),
multiStepForm = document.querySelector("[data-multi-step]"),
formSteps = [...multiStepForm.querySelectorAll("[data-step]")],
confirmCard = document.querySelector(".confirm_card"),
inputFields = document.querySelectorAll('.card input[type="text"], .card input[type="checkbox"]'),
planDisplay = document.querySelector('.plan-display'),
checkbox1 = document.getElementById('male'),
checkbox2 = document.getElementById('female'),
checkbox3 = document.getElementById('goal1'),
checkbox4 = document.getElementById('goal2'),
checkbox5 = document.getElementById('goal3'),
checkbox6 = document.getElementById('time1'),
checkbox7 = document.getElementById('time2'),
checkbox8 = document.getElementById('time3'),
checkbox9 = document.getElementById('time4'),
checkbox10 = document.getElementById('time5'),
checkbox11 = document.getElementById('time6'),
checkbox12 = document.getElementById('weighted'),
checkbox13 = document.getElementById('bodyweight'),
checkbox14 = document.getElementById('aesthetics'),
checkbox15 = document.getElementById('strength'),
checkbox16 = document.getElementById('beginner'),
checkbox17 = document.getElementById('intermediate'),
checkbox18 = document.getElementById('advanced'),
progressBar = document.querySelector('.progress-bar'),
disclaimer = document.querySelector('.disclaimer');


let currentStep = formSteps.findIndex(step => step.classList.contains("active"));
let counter = currentStep;

confirmCard.classList.remove("active");

if (currentStep < 0) {
    currentStep = 0;
    counter = 0;
    showCurrentStep();
}

formSteps.forEach((card, index) => {
    card.style.left = `${index * 100}%`;
});

nextBtn.addEventListener("click", () => {
    if (counter < formSteps.length - 1) {
        counter++;
        slideCard();
    }
});

backBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        slideCard();
    }
});

function progress(step){
    const widthPercentage = step * 14 + "%";
    progressBar.style.setProperty('--width', widthPercentage);
}

popupBox.addEventListener('keydown',function(e) {
    if (e.keyIdentifier === 'U+000A' || e.keyIdentifier === 'Enter' || e.keyCode === 13) {
        if (e.target.nodeName=='INPUT' && e.target.type=='text') {
            e.preventDefault();

            return false;
        }
    }
}, true);

function checkInputs(){
formSteps.forEach((card) => {
        const inpValueTxt = card.querySelector("input[type='text']");
        const inpValueNum = card.querySelector("input[placeholder='Height CM'], input[placeholder='Weight KG'], input[placeholder='Age']");
        
        if (inpValueTxt) {
            inpValueTxt.addEventListener("input", () => {
                if (inpValueTxt.value.trim()) {
                    card.querySelector(".next_btn").classList.add("active");
                } else {
                    card.querySelector(".next_btn").classList.remove("active");
                }
            });
        }

        if (inpValueNum) {
            inpValueNum.addEventListener("input", () => {
                if (!isNaN(inpValueNum.value) && Number(inpValueNum.value) > 0) {
                    card.querySelector(".next_btn").classList.add("active");
                } else {
                    card.querySelector(".next_btn").classList.remove("active");
                }
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        const diffForms = document.querySelectorAll('.diff_form');

        diffForms.forEach(function (form) {
            const checkboxes = form.querySelectorAll('input[type="checkbox"]');
            const nextButton = form.querySelector('.next_btn'); 

            checkboxes.forEach(function (checkbox) {
                checkbox.addEventListener('change', function () {
                    const checkedCheckboxes = form.querySelectorAll('input[type="checkbox"]:checked');
                    if (checkedCheckboxes.length > 0) {
                        nextButton.classList.add('active');
                        nextButton.disabled = false;
                    } else {
                        nextButton.classList.remove('active');
                        nextButton.disabled = true;
                    }
                });
            });
            
            if (form.classList.contains('weekDays')){
                const checkboxes = form.querySelectorAll('input[type="checkbox"]');
                const nextButton = form.querySelector('.next_btn'); 

                checkboxes.forEach(function (checkbox) {
                checkbox.addEventListener('change', function () {
                    const checkedCheckboxes = form.querySelectorAll('input[type="checkbox"]:checked');
                    if (checkedCheckboxes.length > 1) {
                        nextButton.classList.add('active');
                        nextButton.disabled = false;
                    } else {
                        nextButton.classList.remove('active');
                        nextButton.disabled = true;
                    }
                });
            });
            }

        });
    });

    const dayInputs = document.querySelectorAll('.diff_form.weekdays input');
    dayInputs.forEach((day)=>{
        day.addEventListener('change')
    })
}
checkInputs();

function slideCard() {
    formSteps.forEach((card) => {
        card.style.transform = `translate(-${counter * 100}%, -50%)`;
    });
    showCurrentStep();
}
checkbox1.addEventListener('change', function() {
    if (this.checked) {
        checkbox2.checked = false; 
    }
});

checkbox2.addEventListener('change', function() {
    if (this.checked) {
        checkbox1.checked = false;
    }
});
checkbox3.addEventListener('change', function() {
    if (this.checked){
        checkbox4.checked = false;
        checkbox5.checked = false;
    }
})
checkbox4.addEventListener('change', function() {
    if (this.checked){
        checkbox3.checked = false;
        checkbox5.checked = false;
    }
})
checkbox5.addEventListener('change', function() {
    if (this.checked){
        checkbox3.checked = false;
        checkbox4.checked = false;
    }
})
checkbox6.addEventListener('change', function() {
    if (this.checked){
        checkbox7.checked = false;
        checkbox8.checked = false;
        checkbox9.checked = false;
        checkbox10.checked = false;
        checkbox11.checked = false;
    }
})
checkbox7.addEventListener('change', function() {
    if (this.checked){
        checkbox6.checked = false;
        checkbox8.checked = false;
        checkbox9.checked = false;
        checkbox10.checked = false;
        checkbox11.checked = false;
    }
})
checkbox8.addEventListener('change', function() {
    if (this.checked){
        checkbox7.checked = false;
        checkbox6.checked = false;
        checkbox9.checked = false;
        checkbox10.checked = false;
        checkbox11.checked = false;
    }
})
checkbox9.addEventListener('change', function() {
    if (this.checked){
        checkbox7.checked = false;
        checkbox8.checked = false;
        checkbox6.checked = false;
        checkbox10.checked = false;
        checkbox11.checked = false;
    }
})
checkbox10.addEventListener('change', function() {
    if (this.checked){
        checkbox7.checked = false;
        checkbox8.checked = false;
        checkbox9.checked = false;
        checkbox6.checked = false;
        checkbox11.checked = false;
    }
})
checkbox11.addEventListener('change', function() {
    if (this.checked){
        checkbox7.checked = false;
        checkbox8.checked = false;
        checkbox9.checked = false;
        checkbox10.checked = false;
        checkbox6.checked = false;
    }
})
checkbox12.addEventListener('change', function() {
    if (this.checked){
        checkbox13.checked = false;
    }
})
checkbox13.addEventListener('change', function() {
    if (this.checked){
        checkbox12.checked = false;
    }
})
checkbox14.addEventListener('change', function() {
    if (this.checked){
        checkbox15.checked = false;
    }
})
checkbox15.addEventListener('change', function() {
    if (this.checked){
        checkbox14.checked = false;
    }
})
checkbox16.addEventListener('change', function() {
    if (this.checked){
        checkbox17.checked = false;
        checkbox18.checked = false;
    }
})
checkbox17.addEventListener('change', function() {
    if (this.checked){
        checkbox16.checked = false;
        checkbox18.checked = false;
    }
})
checkbox18.addEventListener('change', function() {
    if (this.checked){
        checkbox16.checked = false;
        checkbox17.checked = false;
    }
})



document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const activeCard = document.querySelector('.card.active');
        const inputField = activeCard.querySelector('input[type="text"]');
        const checkboxes = activeCard.querySelectorAll('input[type="checkbox"]');
        const isInputFilled = inputField && inputField.value.trim() !== "";
        const isCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        
        if (isInputFilled || isCheckboxChecked) {
            const nextBtn = activeCard.querySelector('.next_btn');
            nextBtn.click();
        }
    }
});


popupBox.addEventListener("click", e => {
    if (e.target.tagName === "I") {
        confirmCard.classList.add("active");
        document.querySelector('.card.active').style.display = "none";
        confirmCard.addEventListener("click", e => {
            if(e.target.classList.contains("y_btn")){
                popupBox.classList.remove("show");
                planDisplay.style.display = "none";
                document.querySelector("body").style.overflow = "visible";
                progress(0);
                logo.style.display = "block";
                createBtn.style.display = "block";
                logoContainer.style.display = "flex";
                document.querySelector('.card.active').style.display = "block";
                confirmCard.classList.remove("active");
                inputFields.forEach(function (input) {
                    if (input.type === 'text') {
                        input.value = ''; 
                    } else if (input.type === 'checkbox') {
                        input.checked = false;
                    }
                });
                checkInputs();
                formSteps.forEach((card) => {
                    card.querySelector(".next_btn").classList.remove("active");
                });
            } else{
                confirmCard.classList.remove("active");
                document.querySelector('.card.active').style.display = "block";
            }
        })
        
    }
});
multiStepForm.addEventListener("click", e => {
    if (e.target.matches("[data-next]")) {
        currentStep++;
        if (currentStep < formSteps.length) {
            counter = currentStep;
            progress(counter);
            slideCard();
        } else {
            currentStep = formSteps.length - 1;
        }
    } else if (e.target.matches("[data-previous]")) {
        currentStep--;
        if (currentStep >= 0) {
            counter = currentStep;
            progress(counter);
            slideCard();
        } else {
            currentStep = 0;
        }
    }
});

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === counter);
    });
}

const generateBtn = document.querySelector(".generate_btn");
const workoutWindow = document.querySelector('.img-container');
const exGrid = document.querySelector('.grid-container');
const mainCont = document.querySelector('.main-content');
const changePlanBtn = document.querySelector('.change_plan_btn');

changePlanBtn.addEventListener("click", ()=>{
    algorithm();
    document.querySelector("body").style.overflow = "hidden";
    planDisplay.classList.remove('active');
    popupBox.classList.add("show");
    progressBar.classList.add("active");
    confirmCard.classList.remove("active");
    progressBar.style.transform = 'none';
    currentStep = 0;
    counter = 0;
    progress(0);
    showCurrentStep();
    slideCard();
})

generateBtn.addEventListener("click", () => {
    algorithm();
    const currentCard = document.querySelector(".card.active");
    const loader = document.querySelector('.load');
    const planDisplay = document.querySelector('.plan-display')
    currentCard.classList.remove('active');
    progressBar.style.transform = 'translateY(110px)'
    progress(0);
    disclaimer.classList.add('active');
    loader.classList.add('active');
    setTimeout(() =>{
        let i = 0;
        let interval_1 = setInterval(() =>{
            const widthPercentage = i + "%";
            progressBar.style.setProperty('--width', widthPercentage);
            i = i + .1;
        },1)
        setTimeout(()=>{
            clearInterval(interval_1);
        },6000);
    }, 500);
   
    setTimeout(() =>{
        document.querySelector("body").style.overflow = "visible";
        disclaimer.classList.remove('active');
        loader.classList.remove('active');
        progressBar.classList.remove("active");
        planDisplay.classList.add('active');
        progress(0);
        popupBox.classList.remove("show");
    }, 6000);
    })

  
    createBtn.addEventListener("click", () => {
        if (createBtn.innerHTML === "View Plan") {
            planDisplay.classList.add('active');
            logo.style.display = "none";
            createBtn.style.display = "none";
            logoContainer.style.display = "none";
            confirmCard.style.display = "none";
            planDisplay.style.display = "flex";
        } else {
            document.querySelector("body").style.overflow = "hidden";
            confirmCard.classList.remove("active");
            popupBox.classList.add("show");
            progressBar.classList.add("active");
            currentStep = 0;
            counter = 0;
            showCurrentStep();
            slideCard();
            logo.style.display = "none";
            createBtn.style.display = "none";
            logoContainer.style.display = "none";
            inputFields.forEach(function (input) {
                 if (input.type === 'checkbox') {
                    input.checked = false;
                }
            });
        }
    });


    const dayContainers = document.querySelectorAll('.day-container');
    dayContainers.forEach((dayContainer)=>{
        dayContainer.addEventListener("click", ()=>{
            if (!dayContainer.classList.contains('rest-day')){
                planDisplay.classList.remove('active');
                exGrid.classList.add("active");
                goBackBtn.classList.add('active');
                if (dayContainer.querySelector('h2').innerHTML === 'Pull Workout'){
                    exGrid.querySelector('.wk-name').innerHTML = 'Pull Workout';
                    exGrid.querySelector('.exercise-grid').innerHTML = Workouts[0];
                } else if (dayContainer.querySelector('h2').innerHTML === 'Push Workout'){
                    exGrid.querySelector('.wk-name').innerHTML = 'Push Workout';
                    exGrid.querySelector('.exercise-grid').innerHTML = Workouts[1];
                } else if (dayContainer.querySelector('h2').innerHTML === 'Leg Workout'){
                    exGrid.querySelector('.wk-name').innerHTML = 'Leg Workout';
                    exGrid.querySelector('.exercise-grid').innerHTML = Workouts[2]; 
                }
                else if (dayContainer.querySelector('h2').innerHTML === 'Full Body'){
                    exGrid.querySelector('.wk-name').innerHTML = 'Full Body';
                    exGrid.querySelector('.exercise-grid').innerHTML = Workouts[3]; 
                } else if (dayContainer.querySelector('h2').innerHTML === 'Bodyweight Push Workout'){
                    exGrid.querySelector('.wk-name').innerHTML = 'Bodyweight Push Workout';
                    exGrid.querySelector('.exercise-grid').innerHTML = Workouts[4]; 
                } else if (dayContainer.querySelector('h2').innerHTML === 'Bodyweight Pull Workout'){
                    exGrid.querySelector('.wk-name').innerHTML = 'Bodyweight Pull Workout';
                    exGrid.querySelector('.exercise-grid').innerHTML = Workouts[5]; 
                } else if (dayContainer.querySelector('h2').innerHTML === 'Full Bodyweight Workout'){
                    exGrid.querySelector('.wk-name').innerHTML = 'Full Bodyweight Workout';
                    exGrid.querySelector('.exercise-grid').innerHTML = Workouts[6]; 
                } else if (dayContainer.querySelector('h2').innerHTML === 'Bodyweight Legs Workout'){
                    exGrid.querySelector('.wk-name').innerHTML = 'Bodyweight Legs Workout';
                    exGrid.querySelector('.exercise-grid').innerHTML = Workouts[7]; 
                }
                setTimeout(() => {
                    exGrid.style.opacity = '1';
                    planDisplay.style.display = 'none';
                    mainCont.style.minHeight = '140vh'; 
                }, 250);
            }
        })
    })
    

    function algorithm(){
        const MonCheck = document.querySelector('#MonCh');
        const TueCheck = document.querySelector('#TueCh');
        const WenCheck = document.querySelector('#WenCh');
        const ThuCheck = document.querySelector('#ThuCh');
        const FriCheck = document.querySelector('#FriCh');
        const SatCheck = document.querySelector('#SatCh');
        const SunCheck = document.querySelector('#SunCh');
        const date = new Date();
        const currentDay = date.getDay();
        const weekDay = [
            'Sun',
            'Mon',
            'Tue',
            'Wen',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ];
        
        let numberOfDays = 0;
        const dayContainers = document.querySelectorAll('.day-container');
        if(MonCheck.checked === false){
            dayContainers[0].classList.add('rest-day');
            dayContainers[0].querySelector('h2').innerHTML = 'Rest Day';
        } else {dayContainers[0].classList.remove('rest-day');
            numberOfDays++;
         }
        if(TueCheck.checked === false){
            dayContainers[1].classList.add('rest-day');
            dayContainers[1].querySelector('h2').innerHTML = 'Rest Day';
        } else {dayContainers[1].classList.remove('rest-day'); 
            numberOfDays++;
        }
        if(WenCheck.checked === false){
            dayContainers[2].classList.add('rest-day');
            dayContainers[2].querySelector('h2').innerHTML = 'Rest Day';
        } else {dayContainers[2].classList.remove('rest-day'); 
            numberOfDays++;
        }
        if(ThuCheck.checked === false){
            dayContainers[3].classList.add('rest-day');
            dayContainers[3].querySelector('h2').innerHTML = 'Rest Day';
        } else {dayContainers[3].classList.remove('rest-day'); 
            numberOfDays++;
        }
        if(FriCheck.checked === false){
            dayContainers[4].classList.add('rest-day');
            dayContainers[4].querySelector('h2').innerHTML = 'Rest Day';
        } else {dayContainers[4].classList.remove('rest-day'); 
            numberOfDays++;
        }
        if(SatCheck.checked === false){
            dayContainers[5].classList.add('rest-day');
            dayContainers[5].querySelector('h2').innerHTML = 'Rest Day';
        } else {dayContainers[5].classList.remove('rest-day');
            numberOfDays++;
         }
        if(SunCheck.checked === false){
            dayContainers[6].classList.add('rest-day');
            dayContainers[6].querySelector('h2').innerHTML = 'Rest Day';
        } else {dayContainers[6].classList.remove('rest-day'); 
            numberOfDays++;
        }
         
        const nrDays = document.querySelectorAll('.time-specs h2')[0];
        nrDays.innerHTML = `${numberOfDays}`;
        
       const chosenDays = [];
       dayContainers.forEach((container)=>{
        if(!container.classList.contains('rest-day')){
            chosenDays.push(container);
        }
       })
       const weightedCheck = document.querySelector('#weighted');
       const bdweightedCheck = document.querySelector('#bodyweight');
       if(weightedCheck.checked){
        if(numberOfDays === 2){
            chosenDays[0].querySelector('h2').innerHTML = 'Full Body';
            chosenDays[1].querySelector('h2').innerHTML = 'Full Body';
            document.querySelector('.plan-name h2').innerHTML = 'Twice-a-Week Gym routine';
            document.querySelector('.plan-desc p').innerHTML = ' A two-day a week full body lifting routine with a focus on barbell lifts like squat, deadlift, and bench press. Ideal for building a great physique and getting stronger if you can only get to the gym a couple times a week.'
           } else if (numberOfDays === 3){
            chosenDays[0].querySelector('h2').innerHTML = 'Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Leg Workout';
            document.querySelector('.plan-name h2').innerHTML = 'Twice-a-Week Gym routine';
            document.querySelector('.plan-desc p').innerHTML = `Three days a week of lifting with a focus on barbell lifts. Two lower body workouts and two upper body workouts that get rotated through every 4 lifting days. Ideal for intermediate or advanced trainees who want to build a great physique and get stronger, but either can't handle the workload of a full 4 day split or can only make it to the gym 3x/week.`
           } else if (numberOfDays === 4){
            chosenDays[0].querySelector('h2').innerHTML = 'Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Leg Workout';
            chosenDays[3].querySelector('h2').innerHTML = 'Full Body';
            document.querySelector('.plan-name h2').innerHTML = 'nSuns LP 4-day';
            document.querySelector('.plan-desc p').innerHTML = `An effective barbell-focused routine inspired by Jim Wendler's 5/3/1. The routine was developed and popularized by a user on reddit's /r/fitness forum. The focus of the routine is on improving strength in big compound lifts like bench, squat, and deadlift, but it's also effective for building muscle.`
           } else if (numberOfDays === 5){
            chosenDays[0].querySelector('h2').innerHTML = 'Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Leg Workout';
            chosenDays[3].querySelector('h2').innerHTML = 'Full Body';
            chosenDays[4].querySelector('h2').innerHTML = 'Push Workout';
            document.querySelector('.plan-name h2').innerHTML = 'Five-day PPL Split';
            document.querySelector('.plan-desc p').innerHTML = `Five days a week of lifting with a focus on barbell lifts. Two lower body workouts, two pull workouts, and two push workouts that get rotated through every 6 lifting days. The ideal setup for anyone who wants to train 5 days/week and build a great physique (as well as getting stronger). Also allows for the possibility of shorter workouts with similar results to less frequent routines since the work is split over so many days.`
           } else if (numberOfDays === 6){
            chosenDays[0].querySelector('h2').innerHTML = 'Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Leg Workout';
            chosenDays[3].querySelector('h2').innerHTML = 'Full Body';
            chosenDays[4].querySelector('h2').innerHTML = 'Push Workout';
            chosenDays[5].querySelector('h2').innerHTML = 'Pull Workout';
            document.querySelector('.plan-name h2').innerHTML = 'Push/Pull/Legs Split';
            document.querySelector('.plan-desc p').innerHTML = `Six days a week of lifting with a focus on barbell lifts. Two lower body workouts, two pull workouts, and two push workouts per week. The ideal setup for anyone who wants to train 6 days/week and build a great physique (as well as getting stronger). Also allows for the possibility of shorter workouts with similar results to less frequent routines since the work is split over so many days.`
           } else if (numberOfDays === 7){
            chosenDays[0].querySelector('h2').innerHTML = 'Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Leg Workout';
            chosenDays[3].querySelector('h2').innerHTML = 'Full Body';
            chosenDays[4].querySelector('h2').innerHTML = 'Push Workout';
            chosenDays[5].querySelector('h2').innerHTML = 'Leg Workout';
            chosenDays[6].querySelector('h2').innerHTML = 'Pull Workout';
            document.querySelector('.plan-name h2').innerHTML = 'Push/Pull/Legs Split';
            document.querySelector('.plan-desc p').innerHTML = `Seven days a week of lifting with a focus on barbell lifts. Two lower body workouts, two pull workouts, and two push workouts per week. The ideal setup for anyone who wants to train 6 days/week and build a great physique (as well as getting stronger). Also allows for the possibility of shorter workouts with similar results to less frequent routines since the work is split over so many days.`
           }
       } else if(bdweightedCheck.checked){
        if(numberOfDays === 2){
            chosenDays[0].querySelector('h2').innerHTML = 'Full Bodyweight Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Full Bodyweight Workout';
            document.querySelector('.plan-name h2').innerHTML = 'Twice-a-week Bodyweight';
            document.querySelector('.plan-desc p').innerHTML = 'A two-day a week full body routine that uses progressive bodyweight exercises that can be adjusted for any fitness level. Ideal for building a great physique and getting stronger if you have access to a pullup bar or gymnastics rings and can only train a couple times a week.'
           } else if (numberOfDays === 3){
            chosenDays[0].querySelector('h2').innerHTML = 'Bodyweight Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Bodyweight Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Bodyweight Legs Workout';
            document.querySelector('.plan-name h2').innerHTML = 'Three times-a-week Bodyweight';
            document.querySelector('.plan-desc p').innerHTML = `A three-day a week full body routine that uses progressive bodyweight exercises that can be adjusted for any fitness level. Ideal for building a great physique and getting stronger if you have access to a pullup bar or gymnastics rings and can only train a couple times a week.`
           } else if (numberOfDays === 4){
            chosenDays[0].querySelector('h2').innerHTML = 'Bodyweight Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Bodyweight Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Bodyweight Legs Workout';
            chosenDays[3].querySelector('h2').innerHTML = 'Full Bodyweight Workout';
            document.querySelector('.plan-name h2').innerHTML = 'Upper/Lower Bodyweight';
            document.querySelector('.plan-desc p').innerHTML = `A four-day a week routine (two upper body and two lower body workouts) that uses progressive bodyweight exercises that can be adjusted for any fitness level. Ideal for intermediate or advanced trainees who want to build a great physique or get stronger and who have access to a pullup bar or gymnastics rings.`
           } else if (numberOfDays === 5){
            chosenDays[0].querySelector('h2').innerHTML = 'Bodyweight Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Bodyweight Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Bodyweight Legs Workout';
            chosenDays[3].querySelector('h2').innerHTML = 'Full Bodyweight Workout';
            chosenDays[4].querySelector('h2').innerHTML = 'Bodyweight Push Workout';
            document.querySelector('.plan-name h2').innerHTML = '5-day Bodyweight PPL';
            document.querySelector('.plan-desc p').innerHTML = `A five-day a week routine (one push, one pull, and one leg workout rotating every three workout days) that uses progressive bodyweight exercises that can be adjusted for any fitness level. Ideal for trainees who want to train 5 days/week and build a great physique or get stronger and who have access to a pullup bar and a place to do rows (gymnastics rings, a sturdy table, etc.).`
           } else if (numberOfDays === 6){
            chosenDays[0].querySelector('h2').innerHTML = 'Bodyweight Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Bodyweight Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Bodyweight Legs Workout';
            chosenDays[3].querySelector('h2').innerHTML = 'Full Bodyweight Workout';
            chosenDays[4].querySelector('h2').innerHTML = 'Bodyweight Push Workout';
            chosenDays[5].querySelector('h2').innerHTML = 'Bodyweight Pull Workout';
            document.querySelector('.plan-name h2').innerHTML = 'Bodyweight PPL';
            document.querySelector('.plan-desc p').innerHTML = `A six-day a week routine (two push workouts, two pull workouts, and two leg workouts every week) that uses progressive bodyweight exercises that can be adjusted for any fitness level. Ideal for trainees who want to build a great physique or get stronger and who have access to a pullup bar and a place to do rows (gymnastics rings, a sturdy table, etc.).`
           } else if (numberOfDays === 7){
            chosenDays[0].querySelector('h2').innerHTML = 'Bodyweight Push Workout';
            chosenDays[1].querySelector('h2').innerHTML = 'Bodyweight Pull Workout';
            chosenDays[2].querySelector('h2').innerHTML = 'Bodyweight Legs Workout';
            chosenDays[3].querySelector('h2').innerHTML = 'Full Bodyweight Workout';
            chosenDays[4].querySelector('h2').innerHTML = 'Bodyweight Push Workout';
            chosenDays[5].querySelector('h2').innerHTML = 'Bodyweight Legs Workout';
            chosenDays[6].querySelector('h2').innerHTML = 'Bodyweight Pull Workout';
            document.querySelector('.plan-name h2').innerHTML = '7-day Bodyweight PPL';
            document.querySelector('.plan-desc p').innerHTML = `A seven-day a week routine (two push workouts, two pull workouts, and two leg workouts every week) that uses progressive bodyweight exercises that can be adjusted for any fitness level. Ideal for trainees who want to build a great physique or get stronger and who have access to a pullup bar and a place to do rows (gymnastics rings, a sturdy table, etc.).`
           }
       }
       


        dayContainers.forEach((container)=>{
            if(container.id === weekDay[currentDay]){
                container.classList.add('current');
                container.querySelector('.check-logo').innerHTML=
                `<img src="LogoFRCpng.png">`;
                if(container.querySelector('h2').innerHTML === 'Push Workout'){
                    workoutWindow.style.backgroundImage = 'url(/Images/Push_Workout.png)';
                    workoutWindow.querySelector('.wk-name').innerHTML = 'Push Workout';
                } else if(container.querySelector('h2').innerHTML === 'Rest Day'){
                    workoutWindow.style.backgroundImage = 'url(/Images/Rest_DayM.png)';
                    workoutWindow.querySelector('.wk-name').innerHTML = 'Rest Day';
                    workoutWindow.querySelector('.wk-time').style.display = 'none';
                    workoutWindow.querySelector('.bx-play-circle').style.display = 'none';
                } else if(container.querySelector('h2').innerHTML === 'Pull Workout'){
                    workoutWindow.style.backgroundImage = 'url(/Images/Pull_Workout.png)';
                    workoutWindow.querySelector('.wk-name').innerHTML = 'Pull Workout';
                } else if(container.querySelector('h2').innerHTML === 'Leg Workout'){
                    workoutWindow.style.backgroundImage = 'url(/Images/Leg_Workout.png)';
                    workoutWindow.querySelector('.wk-name').innerHTML = 'Leg Workout';
                } else if(container.querySelector('h2').innerHTML === 'Full Body'){
                    workoutWindow.style.backgroundImage = 'url(/Images/FullBody_Workout.png)';
                    workoutWindow.querySelector('.wk-name').innerHTML = 'Full Body';
                } else if(container.querySelector('h2').innerHTML === 'Bodyweight Push Workout'){
                    workoutWindow.style.backgroundImage = 'url(/Images/Bodyweght_Push.png)';
                    workoutWindow.querySelector('.wk-name').innerHTML = 'BodyweightPush';
                } else if(container.querySelector('h2').innerHTML === 'Bodyweight Pull Workout'){
                    workoutWindow.style.backgroundImage = 'url(/Images/Bodyweght_Pull.png)';
                    workoutWindow.querySelector('.wk-name').innerHTML = 'Bodyweight Pull';
                } else if(container.querySelector('h2').innerHTML === 'Full Bodyweight Workout'){
                    workoutWindow.style.backgroundImage = 'url(/Images/FullBody_Workout.png)';
                    workoutWindow.querySelector('.wk-name').innerHTML = 'Full Bodyweight';
                } else if(container.querySelector('h2').innerHTML === 'Bodyweight Legs Workout'){
                    workoutWindow.style.backgroundImage = 'url(/Images/Leg_Workout.png)';
                    workoutWindow.querySelector('.wk-name').innerHTML = 'Bodyweight Legs';
                }
            } 
        });
        

        const minsPerWk = document.querySelectorAll('.time-specs h2')[1];
        const checkbox6 = document.getElementById('time1'),
        checkbox7 = document.getElementById('time2'),
        checkbox8 = document.getElementById('time3'),
        checkbox9 = document.getElementById('time4'),
        checkbox10 = document.getElementById('time5'),
        checkbox11 = document.getElementById('time6');

        if (checkbox6.checked === true){
            minsPerWk.innerHTML = '10-15'
        }
        if (checkbox7.checked === true){
            minsPerWk.innerHTML = '15-25'
        }
        if (checkbox8.checked === true){
            minsPerWk.innerHTML = '30-45'
        }
        if (checkbox9.checked === true){
            minsPerWk.innerHTML = '45-60'
        }
        if (checkbox10.checked === true){
            minsPerWk.innerHTML = '55-70'
        }
        if (checkbox11.checked === true){
            minsPerWk.innerHTML = '70-90'
        }
    }

    const backToMainBtn = document.querySelector('.back_to_main_btn');
    const Footer = document.querySelector('footer');
    const Vids = [
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/83/be2597111234364c4edae5994e33ed1c-1508215620.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/88/143b3e2dc573dd7f8dd1f783e0664f59-1508215500.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/100/fa42078024a8e2c0fb91da746d7967ba-1508215500.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/119/b984ba7f0c512ff070add9eec0fda60e-1508215560.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/99/a949f275def117bb84c484fdebe71a76-1508215500.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/73/903f28ca8f83ad9a838c0ce1612d8b29-1508215560.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/78/f0f7d9dcf11ada32715ce5812d4f86a1-1508215500.mp4",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-push-down-side.mp4#t=0.1",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/123/4574af6c5cbccd449b3871439a0fad1c-1508215560.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/59/3ebadad07167f29ccb790dbe945633b7-1508215620.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/68/efe39c850ec593b94c6c7e99433cb3dc-1508215620.mp4",
            "https://media.musclewiki.com/media/uploads/videos/branded/male-machine-leg-press-front.mp4#t=0.1",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/112/e7c2223c06212b735d0f2627b6647ec1-1508215500.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/110/857809a50e1d469b3b0fca73ea948348-1508215500.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/59/3ebadad07167f29ccb790dbe945633b7-1508215620.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/73/903f28ca8f83ad9a838c0ce1612d8b29-1508215560.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/83/be2597111234364c4edae5994e33ed1c-1508215620.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/98/f99f7f6fe49648dacef8d119f9c6fbd2-1508215620.mp4",
            "https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/107/8da1ded3121e6b4d8dd8064e90710029-1508215500.mp4"

        ];

    
            const Workouts = [
                `     <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[0]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Bent Over Row</h2>
                                    <p> 4x10-12 reps </p>
                                    <p> 12-14 min </p>
                                    <p> Novice </p>
                                    <p><img src="/Images/Barbell.png" alt=""> &nbsp Dumbbells</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-back1.png">
                            </div>
                        </div>
                        <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[1]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Lat Pulldown</h2>
                                    <p> 3x10-11 reps </p>
                                    <p> 10-12 min </p>
                                    <p> Intermediate </p>
                                    <p><img src="/Images/Cable.png" alt=""> &nbsp Cable</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-back1.png">
                            </div>
                        </div>
                        <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[2]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Hammer Curl</h2>
                                    <p> 4x8-12 reps </p>
                                    <p> 10-11 min </p>
                                    <p> Novice </p>
                                    <p><img src="/Images/Dumbell.png" alt=""> &nbsp Dumbbells</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-front1.png">
                            </div>
                        </div>
                        <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[3]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Cable Face Pull</h2>
                                    <p> 5x15-20 reps </p>
                                    <p> 15-20 min </p>
                                    <p> Novice </p>
                                    <p><img src="/Images/Cable.png" alt=""> &nbsp Cable</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-back2.png">
                            </div>
                        </div>
                        <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[4]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Dumbell Bicep Curl</h2>
                                    <p> 4x10-12 reps </p>
                                    <p> 12-14 min </p>
                                    <p> Novice </p>
                                    <p><img src="/Images/Dumbell.png" alt=""> &nbsp Dumbbells</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-front1.png">
                            </div>
                        </div>
                        `,
                `   <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[5]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Bench Press</h2>
                                    <p> 4x5-7 reps </p>
                                    <p> 10-13 min </p>
                                    <p> Intermediate </p>
                                    <p><img src="/Images/Barbell.png" alt=""> &nbsp Barbell</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-front2.png">
                            </div>
                        </div>
                        <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[6]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Overhead Press</h2>
                                    <p> 3x8-10 reps </p>
                                    <p> 10-12 min </p>
                                    <p> Intermediate </p>
                                    <p><img src="/Images/Barbell.png" alt=""> &nbsp Barbell</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-front3.png">
                            </div>
                        </div>
                        <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[7]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Incline Dumbell Press</h2>
                                    <p> 3x8-12 reps </p>
                                    <p> 10-11 min </p>
                                    <p> Novice </p>
                                    <p><img src="/Images/Dumbell.png" alt=""> &nbsp Dumbbells</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-front2.png">
                            </div>
                        </div>
                        <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[8]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Rope Tricep Pushdown</h2>
                                    <p> 3x8-10 reps </p>
                                    <p> 10-12 min </p>
                                    <p> Novice </p>
                                    <p><img src="/Images/Cable.png" alt=""> &nbsp Cable</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-back4.png">
                            </div>
                        </div>
                        <div class="exercise-container">
                            <div class="vid-info-contianer">
                                <video src=${Vids[9]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                                <div class="exercise-info">     
                                    <h2>Lateral Raise</h2>
                                    <p> 3x15-16 reps </p>
                                    <p> 12-14 min </p>
                                    <p> Novice </p>
                                    <p><img src="/Images/Dumbell.png" alt=""> &nbsp Dumbbells</p>
                                </div>
                            </div>
                            <div class="muscle-img-container">
                                <img src="/Images/Male-back5.png">
                            </div>
                        </div>`,
                ` <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src=${Vids[10]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>Low Bar Squat</h2>
                        <p> 2x5-7 reps </p>
                        <p> 9-10 min </p>
                        <p> Intermediate </p>
                        <p><img src="/Images/Barbell.png" alt=""> &nbsp Barbell</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-front4.png">
                </div>
            </div>
            <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src=${Vids[11]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>Romanian Deadlift</h2>
                        <p> 3x8-12 reps </p>
                        <p> 10-12 min </p>
                        <p> Intermediate </p>
                        <p><img src="/Images/Barbell.png" alt=""> &nbsp Barbell</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-back6.png">
                </div>
            </div>
            <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src=${Vids[12]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>Leg Press</h2>
                        <p> 3x8-12 reps </p>
                        <p> 10-11 min </p>
                        <p> Novice </p>
                        <p><img src="/Images/Barbell.png" alt=""> &nbsp Machine</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-front4.png">
                </div>
            </div>
            <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src=${Vids[13]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>Hamstring Curl</h2>
                        <p> 3x8-10 reps </p>
                        <p> 10-12 min </p>
                        <p> Novice </p>
                        <p><img src="/Images/Barbell.png" alt=""> &nbsp Machine</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-back7.png">
                </div>
            </div>
            <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src=${Vids[14]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>Calf Raise</h2>
                        <p> 3x8-12 reps </p>
                        <p> 12-14 min </p>
                        <p> Novice </p>
                        <p><img src="/Images/Dumbell.png" alt=""> &nbsp Dumbbells</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-back8.png">
                </div>
                 </div>`,
                 `<div class="exercise-container">
                 <div class="vid-info-contianer">
                     <video src=${Vids[15]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                     <div class="exercise-info">     
                         <h2>Low Bar Squat</h2>
                         <p> 2x5-7 reps </p>
                         <p> 9-10 min </p>
                         <p> Intermediate </p>
                         <p><img src="/Images/Barbell.png" alt=""> &nbsp Barbell</p>
                     </div>
                 </div>
                 <div class="muscle-img-container">
                     <img src="/Images/Male-front4.png">
                 </div>
             </div>
             <div class="exercise-container">
                 <div class="vid-info-contianer">
                     <video src=${Vids[16]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                     <div class="exercise-info">     
                         <h2>Bench Press</h2>
                         <p> 4x5-7 reps </p>
                         <p> 10-13 min </p>
                         <p> Intermediate </p>
                         <p><img src="/Images/Barbell.png" alt=""> &nbsp Barbell</p>
                     </div>
                 </div>
                 <div class="muscle-img-container">
                     <img src="/Images/Male-front2.png">
                 </div>
             </div>
             <div class="exercise-container">
                 <div class="vid-info-contianer">
                     <video src=${Vids[17]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                     <div class="exercise-info">     
                         <h2>Bent Over Row</h2>
                         <p> 4x10-12 reps </p>
                         <p> 12-14 min </p>
                         <p> Novice </p>
                         <p><img src="/Images/Barbell.png" alt=""> &nbsp Dumbbells</p>
                     </div>
                 </div>
                 <div class="muscle-img-container">
                     <img src="/Images/Male-back1.png">
                 </div>
             </div>
             <div class="exercise-container">
                 <div class="vid-info-contianer">
                     <video src=${Vids[18]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                     <div class="exercise-info">     
                         <h2>Barbell Bicep Curl</h2>
                         <p> 3x12-14 reps </p>
                         <p> 10-12 min </p>
                         <p> Novice </p>
                         <p><img src="/Images/Barbell.png" alt=""> &nbsp Barbell</p>
                     </div>
                 </div>
                 <div class="muscle-img-container">
                     <img src="/Images/Male-front1.png">
                 </div>
             </div>
             <div class="exercise-container">
                 <div class="vid-info-contianer">
                     <video src=${Vids[19]} autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                     <div class="exercise-info">     
                         <h2>Tricep Extension</h2>
                         <p> 3x12-13 reps </p>
                         <p> 12-14 min </p>
                         <p> Novice </p>
                         <p><img src="/Images/Dumbell.png" alt=""> &nbsp Dumbbells</p>
                     </div>
                 </div>
                 <div class="muscle-img-container">
                     <img src="/Images/Male-back4.png">
                 </div>
                    </div>`,        
                        `<div class="exercise-container">
                        <div class="vid-info-contianer">
                            <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/160/086da34abe0759ec8b7365326707c105-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                            <div class="exercise-info">     
                                <h2>Push up</h2>
                                <p> 5x6-12 reps </p>
                                <p> 9-10 min </p>
                                <p> Beginner </p>
                                <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                            </div>
                        </div>
                        <div class="muscle-img-container">
                            <img src="/Images/Male-front2.png">
                        </div>
                    </div>
                    <div class="exercise-container">
                        <div class="vid-info-contianer">
                            <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/183/385d39cf18f7e072d1563efd9736fafa-1508215560.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                            <div class="exercise-info">     
                                <h2>Shoulder Press</h2>
                                <p> 5x6-12 reps </p>
                                <p> 10-13 min </p>
                                <p> Intermediate </p>
                                <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                            </div>
                        </div>
                        <div class="muscle-img-container">
                            <img src="/Images/Male-front3.png">
                        </div>
                    </div>
                    <div class="exercise-container">
                        <div class="vid-info-contianer">
                            <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/176/58f30c45a6298a7b213bf93aef2ed928-1508215560.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                            <div class="exercise-info">     
                                <h2>Dips</h2>
                                <p> 4x10-12 reps </p>
                                <p> 12-14 min </p>
                                <p> Intermediate </p>
                                <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                            </div>
                        </div>
                        <div class="muscle-img-container">
                            <img src="/Images/Male-back4.png">
                        </div>
                    </div>
                    <div class="exercise-container">
                        <div class="vid-info-contianer">
                            <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/160/086da34abe0759ec8b7365326707c105-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                            <div class="exercise-info">     
                                <h2>Push up</h2>
                                <p> 5x6-12 reps </p>
                                <p> 9-10 min </p>
                                <p> Beginner </p>
                                <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                            </div>
                        </div>
                        <div class="muscle-img-container">
                            <img src="/Images/Male-front2.png">
                        </div>
                    </div>
                    <div class="exercise-container">
                        <div class="vid-info-contianer">
                            <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/183/385d39cf18f7e072d1563efd9736fafa-1508215560.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                            <div class="exercise-info">     
                                <h2>Shoulder Press</h2>
                                <p> 5x6-12 reps </p>
                                <p> 10-13 min </p>
                                <p> Intermediate </p>
                                <p><img  class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                            </div>
                        </div>
                        <div class="muscle-img-container">
                            <img src="/Images/Male-front3.png">
                        </div>
                    </div>
                    `,
                    `<div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/205/67c5e3ea59b58d5a5a2ff0cf16348490-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>Pull up</h2>
                            <p> 5x6-12 reps </p>
                            <p> 9-10 min </p>
                            <p> Intermediate </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-back1.png">
                    </div>
                </div>
                <div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/205/67c5e3ea59b58d5a5a2ff0cf16348490-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>Bd Row</h2>
                            <p> 5x6-12 reps </p>
                            <p> 10-13 min </p>
                            <p> Beginner   </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt="">&nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-back3.png">
                    </div>
                </div>
                <div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/120/ecbfe29ba6f208b6a39c52a828141519-1508215500.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>Bd Face Pull</h2>
                            <p> 4x10-20 reps </p>
                            <p> 12-14 min </p>
                            <p> Beginner </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp &nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-back2.png">
                    </div>
                    </div>
                    <div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/205/67c5e3ea59b58d5a5a2ff0cf16348490-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>Pull up</h2>
                            <p> 5x6-12 reps </p>
                            <p> 9-10 min </p>
                            <p> Intermediate </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-back1.png">
                    </div>
                </div>
                <div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/205/67c5e3ea59b58d5a5a2ff0cf16348490-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>Bd Row</h2>
                            <p> 5x6-12 reps </p>
                            <p> 10-13 min </p>
                            <p> Beginner   </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-back3.png">
                    </div>
                </div>
                    `,
                    `<div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/233/83ba9466141658366bbdfd18cfb3a83c-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>One leg squat</h2>
                            <p> 5x10 reps </p>
                            <p> 9-10 min </p>
                            <p> Intermediate </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-front4.png">
                    </div>
                </div>
                <div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/205/67c5e3ea59b58d5a5a2ff0cf16348490-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>Pull up</h2>
                            <p> 5x6-12 reps </p>
                            <p> 9-10 min </p>
                            <p> Intermediate </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-back1.png">
                    </div>
                </div>
                <div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/160/086da34abe0759ec8b7365326707c105-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>Push up</h2>
                            <p> 5x6-12 reps </p>
                            <p> 9-10 min </p>
                            <p> Beginner </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-front2.png">
                    </div>
                </div>
                <div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/233/83ba9466141658366bbdfd18cfb3a83c-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>One leg squat</h2>
                            <p> 5x10 reps </p>
                            <p> 9-10 min </p>
                            <p> Intermediate </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-front4.png">
                    </div>
                </div>
                <div class="exercise-container">
                    <div class="vid-info-contianer">
                        <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/205/67c5e3ea59b58d5a5a2ff0cf16348490-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                        <div class="exercise-info">     
                            <h2>Pull up</h2>
                            <p> 5x6-12 reps </p>
                            <p> 9-10 min </p>
                            <p> Intermediate </p>
                            <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                        </div>
                    </div>
                    <div class="muscle-img-container">
                        <img src="/Images/Male-back1.png">
                    </div>
                </div>
                `,
                ` <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/233/83ba9466141658366bbdfd18cfb3a83c-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>One leg squat</h2>
                        <p> 5x10 reps </p>
                        <p> 9-10 min </p>
                        <p> Intermediate </p>
                        <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-front4.png">
                </div>
            </div>
            <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/137/421fb74dff43df1d19a9edd8d30e56ff-1508215500.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>Russian Curl</h2>
                        <p> 3x12 reps </p>
                        <p> 9-10 min </p>
                        <p> Intermediate </p>
                        <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-back6.png">
                </div>
            </div>
            <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/160/086da34abe0759ec8b7365326707c105-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>Claf Raise</h2>
                        <p> 3x10 reps </p>
                        <p> 9-10 min </p>
                        <p> Beginner </p>
                        <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-back8.png">
                </div>
            </div>
            <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/233/83ba9466141658366bbdfd18cfb3a83c-1508215620.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>One leg squat</h2>
                        <p> 5x10 reps </p>
                        <p> 9-10 min </p>
                        <p> Intermediate </p>
                        <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-front4.png">
                </div>
            </div>
            <div class="exercise-container">
                <div class="vid-info-contianer">
                    <video src="https://d2jbk7d41q2u2w.cloudfront.net/uploads/exercise/image/137/421fb74dff43df1d19a9edd8d30e56ff-1508215500.mp4" autoplay="" playsinline="" loop="" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAJOgAACToAYJjBRwAAAAMSURBVBhXY2BgYAAAAAQAAVzN/2kAAAAASUVORK5CYII=" muted="true"></video>
                    <div class="exercise-info">     
                        <h2>Russian Curl</h2>
                        <p> 3x12 reps </p>
                        <p> 9-10 min </p>
                        <p> Intermediate </p>
                        <p><img class="bd_img" src="/Images/Bodyweight.png" alt=""> &nbsp Bodyweight</p>
                    </div>
                </div>
                <div class="muscle-img-container">
                    <img src="/Images/Male-back6.png">
                </div>
            </div>
            `,
            ];
      
   
    
    const goBackBtn = document.querySelector('.go_back');
    goBackBtn.addEventListener("click", () => {
        planDisplay.classList.add("active");
        planDisplay.style.display = 'flex';
        exGrid.classList.remove('active');
        goBackBtn.classList.remove('active');
        mainCont.style.minHeight = '100vh'; 
        Footer.classList.add('changed1');
    });
    workoutWindow.addEventListener("click", () => {
        if(workoutWindow.querySelector('.wk-name').innerHTML != 'Rest Day'){
            planDisplay.classList.remove('active');
            exGrid.classList.add("active");
            goBackBtn.classList.add('active');
            if(workoutWindow.querySelector('.wk-name').innerHTML === 'Pull Workout'){
                exGrid.querySelector('.wk-name').innerHTML = 'Pull Workout';
                exGrid.querySelector('.exercise-grid').innerHTML = Workouts[0];
            } else if(workoutWindow.querySelector('.wk-name').innerHTML === 'Push Workout'){
                exGrid.querySelector('.wk-name').innerHTML = 'Push Workout';
                exGrid.querySelector('.exercise-grid').innerHTML = Workouts[1];
            } else if(workoutWindow.querySelector('.wk-name').innerHTML === 'Leg Workout'){
                exGrid.querySelector('.wk-name').innerHTML = 'Leg Workout';
                exGrid.querySelector('.exercise-grid').innerHTML = Workouts[2];
            } else if(workoutWindow.querySelector('.wk-name').innerHTML === 'Full Body'){
                exGrid.querySelector('.wk-name').innerHTML = 'Full Body';
                exGrid.querySelector('.exercise-grid').innerHTML = Workouts[3];
            } else if(workoutWindow.querySelector('.wk-name').innerHTML === 'Bodyweght Push'){
                exGrid.querySelector('.wk-name').innerHTML = 'Bodyweight Push Workout';
                exGrid.querySelector('.exercise-grid').innerHTML = Workouts[4];
            } else if(workoutWindow.querySelector('.wk-name').innerHTML === 'Bodyweght Pull'){
                exGrid.querySelector('.wk-name').innerHTML = 'Bodyweight Pull Workout';
                exGrid.querySelector('.exercise-grid').innerHTML = Workouts[5];
            } else if(workoutWindow.querySelector('.wk-name').innerHTML === 'Full Bodyweight'){
                exGrid.querySelector('.wk-name').innerHTML = 'Full Bodyweight Workout';
                exGrid.querySelector('.exercise-grid').innerHTML = Workouts[6];
            } else if(workoutWindow.querySelector('.wk-name').innerHTML === 'Bodyweight Legs'){
                exGrid.querySelector('.wk-name').innerHTML = 'Bodyweight Legs Workout';
                exGrid.querySelector('.exercise-grid').innerHTML = Workouts[7];
            }
            setTimeout(() => {
                exGrid.style.opacity = '1';
                planDisplay.style.display = 'none';
                mainCont.style.minHeight = '140vh'; 
            }, 250);
        } 
    });
    
 
    
    backToMainBtn.addEventListener("click", () => {
        planDisplay.classList.remove('active');
        logo.style.display = "block";
        createBtn.style.display = "block";
        createBtn.innerHTML = "View Plan";
        logoContainer.style.display = "flex";
        Footer.classList.remove('changed');
        Footer.classList.remove('changed1');
        planDisplay.style.display = "none";
    });
    