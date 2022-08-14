console.log("hello world")

var updateBtns = document.getElementsByClassName("update-cart")

for(i=0; i< updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productID = this.dataset.product
        var action = this.dataset.action
        if(user==='AnonymousUser'){
            addCookieItem(productID,action)
        }else{
            updateUserOrder(productID, action)
        }
    })

}

function addCookieItem(productID, action){
    console.log('Not logged in..')

    if(action == 'add'){
        if(cart[productID] == undefined){
            cart[productID]= {'quantity':1}
        }
        else{
            cart[productID]['quantity'] += 1
        }
    }

    if(action == 'remove'){
        cart[productID]['quantity'] -= 1

        if( cart[productID]['quantity'] <= 0){
            delete cart[productID]
        }
    }
    console.log('Cart:', cart)
    document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"
    location.reload()
}

function updateUserOrder(productID, action){
    var url = '/update-cart/'

    fetch(url, {
        method : 'POST',
        headers : {
            'content-type' : 'application/json',
            'X-CSRFToken' : csrftoken,
        },
        body : JSON.stringify({'productID':productID, 'action': action})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        location.reload()
        console.log('data',data)
    })
  
}