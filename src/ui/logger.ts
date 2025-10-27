import chalk from "chalk";

export const logger = (message:string, t:"success" | "error" | "standard") => {
    if (t === "success") {
        console.log(chalk.green(`✓ ${message}`));
    } else if (t === "error") {
        console.log(chalk.red(`✗ ${message}`));
    } else if (t === "standard") {
        console.log(chalk.cyan.bold(`${message}`));
    }
}