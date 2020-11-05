import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const constloadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});