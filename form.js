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

  function verify()
  {
    let shipname = document.getElementById("shippingName").value
    let billname = document.getElementById("billingName").value 

    let shipzip = document.getElementById("shippingZip").value
    let billzip = document.getElementById("billingZip").value
    if (shipname === billname && shipzip === billzip)
    {
      alert("Both shipping and billing information matches.");
    }
    else
    {
      if (shipname != billname && shipzip != billzip)
      {
        alert("Both shipping and billing informations doesn't match.");
      }
      else if (shipzip != billzip)
      {
        alert("The shipping and billing ZIP doesn't match.");
      }
      else
      {
        alert("The shipping and billing NAME doesn't match.");
      }
    }
    
  }