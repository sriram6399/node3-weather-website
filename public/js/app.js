
const weatherform = document.querySelector('form')
const search =document.querySelector('input')
const messageone=document.querySelector('#message-1')
const messagetwo=document.querySelector('#message-2')



//messageone.textContent = "from javaScript"

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value

   // messageone.textContent = "Loading....."
    //messagetwo.textContent = ''

    fetch('/weather?address=' + location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
           messageone.textContent = 'error'
           //console.log(data.error) 
        }
        else{
           messageone.textContent = data.location
    messagetwo.textContent = data.data
    //console.log(data.data)
        }
    })

})

})