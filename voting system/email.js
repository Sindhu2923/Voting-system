
const c=document.getElementById("eid");
const e=document.getElementsByClassName("demo")[0];
let x=Math.floor(Math.random()*10000);
e.addEventListener("submit",
function(event)
{
    event.preventDefault();
    const f=document.getElementById("vid").value;
    const p=/^[0-9]{10}$/;
    if(f.match(p))
    {
    Email.send({
        SecureToken : "4000dba2-7a05-4420-9c87-e33df954d834",
        To : c.value,
        From : "kavinchakravarthi2934@gmail.com",
        Subject : "Goverment of India - Online Voting System",
        Body : "Your OTP is "+x,
    }).then(
      message => 
      {
        if(message === "OK")
        {
            alert("OTP sent to your Email");
        }
      }
    )
    }   
}
);
    const s=document.getElementById("demo1");
    const o=document.getElementById("otp");
    s.addEventListener("submit",
    function(event)
    {
        if(o.value.trim()=="")
        {
            event.preventDefault();
        }
        if(o.value!=x)
        {
            event.preventDefault()
            alert("Invalid OTP"); 
        }
    

    }
    )