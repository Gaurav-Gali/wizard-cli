#!/usr/bin/env node

import { Command } from 'commander';

// Importing Commands
import {registerCreateCommand} from "./commands/create.js";

const program = new Command();

program
    .name('wiz')
    .description('Wizard CLI — a TypeScript-powered tool to create, scaffold, and manage Next.js / T3 stack projects with reusable bundles and smart automation.')
    .version('0.0.1');

// Registering Commands
registerCreateCommand(program);

program.parse();
