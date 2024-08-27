const inscBtn =document.getElementById("inscBtn");
const restBtn =document.getElementById("restBtn");
const descBtn =document.getElementById("descBtn");
const Countlabel = document.getElementById("Countlabel");
let count=0;
InscBtn.onclick=function()
{
    count++;
    Countlabel.textContent=count;
}
DescBtn.onclick=function()
{
    count--;
    Countlabel.textContent=count;
}
restBtn.onclick=function()
{
    count=0;
    Countlabel.textContent=count;
}
