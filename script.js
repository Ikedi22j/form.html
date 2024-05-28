function Emailvalidation(){
    try{
        let x = document.getElementById("demo").value;
        if(x.trim() == '')throw "This is a wrong Email Input";
        x = '@'(x);
        document.getElementById("Output").innerHTML = "Success "+ x;
    } catch (error){
        document.getElementById("error").innerHTML="error:" + error;
    }
    setTimeout(()=>{
        location.reload();
    },2000);
}