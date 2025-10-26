export const createLogic = (project_name:string, options:{template?:string, bundle?:string}) => {
    console.log(`Creating => ${project_name}`);
    console.log(`Using => ${options.template}`);
    console.log(`Bundle => ${options.bundle}`);
}