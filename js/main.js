let userfont = document.querySelector("#fontsize");
let userfamily = document.querySelector("#fontfamily");
let leftalign = document.querySelector("#align-left");
let centeralign = document.querySelector("#align-center");
let rightalign = document.querySelector("#align-right");
let color = document.querySelector("#usercolor");

let textarea = document.querySelector('#playground');

userfont.addEventListener('change', (e) => {
    textarea.style.fontSize = userfont.value;
    
});
userfamily.addEventListener('change', (e) => {
    textarea.style.fontFamily = userfamily.value;
});

leftalign.addEventListener('click', (e) => {
    textarea.style.textAlign = 'left';
});

centeralign.addEventListener('click', (e) => {
    textarea.style.textAlign = 'center';
});

rightalign.addEventListener('click', (e) => {
    textarea.style.textAlign = 'right';
});
color.addEventListener('change', (e) => {
    textarea.style.color = color.value ;
});
function makeBold() {
    textarea.style.fontWeight = 'Bold';
}

function makeItalic() {
    textarea.style.fontStyle = 'italic';
}

function makeUnderline() {
    textarea.style.textDecoration = 'underline';
}