// ================= MODERN GALLERY =================

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("galleryImage");
    const closeBtn = document.querySelector(".gallery-close");
    const prevBtn = document.querySelector(".gallery-prev");
    const nextBtn = document.querySelector(".gallery-next");

    const links = document.querySelectorAll(".gallery-grid a");

    let current = 0;

    function openImage(index) {
        current = index;
        modal.style.display = "flex";
        modalImg.src = links[current].href;
    }

    links.forEach((link, index) => {

        link.addEventListener("click", function(e) {
            e.preventDefault();
            openImage(index);
        });

    });

    function closeGallery() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeGallery);

    modal.addEventListener("click", function(e){

        if(e.target === modal){
            closeGallery();
        }

    });

    prevBtn.addEventListener("click", function(e){

        e.stopPropagation();

        current--;

        if(current < 0){
            current = links.length - 1;
        }

        openImage(current);

    });

    nextBtn.addEventListener("click", function(e){

        e.stopPropagation();

        current++;

        if(current >= links.length){
            current = 0;
        }

        openImage(current);

    });

    document.addEventListener("keydown", function(e){

        if(modal.style.display !== "flex") return;

        if(e.key === "Escape"){
            closeGallery();
        }

        if(e.key === "ArrowLeft"){
            prevBtn.click();
        }

        if(e.key === "ArrowRight"){
            nextBtn.click();
        }

    });

});
