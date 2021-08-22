var memory , ssd , deliveryCharge , bestPrize , discount =0;
// unified memory
function memoryValue(){
    memory = document.getElementById('momery-cost');
}
// storage
function storageValue(){
    ssd = document.getElementById('ssd-cost');
}
// delivey charge
function deliveryValue(){
    deliveryCharge = document.getElementById('delivery-charge');
}

document.getElementById('8gb-memory').addEventListener('click', function(){
    memoryValue()
    memory.innerText = 0;
    calculation();
});
document.getElementById('16gb-memory').addEventListener('click', function(){
    memoryValue()
    memory.innerText = 180;
    calculation();
    
});
document.getElementById('256gb-ssd').addEventListener('click', function(){
    storageValue();
    ssd.innerText = 0;
    calculation();
    
});
document.getElementById('512gb-ssd').addEventListener('click', function(){
    storageValue();
    ssd.innerText = 100;
    calculation();
    
});
document.getElementById('1tb-ssd').addEventListener('click', function(){
    storageValue();
    ssd.innerText = 180;
    calculation();
    
});
document.getElementById('prime-delivery').addEventListener('click', function(){
    deliveryValue();
    deliveryCharge.innerText = 0;
    calculation();
    
});
document.getElementById('quick-delivery').addEventListener('click', function(){
    deliveryValue();
    deliveryCharge.innerText = 20;
    calculation();
    
});

document.getElementById('apply').addEventListener('click', function(){
    discount = document.getElementById('apply-input').value;
    if(discount == "stevekaku"){
        discount = 20;
    }
    calculation();
    
});
// total calculation
function calculation(){
    console.log("discount " , discount)
    const MemoryCost = memory != undefined ? memory.innerText : 0;
    const ssdCost = ssd !== undefined ? ssd.innerText : 0;
    const deliveryCost = deliveryCharge != undefined ? deliveryCharge.innerText: 0;

    bestPrize = document.getElementById('best-price').innerText;

    // totalCost Sum 
    const totalCost = parseInt(MemoryCost)+parseInt(ssdCost)+parseInt(deliveryCost)+parseInt(bestPrize);
    document.getElementById('total-price').innerText = parseInt(totalCost);
    document.getElementById('total').innerText = parseInt(totalCost);
// total and after discount 20%
    if(discount != 0){
        totalCostAfterDiscount =  totalCost - totalCost * (  discount / 100 ) ;
        document.getElementById('total').innerText = "Total = " + parseFloat(totalCostAfterDiscount);
        document.getElementById('apply-input').value = '';
    }
    
}