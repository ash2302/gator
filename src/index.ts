import { readConfig, setUser } from "./config";
function main() {
    setUser("Aabhash");
    const cfg = readConfig();
    console.log(cfg);
}

main();
