document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#click").addEventListener("click",()=>{

        chrome.tabs.query({active:true},(tabs)=>{
            console.log(tabs)
            let name=document.querySelector("#name").value;
            chrome.tabs.sendMessage(tabs[0].id,name);
            console.log(name)

        });
        
    })
})