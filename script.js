let questions = document.querySelectorAll(".faq");

for(let i = 0;i < questions.length; i++)
{
    
    questions[i].addEventListener("click", ()=> {
        closeAccordian(questions[i]);  
        questions[i].classList.toggle("active");
    
    })
}

function closeAccordian(element){
    questions.forEach(question => {
        if(question.classList.contains("active") && question != element)
        {
            question.classList.remove("active");
        }
    })
}