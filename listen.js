const { app } = require("./app.js");
let port = process.env.PORT || 9090;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
