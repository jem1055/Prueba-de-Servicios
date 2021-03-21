import app from "./app";

//Setting
app.set("port", process.env.PORT || 4000);
app.set("Json spaces", 2);

//Server Port
app.listen(app.get("port"), () => {
  console.log("Servicio esta en el port " + app.get("port"));
});
