// slider logic coding 

let indexing =1;
let auto_indexong =1;

runslider(indexing);

function push_slider(n){
    runslider(indexing+=n)
}

function runslider(n){
    let i;
    let slider = document.getElementsByClassName("sliders");
    if(n>slider.length){
        indexing=1;
    }
    if(n<1){
        indexing= slider.length;
    }
    for(i=0; i<slider.length;i++){
        slider[i].style.display="none";
    }
    slider[indexing-1].style.display="block";
   
}


// automatic slider

let auto_slider = setInterval(() => {
    auto_runder(indexing);
    auto_push(auto_indexong)
   function auto_push(n){
        auto_runder(indexing+=n);
        
   };
   function auto_runder(n){
    let i;
    let slider = document.getElementsByClassName("sliders");
    if(n>slider.length){
        indexing=1;
    }
   
    for(i=0; i<slider.length;i++){
        slider[i].style.display="none";
    }
    slider[indexing-1].style.display="block";
   }


}, 8000);

// responsive navbar

function menu_toggle(){
    let menu_toggle_nav = document.querySelector(".left_menu_links");
    menu_toggle_nav.classList.toggle("toggle_menu_active");
    
}