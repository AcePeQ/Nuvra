import "dotenv/config";
import { app } from "./config/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Nuvra server is listening on port ${PORT}`);
});
