import {withSpinner} from "../ui/spinner.js";
import {logger} from "../ui/logger.js";
import {checkType} from "../types/doctorTypes.js";

// Utils
import {globalWizardCheck} from "../utils/doctorUtils/globalWizardCheck.js";

export function displayCheckResult(check: checkType) {
    if (check.valid) {
        logger(`${check.name}`, "success");
    } else {
        logger(`${check.name}`, "error");

        if (check.errors?.length) {
            for (const err of check.errors.filter(Boolean)) {
                logger(`${err}`, "error");
            }
        }

        if (check.instructions?.length) {
            for (const step of check.instructions.filter(Boolean)) {
                logger(`→ ${step}`, "standard");
            }
        }
    }
}

export const doctorLogic = async () => {
    let checks = {
        "globalWizard": {
            "name" : "Global Wizard-CLI Configuration",
            "valid" : false,
            "errors" : [""],
            "instructions" : [""],
        }
    }

    // Global Wizard Check
    checks['globalWizard'] = await withSpinner(`Checking ${checks.globalWizard.name}`,() => globalWizardCheck(checks.globalWizard));
    displayCheckResult(checks.globalWizard);
}