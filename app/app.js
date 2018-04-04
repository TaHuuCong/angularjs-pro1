var project1 = angular.module("project1", []);

// Filter: Số chẵn trong mảng
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

// Filter: Bắt đầu bắng ký tự a/A
project1.filter('startsWithA', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            // substring(start, end): cắt chuỗi con từ start đến end-1
            if (item.substring(0, 1) == 'a' || item.substring(0, 1) == 'A') {
                filtered.push(item);
            }

            // hoặc có thể dùng: biểu thức chính quy.test(chuỗi) để so khớp chuỗi
            // /a/i tương đương a hoặc A
            // if (/a/i.test(item.substring(0, 1))) {}
        }
        return filtered;
    };
});

// Service: Kiểm tra số chia 3 dư 1
project1.service('kiem_tra_so_chia_3_du_1', function () {
    return function (number) {
        var message;
        if (number % 3 == 1) {
            message = "Số " + number + " là số chia 3 dư 1";
        } else {
            message = "Số " + number + " không phải là số chia 3 dư 1";
        }
        return message;
    }
});

// Service: Kiếm tra số chính phương
project1.factory('kiem_tra_so_chinh_phuong', function () {
    return function (number) {
        var message;
        for (var i = 1; i <= Math.sqrt(number); i++) {
            if (number / i == i) {
                message = "Số " + number + " là số chính phương";
            } else {
                message = "Số " + number + " không phải là số chính phương";
            } 
        }
        return message;
    }
});