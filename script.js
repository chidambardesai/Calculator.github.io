function dis(val){
    
    document.getElementById("res").value +=val;
}

function Reset() {
    var inp = document.getElementById('res');
    inp.value = '0';
 }
 function Delete(){
    var inp=document.getElementById('res');
    inp.value=inp.value.slice(0,-1)
 }

function solve(){
    var num1= document.getElementById('res').value;
   if(num1==""){
    document.getElementById('res').value="0";

   }
   else{
    var num2=eval(num1);
    document.getElementById('res').value=num2;
    }


}