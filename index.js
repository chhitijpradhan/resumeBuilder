const express =require("express")
const app = express();
const routes = require("./routes");
app.get ("/api", routes);
app.listen(3000);
