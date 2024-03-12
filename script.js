const questions = document.querySelectorAll('.question');

const clickHandler= event => {
 
    questions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    const toggle = this.lastElementChild;
                  //console.log(toggle);
                    if (answer.style.display === 'block') {
                        answer.style.display = 'none';
                        toggle.src="./images/icon-plus.svg" ;
                    } else {
                        answer.style.display = 'block';
                        toggle.src="./images/icon-minus.svg" ;      
                    }
                });
            });

 
};

document.addEventListener('DOMContentLoaded', clickHandler);

