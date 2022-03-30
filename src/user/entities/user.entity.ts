export class User {
    private readonly id: number
    email: string
    name: string

    constructor(props: {
        email: string,
        name: string,
    }) {
        Object.assign(this, props);
    }
}
