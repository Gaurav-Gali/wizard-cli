#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
    .name('wiz')
    .description('Wizard CLI — a TypeScript-powered tool to create, scaffold, and manage Next.js / T3 stack projects with reusable bundles and smart automation.')
    .version('0.0.1');

program
    .command("create <project_name>")
    .description("Rapidly create and customize Next.js/T3 applications using modular bundles")
    .option("-t, --template <template>", "Specify the project template i.e nextjs/t3")
    .option("-b, --bundle <bundle>", "Specify the project template bundle")
    .action((project_name:string, options:{template:string, bundle:string}) => {
        console.log(`Creating ${project_name}`);
        console.log(`Using ${options.template}`);
        console.log(`Bundle ${options.bundle}`);
    })

program.parse();
