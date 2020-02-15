/*
Ma.Donna Rose M. Olidana 2ITG
Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information 
*/

function billingFunction() 
{
    if (document.getElementById("same").checked)
    {
      let shipname = document.getElementById("shippingName").value 
      document.getElementById("billingName").value = shipname;
    
      let shipzip = document.getElementById("shippingZip").value;
      document.getElementById("billingZip").value = shipzip;
    } 
    else 
    {
      document.getElementById("billingName").value = "";
      document.getElementById("billingZip").value = "";
    }
  }