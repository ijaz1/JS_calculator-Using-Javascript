function clickinp(val){
    document.getElementById('res').value=document.getElementById('res').value+val
}
function clickclear(){
    document.getElementById('res').value=''
}
function eqclick(){
    var text= document.getElementById('res').value
    var result=eval(text)
    document.getElementById('res').value=result
}
