var arr1 = [10, 11, 13, 14, 15];
var arr2 = [8, 9, 10, 11, 16];

var p1 = 0;
var p2 = 0;

while ((p1 < arr1.length) & (p2 < arr2.length)) {

    if (arr1[p1] == arr2[p2]) {
        console.log(arr1[p1]);
        p1 += 1;
    }
    else if (arr1[p1] > arr2[p2]) {
        p2 += 1;
    }
    else {
        p1 += 2;
    }
}