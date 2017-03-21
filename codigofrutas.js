
function agregar(){
   var texto=document.getElementById("liname").value;
   var li=document.createElement("LI");
   li.innerHTML=texto==''?'(nada)':texto;
   document.getElementById("lista").appendChild(li);
}
/*
function borrar(){
    lis=document.getElementById("lista").getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('Â¿Borrar este li?'))
            this.parentNode.removeChild(this);
        };
    }

}
*/
