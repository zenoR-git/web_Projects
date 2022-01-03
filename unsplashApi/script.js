const input = document.getElementById("inp");
const grid = document.getElementsByClassName("grid")[0];


input.addEventListener("keydown",(evnt)=>{
    if (evnt.key == "Enter"){
          loadImg();
    }
})

function loadImg(){
    removeImg();

    const url = "https://api.unsplash.com/search/photos/?query="+input.value+"&per_page=12";

    fetch(url,{
       "method" : "GET",
       "headers" : {
        "Authorization":  ""
       }
    })
    .then(res=>{
        if (res.ok){
            return res.json();
        }else{
            alert(res.status);
        }
    })
    .then(data => {
        let imageNodes = [];
        for (let i = 0; i < data.results.length; i++) {
            imageNodes[i] = document.createElement("div");
            imageNodes[i].className = "img";
            imageNodes[i].style.backgroundImage = "url("+data.results[i].urls.raw+")";
            grid.appendChild(imageNodes[i]);
        }
    })
}

function removeImg(){
    grid.innerHTML = "";
}