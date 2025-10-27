import { Command } from "commander";

import {doctorLogic} from "../commandsLogic/doctorLogic.js";

export function registerDoctorCommand(program:Command) {
    program
        .command("doctor")
        .description("Checks your system setup and ensures all tools and configs needed by Wizard CLI are ready to go.")
        .action(() => doctorLogic())
}
