type Constructor<T> = new (...args: any[]) => T;

export function Inject(token: string) {
    return (
        target: Constructor<any>,
        propertyKey: any,
        propertyIndex: number
    ) => {
        Reflect.defineMetadata(`inject:${propertyIndex}`, token, target);
    };
}

// em qual posicao esse token precisa ser injetado
