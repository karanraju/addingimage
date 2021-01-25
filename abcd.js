const infile=document.getElementById("inFile");
const previewContainer=document.getElementById("imagePreview");
const  previewImage=previewContainer.querySelector(".image-preview__image");
const   previewImageDefault=previewContainer.querySelector(".image-preview__default-text");



infile.addEventListener("change",function(){
    const file=this.files[0];
    console.log(file);

    if(file){
        const  reader=new FileReader();
        previewImageDefault.style.display='none';
        previewImage.style.display='block';
        reader.addEventListener('load',function()
        {
            console.log(this);
            previewImage.setAttribute("src",this.result);
        });
        reader.readAsDataURL(file);


    }
})