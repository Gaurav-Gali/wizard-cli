import { existsSync, mkdirSync, copyFileSync, readdirSync, lstatSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { checkType } from "../../types/doctorTypes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyRecursive(src: string, dest: string) {
    if (!existsSync(src)) return;

    const stats = lstatSync(src);
    if (stats.isDirectory()) {
        if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
        const files = readdirSync(src);
        for (const file of files) {
            const srcPath = path.join(src, file);
            const destPath = path.join(dest, file);
            copyRecursive(srcPath, destPath);
        }
    } else {
        copyFileSync(src, dest);
    }
}

export async function globalWizardCheck(check: checkType) {
    const wizDir = path.join(process.env.HOME || "", ".wiz");

    // detect config path (works for both src and dist)
    const devPath = path.resolve(__dirname, "../../config");
    const prodPath = path.resolve(__dirname, "../config");
    const configDir = existsSync(devPath) ? devPath : prodPath;

    if (!existsSync(wizDir)) {
        mkdirSync(wizDir, { recursive: true });

        console.log("🔍 Copying from:", configDir);
        copyRecursive(configDir, wizDir);

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
