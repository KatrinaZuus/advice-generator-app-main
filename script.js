async function advice(){

try {
    const data = await fetch("https://api.adviceslip.com/advice")
     if (!data.ok) {
          throw new Error ("Ooop's, Error")
     } else {
    const dataset = await data.json()
    id = dataset.slip.id
    adviceText = dataset.slip.advice
     }
}

catch (error) {console.log(error)}
 
}

    
    let adviceId = document.querySelector(".adviceId")
    let advicedata = document.querySelector(".adviceText")
    let btn = document.querySelector(".btn")

    btn.addEventListener("click", ()=>{
     advice()
     adviceId.textContent = `${id}`
     advicedata.textContent = `${adviceText}`
    })
   
