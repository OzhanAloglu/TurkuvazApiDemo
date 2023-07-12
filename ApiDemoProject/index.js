
const apiUrl = "https://api.tmgrup.com.tr/v1/link/352";
const apiUrl2 = " https://api.tmgrup.com.tr/v1/link/424";


const ustHaber = document.getElementById("UstHaber");
const sagUstHaber = document.getElementById("sagUstHaber");
const cHaber = document.getElementById("c-haber");
const dHaber = document.getElementById("d-haber");
const eVideo = document.getElementById("e-video");
const fHaber1 = document.getElementById("f-haber1");
const fHaber2 = document.getElementById("f-haber2");

async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Apiden veri donmedi!!');
      }
      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Veri alinirken hata olustu:', error);
    }
  }


  fetchData(apiUrl).then(data => 
    {
        if(data.meta.status_code === 200){

          // console.log(data.data.articles.Response);

              //HABER-A1
             data.data.articles.Response.slice(0,1).map(el => {
              ustHaber.innerHTML = (
                `<div id="" class="col-lg-8">
                <div>
                    <a id="haber-1Alink" href="#" >
                      <img id="haber-1A-image"  src="${el.primaryImage}" class="card-img-top" alt="Haber Görseli">
                    </a>         
                </div>
                 <div class="card-body">
                    <h1 class="card-title"><a href="${el.Url}">${el.TitleShort.length > 0 ? el.TitleShort : el.Title}</a></h1>
                  </div>
              </div>
                `
              )
             })

             data.data.articles.Response.slice(1,3).map(el => {
               sagUstHaber.innerHTML += 
               `
                <div">
                  <div >
                      <a href="${el.Url}" > <img id="sagUstImg" src="${el.secondaryImage}" class="card-img-top" alt="Haber Görseli"></a>
                  </div>
                </div>
                <div >

                `
             })

             data.data.articles.Response.slice(3,7).map(el => {
                cHaber.innerHTML += 
                `
                <div class="col-lg-3">
                <div >
                    <a  href="${el.Url}" ><img class="c-haber-image" src="${el.primaryImage}" class="card-img-top" alt="Haber Görseli"></a>
                </div>
                  <div class="card-body">
                    <h2 class="card-title"><a href="${el.Url}">${el.TitleShort}</a></h2>
                  </div>
              </div>

                `
             })
        
             data.data.articles.Response.slice(10,13).map(el => {
                dHaber.innerHTML += 
                `
                <div>
                <h3>${el.Title}</h3>
                <p>${el.Spot}</p>
                </div>
                <div class="row">
    
                `
             })

             data.data.articles.Response.slice(1,5).map(el => {
                fHaber1.innerHTML += 
                `
                <div class="col-lg-3">
                <a href="${el.Url}">
                <img src = "${el.secondaryImage}" class="card-img-top" alt="Secondary Image">
                  </a>     
                  </div>           
                `
             } )

             data.data.articles.Response.slice(5,9).map(el => {
              fHaber2.innerHTML += 
              `
              <div class="col-lg-3">
              <a href="${el.Url}">
              <img src = "${el.secondaryImage}" class="card-img-top" alt="Secondary Image">
                </a>     
                </div>           
              `
             } )



        }
    
    })

    fetchData(apiUrl2).then(data => {
      if(data.meta.status_code == 200){
        data.data.videos.Response.slice(0,1).map(el => {
           
          eVideo.innerHTML = 
          `
          <video 
          controls
          width="100%" 
          height="600px" 
          src="${el.VideoUrl}" 
          muted
          poster="${el.primaryImage}">
          </video>

          <div class="row">
          <div class="col-lg-6">
            <h4 class="video-title">${el.TitleShort.length > 0 ? el.TitleShort : el.Title}</h4>
            <p style="text-align: justify;" class="video-spot">${el.Spot}</p>
          </div>
          <div class="col-lg-6">
            <p  class="video-date">Tarih : ${el.OutputDate.split(" ")[1]}</p>
            <p  class="video-date">Saat : ${el.OutputDate.split(" ")[2]}</p>
          </div>
      
        </div>
          `
        }) 


      }
    })
