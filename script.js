const clickBtn=document.querySelectorAll('.click-btn')
const inputfield=document.querySelectorAll('.goal-input')
const error=document.querySelector('.error-line')
const measureer=document.querySelector('.measure-toolc')

clickBtn.forEach((clicker)=>{
    
        clicker.addEventListener("click",(e)=>
        {
           const inputfieldfilled= [...inputfield].every((input)=>{
                return input.value
            })
            if(inputfieldfilled){
                clicker.parentElement.classList.toggle('complete')
                measureer.style.width='33.33%'
            }
            else{
                error.parentElement.classList.add('show-error')
            }
        })
})

inputfield.forEach((input)=>{
    input.addEventListener('focus',()=>{
        error.parentElement.classList.remove('show-error')
    })
}
)