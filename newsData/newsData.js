newsData=new Promise((resolve,reject)=>{
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=5785046f1b404733bd3525e56b909540")
    .then((data)=>data.json())
    .then((data)=>{resolve(data)})
    .catch((err)=>{reject(err)})
})

 newsData.then((data)=>{
     console.log(data.articles)
     mainData=data.articles;
     for(i=0;i<mainData.length;i++)
     { 
     setDataToHtml(mainData[i].urlToImage,mainData[i].title,mainData[i].description,mainData[i].author,3);
    }
     })
.catch((err)=>{console.log(err)})


        


//Function for setDataToHtml
function setDataToHtml(imgUrl,title,content,author,time)
{ 
    let parentDiv=document.querySelector(".news");

    let mainDiv=document.createElement("div");
    mainDiv.classList.add("data")
    let imagediv=document.createElement("div")
    imagediv.classList.add("img")
    imagediv.innerHTML=`<img src=${imgUrl}>`;
    mainDiv.appendChild(imagediv);
    let contentDiv=document.createElement("div");
    contentDiv.classList.add("content");
    let newsHeadinDiv=document.createElement("div");
    newsHeadinDiv.classList.add("newsHeading");
    newsHeadinDiv.innerHTML=`<h1>${title}</h1>`;
    contentDiv.appendChild(newsHeadinDiv);
    let discriptionDiv=document.createElement("div");
    discriptionDiv.classList.add("DataDiscription");
    discriptionDiv.innerHTML=`<b>${content}</b>`
    contentDiv.appendChild(discriptionDiv);
    let authorDiv=document.createElement("div");
    authorDiv.classList.add("author");
    authorDiv.innerHTML=`<b>${author}</b>`
    contentDiv.appendChild(authorDiv);
    let timeDiv=document.createElement("div");
    timeDiv.classList.add("timeDiv");
    timeDiv.innerHTML=`<b class="time">-<span>${time}</span>hr ago</b>`;
    contentDiv.appendChild(timeDiv);
    mainDiv.appendChild(contentDiv);
    parentDiv.appendChild(mainDiv)
}


{/* <div class="data">
                        <div class="img">
                            <img src="https://cdn.vox-cdn.com/thumbor/axZKts-O0lGj3Pu9HVrM9c5mHIc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11559999/akrales_180614_1777_0110.jpg" height="100%" width="100%">
                        </div>
                        <div class="content">
                           <div class="newsHeading"><h1>iPhone 13 series now available in second wave of countries, Apple Watch Series 7 goes on pre-order - GSMArena.com news - GSMArena.com"</h1></div> 
                           <div class="timeDiv"><b class="time">-<span>3</span>hr ago</b></div>
                           <div class="discription"><b>he iPhone 13 launches in South Korea, Thailand, Malaysia, Mexico and several others countries today</b></div>
                           <div class="author"><b>Manish Singh</b></div>
                        </div>

   
