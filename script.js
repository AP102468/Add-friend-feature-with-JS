var isstatus = document.querySelector("h5");
var btn = document.querySelector("#add");
//var removefriend = document.querySelector("#remove");
var check = 0;
btn.addEventListener("click",function(){
    if(check == 0){
        isstatus.innerHTML = "Friends";
        isstatus.style.color = "Green";
        btn.innerHTML = "Remove friends"
        check = 1;
    }
    else{
        isstatus.innerHTML = "Stranger";
        isstatus.style.color = "Red";
        btn.innerHTML = "Add friends"
        check = 0;
    }    
})
/*removefriend.addEventListener("click",function(){
    isstatus.innerHTML = "Stranger";
    isstatus.style.color = "Red";
})*/