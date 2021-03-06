const boxs = document.querySelectorAll('.box');


// for each:forEach() 方法对数组的每个元素执行一次给定的函数
// boxs.forEach(box => {
//     box.addEventListener('click',function(){
//         remove()
//         box.classList.add('active');
//     })
// })

boxs.forEach(function(box){
    box.addEventListener('click',function(){
        remove()
        box.classList.add('active');
    })
})

function remove(){
    boxs.forEach(box =>{
        box.classList.remove("active");
    })
}