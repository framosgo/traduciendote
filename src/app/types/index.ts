import { Record } from "immutable";
import { rootReducer } from "../../base/store";

export type AppState = ReturnType<typeof rootReducer>;

export interface Action {
    type: object;
    payload?: object;
    request?: Promise<any>;
}
