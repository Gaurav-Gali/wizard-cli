import ora from "ora";

export async function withSpinner<T>(
    message: string,
    fn: () => Promise<T> | T
): Promise<T> {
    const spinner = ora(message).start();
    const result = await fn();

    await new Promise((r) => setTimeout(r, 300));

    spinner.stop();
    spinner.clear();
    return result;
}
