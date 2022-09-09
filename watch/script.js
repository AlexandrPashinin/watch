let second = document.querySelector('.watch_sec')

let minute = document.querySelector('.watch_min')

let hour = document.querySelector('.watch_hour')

setInterval(() =>{

   let date = new Date()

   let ss = date.getSeconds()
   
   let mm = date.getMinutes()
   
   let hh = date.getHours()
   
   let tickingSeconds = ((ss/60)*360) + 90
   
   let tickingMinutes = ((mm/60)*360) +90
   
   let tickingHours = ((mm/12)*360) +90

   second.style.transform = `rotate(${tickingSeconds}deg)`

   minute.style.transform = `rotate(${tickingMinutes}deg)`

   hour.style.transform = `rotate(${tickingHours}deg)`

})