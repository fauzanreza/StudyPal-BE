import {config} from "./bin/infra/global_config.js"
import { AppServer } from "./bin/app/server.js";
const port = config.port;

AppServer.listen(port, () => {
    console.log(`App listening on port ${port}`)
})