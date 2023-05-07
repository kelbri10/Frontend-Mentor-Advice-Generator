const submitBtn = document.querySelector('.submit__button'); 



const getAdvice = async() => { 
    let adviceNumber = document.querySelector('.advice__number'); 
    let adviceText = document.querySelector('.advice__text'); 
    console.log('button works');

    try{ 
        const res = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"}); 
        const json = await res.json();   
        
        adviceNumber.textContent = `Advice #${json.slip.id}`; 
        adviceNumber.classList.add('active'); 
        adviceText.textContent = json.slip.advice; 
    } catch(err){ 
        throw err; 
    }

}

submitBtn.addEventListener('click', getAdvice); 

