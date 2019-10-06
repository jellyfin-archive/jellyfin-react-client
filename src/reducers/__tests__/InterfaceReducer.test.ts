import { ActionType } from "../../actions/ActionType";
import { JellyfinAction } from "../../Props";
import interfaceReducer, { InterfaceReducerState } from "../interfaceReducer";

describe("Connect reducer ", () => {
    it("returns state back on CONNECT_SUCCESSFUL", () => {
        const jellyfinAction: JellyfinAction = {
            type: ActionType.UPDATE_APICLIENT,
            username: "test",
            userId: "test",
            token: "n",
            loginStatus: true,
            address: "hi",
            port: "90",
            apiClient: "blah"
        };
        const ret: InterfaceReducerState = interfaceReducer(undefined, jellyfinAction);

        expect(ret.apiClient).toEqual("blah");
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
            apiClient: "blah"
        };

        const ret: InterfaceReducerState = interfaceReducer(undefined, jellyfinAction);
        expect(ret.apiClient).toEqual(undefined);
    });
});


