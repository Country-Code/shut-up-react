import { excludedKeys } from "../config/logger";
const getDel = (repeat, repeatChar) => {
    if (
        Number.isInteger(repeat) &&
        repeat > 0 &&
        typeof repeatChar === "string"
    ) {
        return repeatChar.repeat(20);
    }
    return null;
};

export default {
    log: ({
        data = null,
        title = "",
        keyWord = "",
        repeat = 20,
        repeatChar = "#",
    }) => {
        if (excludedKeys.includes(keyWord)) return;
        const del = getDel(repeat, repeatChar);
        if (del) {
            console.log(`${del.repeat(4)}`);
            console.log(`${keyWord} ${title}: ${del}`);
        }
        console.log(data);
        if (del) console.log(`${keyWord}: ${del}${del}`);
    },
};
