"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDAOSQL = void 0;
var knex_1 = __importDefault(require("knex"));
var knexfile_1 = __importDefault(require("../../../knexfile"));
var interfaces_1 = require("../../interfaces");
var ProductDAOSQL = /** @class */ (function () {
    function ProductDAOSQL(mysql) {
        if (mysql === void 0) { mysql = true; }
        var options = mysql ? knexfile_1.default['servermysql'] : knexfile_1.default['sqlite'];
        this.connection = (0, knex_1.default)(options);
    }
    ProductDAOSQL.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connection(interfaces_1.Table.Products).where('id', id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.connection(interfaces_1.Table.Products)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductDAOSQL.prototype.add = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var newProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection(interfaces_1.Table.Products).insert(body)];
                    case 1:
                        newProduct = _a.sent();
                        return [2 /*return*/, newProduct];
                }
            });
        });
    };
    ProductDAOSQL.prototype.update = function (id, body) {
        return __awaiter(this, void 0, void 0, function () {
            var item, updatedProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(id)];
                    case 1:
                        item = _a.sent();
                        if (!item.length) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.connection(interfaces_1.Table.Products).where('id', id).update(body)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.get(id)];
                    case 3:
                        updatedProduct = _a.sent();
                        return [2 /*return*/, updatedProduct];
                    case 4: return [2 /*return*/, item];
                }
            });
        });
    };
    ProductDAOSQL.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var item, deletedElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(id)];
                    case 1:
                        item = _a.sent();
                        if (!item.length) return [3 /*break*/, 3];
                        deletedElement = [];
                        return [4 /*yield*/, this.connection(interfaces_1.Table.Products).where('id', id).del()];
                    case 2:
                        _a.sent();
                        deletedElement.push.apply(deletedElement, item);
                        return [2 /*return*/, deletedElement];
                    case 3: return [2 /*return*/, item];
                }
            });
        });
    };
    ProductDAOSQL.prototype.query = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection(interfaces_1.Table.Products).modify(function (queryBuilder) {
                            if (options.title)
                                queryBuilder.where('title', options.title);
                            if (options.priceMin && options.priceMax)
                                queryBuilder.whereBetween('price', [
                                    options.priceMin,
                                    options.priceMax,
                                ]);
                            if (options.stockMin && options.stockMax)
                                queryBuilder.whereBetween('stock', [
                                    options.stockMin,
                                    options.stockMax,
                                ]);
                            if (options.code)
                                queryBuilder.where('code', options.code);
                        })];
                    case 1:
                        query = _a.sent();
                        return [2 /*return*/, query];
                }
            });
        });
    };
    return ProductDAOSQL;
}());
exports.ProductDAOSQL = ProductDAOSQL;
