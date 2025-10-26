import { Command } from "commander";
import {createLogic} from "../commandsLogic/createLogic.js";

export function registerCreateCommand(program:Command) {
    program
        .command("create <project_name>")
        .description("Rapidly create and customize Next.js/T3 applications using modular bundles")
        .option("-t, --template <template>", "Specify the project template i.e nextjs/t3")
        .option("-b, --bundle <bundle>", "Specify the project template bundle")
        .action((project_name:string, options:{template?:string, bundle?:string}) => createLogic(project_name,options))
}
