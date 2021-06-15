"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    //      01/01/2000
    var datePart = dateString
        .split('/')
        .map(function (value) {
        return parseInt(value);
    }); //    ['01','01','2000']
    return new Date(datePart[2], datePart[1] - 1, datePart[0]);
};
exports.dateStringToDate = dateStringToDate;
