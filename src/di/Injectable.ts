import { Registry } from "../registry/deprecated_Registry";

type Constructor<T> = new (...args: any[]) => T;

// Esse carinha vai cair em desuso pois vou criar o @inject, mas em caso que nao precis de inversao, pode usar ele
export function Injectable() {
    return (target: Constructor<any>) => {
        Registry.getInstance().register(target);
    };
}
