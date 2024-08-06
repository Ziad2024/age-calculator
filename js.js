let container=document.querySelector(".container")
let user=document.querySelector("input")
console.log(new Date().toISOString().split("T")[0])
user.max= new Date().toISOString().split("T")[0]
let p=document.createElement("p");

function caculate(){
    let date = new Date(user.value)
    console.log(date);
    let d1=date.getDate();
    let m1=date.getMonth() + 1;
    let y1 =date.getFullYear();

    let today=new Date();
    
    let d2=today.getDate();
    let m2=today.getMonth() + 1;
    let y2 =today.getFullYear();

    let y,d,m;
     y = y2 - y1;
    if (m2>=m1)
    {
        m=m2 - m1;
    }else{
        y--;
        m= 12 + m2 -m1
    }
    if (d2>=d1){
        d=d2 -d1;
    }
    else{
        m--;
        d= day(y1,m1) + d2 - d1
    }
    if (m<0){
        y--;
        m=11;
    }
    function day(year,month)
    {
            return new Date(year,month,0).getDate();
    }
    p.innerHTML=`you are ${y} years and ${m} months and ${d}.`
    container.appendChild(p);  
}