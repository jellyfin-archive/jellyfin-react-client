import authReducer, { AuthReducerState } from "../authReducer";
import { ActionType } from "../../actions/ActionType";
import { JellyfinAction } from "../../Props";

describe("Auth reducer ", () => {
    it("returns state back on LOGIN_SUCCESSFUL", () => {
        const jellyfinAction: JellyfinAction = {
            type: ActionType.LOGIN_SUCCESSFUL,
            username: "test",
            userId: "test",
            token: "n",
            loginStatus: true,
            address: "hi",
            port: "90",
            apiClient: undefined
        };
        const ret: AuthReducerState = authReducer(undefined, jellyfinAction);

        expect(ret.username).toEqual("test");
        expect(ret.userId).toEqual("test");
        expect(ret.token).toEqual("n");
        expect(ret.loginStatus).toEqual(true);
    });

    it("returns initial state back on any other type", () => {
        const jellyfinAction: JellyfinAction = {
            type: ActionType.SOMETHING_HAPPENED_SUCCESSFULLY,
            username: "test",
            userId: "test",
            token: "n",
            loginStatus: true,
            address: "hi",
            port: "90",
            apiClient: undefined
        };

        const ret: AuthReducerState = authReducer(undefined, jellyfinAction);
        expect(ret.username).toEqual("");
        expect(ret.userId).toEqual("");
        expect(ret.token).toEqual("");
        expect(ret.loginStatus).toEqual(false);
    });
});


