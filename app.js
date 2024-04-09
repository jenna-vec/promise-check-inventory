const { checkInventory, processPayment, shipOrder } = require('./library.js');

const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedArray) => {
    return processPayment(resolvedArray);
})
.then((resolvedArray) => {
    return shipOrder(resolvedArray);
})
.then((returnStatement) => {
    console.log(returnStatement);
});

//Navigate to folder and enter 'node app.js' in the terminal to execute