import { ConnectReducerState } from "../connectReducer";
import { ActionType } from "../../actions/ActionType";
import { JellyfinAction } from "../../Props";
import connectReducer from "../connectReducer";

describe("Connect reducer ", () => {
    it("returns state back on CONNECT_SUCCESSFUL", () => {
        const jellyfinAction: JellyfinAction = {
            type: ActionType.CONNECT_SUCCESSFUL,
            username: "test",
            userId: "test",
            token: "n",
            loginStatus: true,
            address: "hi",
            port: "90",
            apiClient: undefined
        };
        const ret: ConnectReducerState = connectReducer(undefined, jellyfinAction);

        expect(ret.serverAddress).toEqual("hi");
        expect(ret.serverPort).toEqual("90");
        expect(ret.connectStatus).toEqual(true);
    });

    it("returns state back on CONNECT_FAILED", () => {
        const jellyfinAction: JellyfinAction = {
            type: ActionType.CONNECT_FAILED,
            username: "test",
            userId: "test",
            token: "n",
            loginStatus: true,
            address: "hi",
            port: "90",
            apiClient: undefined
        };
        const ret: ConnectReducerState = connectReducer(undefined, jellyfinAction);

        expect(ret.serverAddress).toEqual("hi");
        expect(ret.serverPort).toEqual("90");
        expect(ret.connectStatus).toEqual(false);
    });

    it("returns initial state back on any other type", () => {
        const jellyfinAction: JellyfinAction = {
            type: ActionType.LOGIN_FAILED,
            username: "test",
            userId: "test",
            token: "n",
            loginStatus: true,
            address: "hi",
            port: "90",
            apiClient: undefined
        };

        const ret: ConnectReducerState = connectReducer(undefined, jellyfinAction);
        expect(ret.serverAddress).toEqual("");
        expect(ret.serverPort).toEqual("");
        expect(ret.connectStatus).toEqual(false);
    });
});


