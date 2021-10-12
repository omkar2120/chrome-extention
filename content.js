chrome.runtime.onMessage.addListener((msg)=>{
    console.log(msg);
    console.log("amit")
    alert("Hello  "+msg);
 });