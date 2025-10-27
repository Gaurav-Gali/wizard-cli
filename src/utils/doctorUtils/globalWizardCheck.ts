import { existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";
import {checkType} from "../../types/doctorTypes.js";

export async function globalWizardCheck(check: checkType) {
    const wizDir = path.join(process.env.HOME || "", ".wiz");
    const bundlesDir = path.join(wizDir, "bundles");
    const scriptsDir = path.join(wizDir, "scripts");
    const baseBundle = path.join(bundlesDir, "base.json");
    const configFile = path.join(wizDir, "config.json");

    if (!existsSync(wizDir)) {
        mkdirSync(wizDir, { recursive: true });
        mkdirSync(bundlesDir, { recursive: true });
        mkdirSync(scriptsDir, { recursive: true });
        writeFileSync(baseBundle, JSON.stringify({}, null, 2));

        check.valid = false;
        check.errors = ["The Wizard-CLI Configuration did not exist"];
        check.instructions = [
            "generated wizard-cli configuration",
            "generated bundles",
            "generated config",
            "generated scripts",
        ];
    } else {
        check.valid = true;
        check.errors = [""];
        check.instructions = [""];
    }

    return check;
}
