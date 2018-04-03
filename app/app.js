var project1 = angular.module("project1", []);


// Số chẵn trong mảng
project1.filter('evenNumberInArray', function () {
    return function (arr) {
        var brr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                brr.push(arr[i]);
            }
        }
        return brr;
    }
});

// Bắt đầu bắng ký tự a/A
project1.filter('startsWithA', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            // substring(start, end): cắt chuỗi con từ start đến end-1
            if (item.substring(0, 1)=='a' || item.substring(0, 1)=='A') {
                filtered.push(item);
            }

            // hoặc có thể dùng: biểu thức chính quy.test(chuỗi) để so khớp chuỗi
            // /a/i tương đương a hoặc A
            // if (/a/i.test(item.substring(0, 1))) {}
        }
        return filtered;
    };
});