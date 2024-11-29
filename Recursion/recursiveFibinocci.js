function fibnocci(n){
    if(n<=1){
        return n
    }
    if(n<10){
    return fibnocci(n-1)+fibnocci(n-2)
}
}

console.log(fibnocci(9));