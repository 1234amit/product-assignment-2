import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoute } from "./app/modules/product/product.route";
import { orderRoute } from "./app/modules/order/order.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my Ecommerce server.");
});

export default app;
