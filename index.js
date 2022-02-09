const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (accum, item) => {
    return accum+= item

}


const totalBatteries = batteryBatches.reduce(reducer,0);

