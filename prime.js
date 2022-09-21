
function prime(num){
    let factor=0;
for(let i=1;i<=num;i++){
factor=0
if(num%i==0){

factor++

}

}
if(factor==2){
return true;
}else{
return false
}

}


let ans=prime(9)

if(ans==true){
console.log("prime")
}else{
console.log("not prime)
}