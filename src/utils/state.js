export default {
    getRequestStep: (actionType) => {
        const steps = {
            REQUEST: "start",
            SUCCESS: "success",
            FAIL: "fail",
        };
        let lastIndexOf_ = actionType.lastIndexOf("_");
        const requestType = actionType.substring(
            lastIndexOf_ === -1 ? 0 : lastIndexOf_
        );

        return steps[requestType] ?? "UNKNOWN";
    },
    getMethodName: (actionType) => {
        const words = actionType.split("_");

        return words
            .slice(0, -1)
            .map((word, index) => {
                if (index === 0) {
                    return word.toLowerCase();
                } else {
                    return (
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    );
                }
            })
            .join("");
    },
};
