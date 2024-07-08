let calculation = localStorage.getItem('calculation') || '';

    display();

    function updateCalculation(value){
        calculation += value;
        display();
        localStorage.setItem('calculation', calculation);
    }

    function calculate(){
        calculation = eval(calculation);
        display();
        localStorage.setItem('calculation', calculation);
    }
    
    function display(){
        document.querySelector(".display-result")
        .innerHTML = calculation;
    }