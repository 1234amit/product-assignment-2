"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoute = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
router.post("/", order_controller_1.createOrder);
router.get("/", order_controller_1.getAllOrders);
router.get("/search", order_controller_1.getOrdersByEmail);
exports.orderRoute = router;
