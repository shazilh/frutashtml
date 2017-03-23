
function agregar(){
   var texto=document.getElementById("liname").value;
   var li=document.createElement("LI");
   li.innerHTML=texto==''?'(nada)':texto;
   document.getElementById("lista").appendChild(li);
}
function borrar(){
    var lis=document.getElementById("lista").getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function borrar(){
            if(confirm('Estas seguro de borrar este elemento?'))
            this.parentNode.removeChild(this);
        };
    }
}
