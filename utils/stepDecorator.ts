import test from "@playwright/test";

export function step(stepName?: string) {
  return function decorator(
    target: Function,
    context: ClassMethodDecoratorContext
  ) {
    return function replacementMethod(this: any, ...args: any[]) {
      const name =
        stepName || `${this.constructor.name + "." + (context.name as string)}`;

      const argsStr = args.length ? JSON.stringify(args) : "";

      return test.step(`${name} ${argsStr}`, async () => {
        return await target.call(this, ...args);
      });
    };
  };
}