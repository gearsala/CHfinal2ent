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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartDAOMONGO = void 0;
var mongoose_1 = require("mongoose");
var productsapi_1 = require("../../../apis/productsapi");
var config_1 = __importDefault(require("../../../config/config"));
var cartSchema = new mongoose_1.Schema({
    timestamp: { type: Number, default: Date.now() },
    cartProducts: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'productoscarritos' }],
}, { versionKey: false });
var cartProdutcsSchema = new mongoose_1.Schema({
    title: { type: String, required: true, max: 100 },
    description: { type: String, required: true, max: 300 },
    code: { type: String || Number, required: true },
    price: {
        type: Number,
        required: true,
        min: [100, "El valor es {VALUE}, debe ser como minimo 100"],
        max: [5000, "El valor es {VALUE}, debe ser como maximo 5000"],
    },
    thumbnail: { type: String, required: true, max: 100 },
    stock: { type: Number, required: true },
}, { versionKey: false });
var CartDAOMONGO = /** @class */ (function () {
    function CartDAOMONGO(local) {
        if (local === void 0) { local = true; }
        if (local)
            this.uri = "mongodb://" + config_1.default.MONGO_USER + ":" + config_1.default.MONGO_PASSWORD + "@127.0.0.1:27017/" + config_1.default.MONGO_DBNAME;
        else
            this.uri = "mongodb+srv://" + config_1.default.MONGO_USER + ":" + config_1.default.MONGO_PASSWORD + "@" + config_1.default.MONGO_ATLAS_CLUSTER + "/" + config_1.default.MONGO_DBNAME + "?retryWrites=true&w=majority";
        (0, mongoose_1.connect)(this.uri);
        this.cart = (0, mongoose_1.model)('carritos', cartSchema);
        this.cartProduct = (0, mongoose_1.model)('productoscarritos', cartProdutcsSchema);
    }
    CartDAOMONGO.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var outputGet, singleProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outputGet = [];
                        if (!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cartProduct.findById(id)];
                    case 1:
                        singleProduct = _a.sent();
                        singleProduct && outputGet.push(singleProduct);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.cart.find().populate('cartProducts')];
                    case 3:
                        outputGet = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, outputGet];
                }
            });
        });
    };
    CartDAOMONGO.prototype.add = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var findProduct, ouputNew, checkCart, newCart, readCart, newProduct;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, productsapi_1.productsAPI.getProducts(id)];
                    case 1:
                        findProduct = _b.sent();
                        ouputNew = [];
                        return [4 /*yield*/, this.cart.find()];
                    case 2:
                        checkCart = _b.sent();
                        if (!(checkCart.length === 0)) return [3 /*break*/, 4];
                        newCart = new this.cart();
                        return [4 /*yield*/, newCart.save()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        if (!findProduct.length) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.cart.find()];
                    case 5:
                        readCart = _b.sent();
                        readCart[0].cartProducts = readCart[0].cartProducts.concat(id);
                        return [4 /*yield*/, readCart[0].save()];
                    case 6:
                        _b.sent();
                        newProduct = new ((_a = this.cartProduct).bind.apply(_a, __spreadArray([void 0], findProduct, false)))();
                        newProduct.isNew = true;
                        return [4 /*yield*/, newProduct.save()];
                    case 7:
                        _b.sent();
                        ouputNew.push(newProduct);
                        return [2 /*return*/, ouputNew];
                    case 8: return [2 /*return*/, ouputNew];
                }
            });
        });
    };
    CartDAOMONGO.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var outputDelete, deletedProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outputDelete = [];
                        return [4 /*yield*/, this.cartProduct.findByIdAndDelete(id)];
                    case 1:
                        deletedProduct = _a.sent();
                        deletedProduct && outputDelete.push(deletedProduct);
                        return [2 /*return*/, outputDelete];
                }
            });
        });
    };
    return CartDAOMONGO;
}());
exports.CartDAOMONGO = CartDAOMONGO;
