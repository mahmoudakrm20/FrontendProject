// Search Division 
let searchButton = document.getElementById('imgsrch')
let searchdiv = document.getElementById('search1')
let xbutton = document.getElementById('xbutton')
searchButton.addEventListener('click' , function(){
    searchdiv.style.display =`block`
})
xbutton.addEventListener('click',function() {
    searchdiv.style.display =`none`
})
// Cart division
let cartButton = document.getElementById('cartid')
let cartdiv = document.getElementById('shoppingcart')
let xbutton2 = document.getElementById('shopx')
cartButton.addEventListener('click' , function(e){
    cartdiv.style.display =`block`
})
xbutton2.addEventListener('click',function() {
    cartdiv.style.display =`none`
})
// quickview imgs
let quickview = document.querySelectorAll('.quickview')
let quickViewDiv = document.getElementById('quickviewdiv')
let quickViewDiv2 = document.getElementById('quickviewdiv2')
let imgs = document.querySelectorAll('.hoverimg1')
for (let i=0; i<quickview.length; i++){
    quickview[i].addEventListener('click',function(){
        quickViewDiv.style.display='block'
        htmlContainer= `<button id="xbtn10" class="xbtn10" onclick="xbuttonfunc()">X</button>
        <img class="imgloop" src="${imgs[i].src}"><div class="quickdiv12">
        <h2 class="buynow1">T-Shirt</h2>
        <h6 class="buynow2">Lorem, ipsum dolor sit amet consectetur<br> adipisicing elit. Accusantium, 
        <br>quasi quos temporibus accusamus 
        <br> tempora magnam necessitatibus 
        <br>ad natus tempore doloremque?</h6>
        <button class="btn-shopcollection" style="margin-left: 500px;margin-top:80px">Add to Cart</button></div>`
        quickViewDiv2.innerHTML=htmlContainer
    })
}
// function for x button 
function xbuttonfunc (){
    quickViewDiv.style.display =`none`
}
// customize button
let customizebtn = document.getElementById('customizebtn')
let customize2 = document.getElementById('customize2')
customizebtn.addEventListener('click',function(){
    customize2.style.display =`block`
    customizebtn.style.marginRight=`237px`
})
let xbtncustomize = document.getElementById('xbtncustomize')
xbtncustomize.addEventListener('click',function(){
    customize2.style.display =`none`
    customizebtn.style.marginRight=`0px`
})
// customize effects fonts
let buttoncust1 = document.getElementById('buttoncust1')
let buttoncust2 = document.getElementById('buttoncust2')
let buttoncust3 = document.getElementById('buttoncust3')
buttoncust1.addEventListener('click',function(){
    document.body.style.fontFamily = "Courier, monospace";
})
buttoncust2.addEventListener('click',function(){
    document.body.style.fontFamily = "'Times New Roman', Times, serif";
})
buttoncust3.addEventListener('click',function(){
    document.body.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
})
//customize effect colors
let buttoncust4 = document.getElementById('buttoncust4')
let buttoncust5 = document.getElementById('buttoncust5')
let buttoncust6 = document.getElementById('buttoncust6')
let ShopCollection = document.getElementById('shopcollection')
let springsummer = document.getElementById('springsummer')
let footer = document.getElementById('footer')
buttoncust4.addEventListener('click',function(){
    document.body.style.backgroundColor = "rgb(242, 249, 255)"
    ShopCollection.style.backgroundColor = "#cde6ff"
    springsummer.style.backgroundColor = "#cde6ff"
    footer.style.backgroundColor = "#cde6ff"
})
buttoncust5.addEventListener('click',function(){
    document.body.style.backgroundColor = "rgb(255, 221, 196)"
    ShopCollection.style.backgroundColor = "#fdb588"
    springsummer.style.backgroundColor = "#fdb588"
    footer.style.backgroundColor = "#fdb588"
})
buttoncust6.addEventListener('click',function(){
    document.body.style.backgroundColor = "white"
    ShopCollection.style.backgroundColor = "#fbedec"
    springsummer.style.backgroundColor = "#fbedec"
    footer.style.backgroundColor = "#fbedec"
})
// Validation Regex 
let email = document.querySelector('input[type="email"]')
let emailbtn =document.getElementById('emailbtn')
let parajs =document.getElementById('parajs')
let emailRegex = /^[a-z]{5,30}@(gmail|yahoo|hotmail)\.com$/
emailbtn.addEventListener('click',function(e){
    e.preventDefault()
    if(email.value.length==0){
        parajs.innerHTML='Email Required'
    }
    if (email.value.length!=0){
        if(emailRegex.test(email.value)==false){
            parajs.innerHTML='Email Invalid'
        }
        else {
            parajs.innerHTML='Thanks for signing up for the Store! We will be in touch soon'
        }}
    
})
// list js 
let loginlist = document.getElementById('loginlist')
let lista = document.getElementById('lista')
let listax = document.getElementById('listax')
loginlist.addEventListener('click' , function(e){
    lista.style.display =`block`
})
listax.addEventListener('click',function() {
    lista.style.display =`none`
})