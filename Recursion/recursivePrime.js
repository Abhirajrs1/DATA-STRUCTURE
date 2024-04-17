function prime(n,divisor=2){
    if(n<2 || n % divisor==0){
        return false
    }
    if(divisor*divisor>n){
        return true
    }
    return prime(n,divisor+1)
}
