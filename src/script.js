"use strict";
exports.__esModule = true;
exports.prisma = void 0;
var express_1 = require("express");
var client_1 = require("@prisma/client");
var compression_1 = require("compression");
var helmet_1 = require("helmet");
var cors_1 = require("cors"); //cross origin resource sharing
var app = (0, express_1["default"])();
var PORT = 3000;
exports.prisma = new client_1.PrismaClient();
//compress all the response
app.use((0, compression_1["default"])());
//makes header secure
app.use((0, helmet_1["default"])());
//to use the 
app.use((0, cors_1["default"])());
//defines a meaning
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.listen(PORT, function () {
    console.log("yoga server running on ".concat(PORT));
});
