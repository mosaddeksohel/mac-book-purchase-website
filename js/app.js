// unified Memory Price 
function memoryPrice(){
    const extraMemoryCost = document.getElementById('extra-momery-cost');
    extraMemoryCost.innerText = parseInt(newPrice);
}

// SSD Storage
function getStorage(){
    const extraMemoryCost = document.getElementById('extra-ssd-cost');
    extraMemoryCost.innerText = parseInt(newStorage);
}
// delivery cost
function getDeliveryCost(){
    const primedelivery = document.getElementById('delivery-charge');
    primedelivery.innerText = parseInt(deliveryCost);
}

// Total product price calculation
function getCalculation(){
    const bestPrice = document.getElementById('total-price');
    const newBestPrice = bestPrice.innerText;
    newBestPrice.value = parseInt(newBestPrice);

    const totalPrice = newBestPrice + newPrice + newStorage + deliveryCost;
    return totalPrice;
}

// 8GB unified memory 
document.getElementById('8gb-memory').addEventListener('click', function(){
    newPrice = 0;
    memoryPrice ();
});


// 16GB unified memory 
document.getElementById('16gb-memory').addEventListener('click', function(){
   newPrice = 180 ;
   memoryPrice ();
});


// 256gb SSD storage 
document.getElementById('256gb-ssd').addEventListener('click', function(){
    newStorage = 0;
    getStorage();
    
});


// 512gb SSD storage 
document.getElementById('512gb-ssd').addEventListener('click', function(){
    newStorage = 100;
    getStorage();
    
});

// 1TB SSD storage 
document.getElementById('1tb-ssd').addEventListener('click', function(){
    newStorage = 180;
    getStorage();
    
});


// free prime delivery 
document.getElementById('prime-delivery').addEventListener('click', function(){
    deliveryCost = 0;
    getDeliveryCost ();
    
});
// Quick delivery 
document.getElementById('quick-delivery').addEventListener('click', function(){
    deliveryCost = 20;
    getDeliveryCost ();
    
});



