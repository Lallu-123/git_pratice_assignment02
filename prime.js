function prime(num){
for(let i=1;i<=num;i++){
if(num%i==0){
return true;
}
return false
}
}
let ans=prime(9)
if(ans==true){
console.log("prime")
}else{
console.log("not prime)
}