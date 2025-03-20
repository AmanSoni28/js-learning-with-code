const insert= document.getElementById("insert");
window.addEventListener("keydown",(e)=>{          //KeyboardEvent ,have all Keyboard functionality 

// console.log(e);                //see all the method and properties of KeyboardEvent inside of console of this page 

// insert.innerHTML=`key = ${e.key}   ,   keycode =  ${e.keyCode}   ,   Code = ${e.code} ` ;  or

insert.innerHTML=`
<table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td> ${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`

});