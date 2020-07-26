/*
 * @Author: your name
 * @Date: 2020-07-26 10:16:12
 * @LastEditTime: 2020-07-26 10:58:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\动态划线\01.js
 */ 
let observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
        }
    })
})
document.querySelectorAll('mark').forEach((mark)=>{
    observer.observe(mark)
})
/* let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
      observer.unobserve(entry.target)
    }
  })
})

document.querySelectorAll('mark').forEach(mark => {
  observer.observe(mark)
}) */