import { Registry } from "../registry/Registry";

type Constructor<T> = new (...args: any[]) => T;

export function Injectable() {
    return (target: Constructor<any>) => {
        Registry.getInstance().register(target );
    };
}
