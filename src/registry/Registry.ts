type Constructor<T> = new (...args: any[]) => T;

export class Registry {
    private readonly services: Map<string, Constructor<any>> = new Map();
    private static instance: Registry;

    private constructor() {}

    static getInstance() {
        if (!this.instance) {
            this.instance = new Registry();
        }

        return this.instance;
    }

    register<T>(implementation: Constructor<T>) {
        const token = implementation.name;

        if (this.services.has(token)) {
            throw new Error(`${token} aleready registred`);
        }

        this.services.set(token, implementation);
    }

    resolve<T>(implementation: Constructor<T>): T {
        const token = implementation.name;

        const impl = this.services.get(token);

        if (!impl) throw new Error(`${token} was not found`);

        const paramTypes: Constructor<any>[] =
            Reflect.getMetadata("design:paramtypes", impl) ?? [];

        const dependencies = paramTypes.map((constructor) =>
            this.resolve(constructor)
        );

        return new impl(...dependencies);
    }
}
