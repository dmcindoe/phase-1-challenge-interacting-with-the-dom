let count = 0
const remove = document.querySelector('#minus')
const increase = document.querySelector('#plus')
const numberCounter = document.querySelector('#counter')

const upCount = () => {numberCounter.textContent = parseInt(numberCounter.textContent, 10) + 1}
const downCount = () => {numberCounter.textContent = parseInt(numberCounter.textContent, 10) - 1}


const likesPerNumber = []
const likesList = document.querySelector('.likes')
const likeButton = document.querySelector('#heart')

const heartClick = () => {
    const likedNumber = parseInt(numberCounter.innerHTML)
   
    if(likesPerNumber.find(item => item.number === likedNumber)){
       const likedNumberObject = likesPerNumber.find(item => item.number === likedNumber)
        likedNumberObject.timesLiked =likedNumberObject.timesLiked + 1
        let listItem = document.querySelector(`#num-${likedNumber}`)
        listItem.innerHTML =`${likedNumber} has been liked ${likedNumberObject.timesLiked} times.`
    
    } else {
        likesPerNumber.push({number: likedNumber, timesLiked: 1})
        let li = document.createElement('li')
        li.innerHTML = `${likedNumber} has been liked <span>1<span> time.`
        li.id = `num-${likedNumber}`
        likesList.appendChild(li)
    }

}



window.addEventListener('DOMContentLoaded', () => {
    let timerInterval = setInterval(upCount, 1000);
    remove.addEventListener("click", downCount) 
    increase.addEventListener("click", upCount) 
})

     

    
likeButton.addEventListener("click", heartClick) 
 
// likeButton.addEventListener("click", function(){
//     const currentLikeCount = parseInt(numberCounter.textContent)
//     const prevLikes = heartCounter.find(like => like.num === currentLikeCount)
//     if (!prevLikes){
//         const likeObject = {num: currentLikeCount, likeCount: 1}
//         heartCounter.push(likeObject)
//         const newLikeElement = document.createElement('li')
//         likeObject.element = newLikeElement
//         newLikeElement.textContent = `${currentLikeCount} has been liked`
//         heartCounter.appened(newLikeElement)
//     } else {
//         prevLikes.numberCounter++
//         prevLikes.element.textContent = `${prevLikes.num} has been liked`
//     }
// })  
