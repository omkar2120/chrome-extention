chrome.runtime.onMessage.addListener((msg)=>{
    console.log(msg);                         
    console.log("nikhil")
    alert("Hello  "+msg);
 });
