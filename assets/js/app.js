document.getElementById("input-submit").addEventListener('click', function() {

    const inputText = document.getElementById("buyer-input");
    const text = inputText.value;

    const displayBuyerInfo = document.getElementById("buyer-info");
    displayBuyerInfo.innerText = text;

});


document.getElementById("item-button").addEventListener('click', function() {


    const itemName = document.getElementById("item-name");
    const itemPrice = document.getElementById("item-price");
    const itemQuntity = document.getElementById("item-quntity");
    const totalTk = Number(itemPrice.value) * Number(itemQuntity.value);



    const tr = document.createElement("tr");

    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemName.value;
    td3.innerText = totalTk;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    const itemsInfo = document.getElementById("table-info");
    itemsInfo.appendChild(tr);

    td3.classList.add("item-price");

    const taka = document.getElementsByClassName("item-price");


    const storeTk = [];
    for (const totalTK of taka) {
        storeTk.push(Number(totalTK.innerText));
    }


    let subTotal = 0;
    for (const sum of storeTk) {
        subTotal += sum;
    }


    document.getElementById("sub-total").innerText = subTotal;

    const tax = (subTotal * 20) / 100;
    document.getElementById("tax").innerText = tax;

    document.getElementById('grand-total').innerText = (subTotal + tax);
    console.log(document.getElementById('grand-total'));




})