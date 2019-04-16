 const options = [
   {theme: "scuba", display: ""},
   {theme: "circus", display: ""},
   {theme: "spaceship", display: ""},
   {theme: "desert", display: ""},
  {theme: "siberian", display: ""},
  {theme: "rave", display: ""}
];
 const fields = ["first-spouse", "second-spouse", "invite", "date", "location"];
 const images = {
  scuba: "https://www.travelalerts.ca/wp-content/uploads/2017/11/2-1.jpg",
  circus: "http://www.imagefully.com/wp-content/uploads/2015/12/The-Carnival-Coolayan-Beautiful-Circus-Photo.jpg",
  spaceship: "https://thewallpaper.co/wp-content/uploads/2017/08/futuristic-disney-beautiful-scificool-pc-windows-desktop-images-spaceship-trek-actionstar-space-download-768x480.jpg",
  desert: "https://hips.hearstapps.com/cos.h-cdn.co/assets/16/33/1471465182-danelle-bohane-india-weddingpt2-21.jpg",
  siberian: "https://www.perfectweddingsabroad.co.uk/sites/default/files/styles/homepage_slide__1180x420_/public/destinations/lapland.jpg?itok=XPs48xjq",
  rave: "http://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/sb2015-jf-0014_0.jpg?itok=Fwb-JHot"
}
 document.addEventListener("DOMContentLoaded", ()=>{
  const optionsContainer = document.getElementsByClassName("options")[0];
  
  const displayTitle = document.getElementById("display-title");
  const previewImage = document.getElementById("preview-img");
  
  const renderCard = theme => {
    displayTitle.innerHTML = `Current Theme: ${theme}`;
    console.log(!previewImage.src);
    if (!previewImage.src) document.getElementsByTagName("form")[0].classList.add("active");
    console.log(document.getElementsByTagName("form")[0].classList);
    previewImage.src = images[theme];
    previewImage.alt = theme;
  }
   options.forEach(option => {
     const button = document.createElement("button");
     button.id = option.theme;
     button.innerHTML = option.theme;
    button.addEventListener("click", () => renderCard(option.theme));
    optionsContainer.appendChild(button);
  })
  
  fields.forEach(field => {
    document.getElementById(`display-${field}`).style.display = "none";
    document.getElementById(field).addEventListener("input", e => {
      console.log(e, e.target, e.target.value)
      const element = document.getElementById(`display-${field}`);
      if (e.target.value) document.getElementById(`display-${field}`).style.display="inline-block";
      else document.getElementById(`display-${field}`).style.display = "none";
      element.innerHTML = e.target.value;
    })
  })
}); 