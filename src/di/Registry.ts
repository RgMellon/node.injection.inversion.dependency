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

    register<T>(token: string, implementation: Constructor<T>) {
        if (this.services.has(token)) {
            throw new Error(`${token} aleready registred`);
        }

        this.services.set(token, implementation);
    }

    resolve<T>(token: string): T {
        const implementation = this.services.get(token);

        if (!implementation) throw new Error(`${token} was not found`);

        const paramTypes: Constructor<any>[] =
            Reflect.getMetadata("design:paramtypes", implementation) ?? [];
        console.log({ paramTypes });
        const dependencies = paramTypes.map((_, index) => {
            const dependencyToken = Reflect.getMetadata(
                `inject:${index}`,
                implementation
            );

            console.log(dependencyToken);
            return this.resolve(dependencyToken);
        });

        return new implementation(...dependencies);
    }
}
