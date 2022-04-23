import http from "http";

import { requestHandler } from "./router.js";

const server = http.createServer(requestHandler);

server.listen(3000);