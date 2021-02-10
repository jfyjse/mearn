function prime(ll, ul) {
    
    for (var j = ll; j <= ul; j++) {
        var count = 0;
        for (var i = 2; i < j; i++) {
            if (j % i == 0) {
                count = 1;
                break;
            }
        }
        if (count == 0) {
            console.log(j);
        }
    }

}
(prime(3, 10));
