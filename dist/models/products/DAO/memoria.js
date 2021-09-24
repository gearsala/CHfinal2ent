"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDAOMEM = void 0;
var ProductDAOMEM = /** @class */ (function () {
    function ProductDAOMEM() {
        this.content = [];
    }
    ProductDAOMEM.prototype.randomId = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    ProductDAOMEM.prototype.finIndex = function (id) {
        return this.content.map(function (product) { return product._id; }).indexOf(id);
    };
    ProductDAOMEM.prototype.get = function (id) {
        return id
            ? this.content.filter(function (product) { return product._id === id; })
            : this.content;
    };
    ProductDAOMEM.prototype.add = function (data) {
        var newProduct = __assign({ _id: this.randomId() }, data);
        this.content.push(newProduct);
        return newProduct;
    };
    ProductDAOMEM.prototype.update = function (id, data) {
        var arrayPosition = this.finIndex(id);
        this.finIndex(id) !== -1 &&
            (this.content[arrayPosition].title = data.title) + "\n\t\t\t\t" + (this.content[arrayPosition].description = data.description) + "\n\t\t\t\t" + (this.content[arrayPosition].code = data.code) + "\n\t\t\t\t" + (this.content[arrayPosition].price = data.price) + "\n\t\t\t\t" + (this.content[arrayPosition].thumbnail = data.thumbnail) + "\n\t\t\t\t" + (this.content[arrayPosition].stock = data.stock);
        return arrayPosition !== -1 ? [this.content[arrayPosition]] : [];
    };
    ProductDAOMEM.prototype.delete = function (id) {
        var arrayPosition = this.finIndex(id);
        var deletedProduct = this.content.filter(function (product) { return product._id == id; });
        arrayPosition !== -1 && this.content.splice(arrayPosition, 1);
        return arrayPosition !== -1 ? deletedProduct : [];
    };
    ProductDAOMEM.prototype.query = function (options) {
        var query = [];
        if (options.title)
            query.push(function (product) { return product.title == options.title; });
        if (options.code)
            query.push(function (product) { return product.code == options.code; });
        if (options.priceMin)
            query.push(function (product) { return product.price >= options.priceMin; });
        if (options.priceMax)
            query.push(function (product) { return product.price <= options.priceMax; });
        if (options.stockMin)
            query.push(function (product) { return product.stock >= options.stockMin; });
        if (options.stockMax)
            query.push(function (product) { return product.stock <= options.stockMax; });
        return this.content.filter(function (product) { return query.every(function (x) { return x(product); }); });
    };
    return ProductDAOMEM;
}());
exports.ProductDAOMEM = ProductDAOMEM;
