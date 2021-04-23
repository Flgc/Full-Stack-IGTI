import express from "express";
import jwt from "jsonwebtoken";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import {swaggerDocument} from "./doc.js";

const secretKey = "jdASIhD564xAwr7vc9axAS";

const app = express();
app.use(express.json());
//app.use(cors());
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

function validaToken(req, res, next) {
    let token = req.headers['authorization'];
    if (!token) {
        return res.status(401).end();
    }
    token = token.replace("Bearer ", "");

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).end();
        }
        req.userId = decoded.id;
        next();
    });
}

app.post("/login", (req, res) => {
    if (req.body.user === "joao" && req.body.pwd === "1234") {
        const id = 1;
        const token = jwt.sign({ id }, secretKey, {
            expiresIn: 600
        });
        res.send({ token });
    } else {
        res.status(401).body({ message: "Usuário e/ou senha inválidos." });
    }
});

app.post("/cliente", validaToken, (req, res) => {
    res.send({ userId: req.userId });
});


app.get("/teste", cors(), (req, res) => {
    res.end();
});

app.listen(3000, () => {
    console.log("API Started!");
});