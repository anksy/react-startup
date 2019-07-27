import { HELLO_WORLD } from "../types";

export const helloWorld = data => {
    return {
        type: HELLO_WORLD,
        data
    }
}