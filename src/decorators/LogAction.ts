export function LogAction(message?: string) {
    return function (
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        if (!descriptor || !descriptor.value) {
            return descriptor;
        }

        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const logMessage = message || propertyKey;

            console.log(`✅ Starting: ${logMessage}`);
            const result = await originalMethod.apply(this, args);
            console.log(`✅ Completed: ${logMessage}`);

            return result;
        };

        return descriptor;
    };
}
