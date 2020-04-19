let uname=document.getElementById("uname");
let pwd=document.getElementById("psw");
var errorUname=document.getElementById("errorUname");
var errorPwd= document.getElementById("errorPwd");
function validate()
{
    let regExp=/^([A-Za-z0-9\.-_]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regExp.test(uname.value) && uname.value!="")
    {
               
                if(pwd.value.trim()!="")
                {
                    return true;
                }
                else
                {
                    errorPwd.innerHTML="✖ Invalid Password";
                    errorPwd.style.color="red";
                    errorPwd.style.fontWeight="bolder";
                    return false;
                }
    }
    else
    {
         errorUname.innerHTML="✖ Invalid Username";
         errorUname.style.color="red";
         errorUname.style.fontWeight="bolder";
         return false;
    }
    return false;
}