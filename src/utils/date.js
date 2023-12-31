export default {
    getConversationDate: (date) => {
        const originalDate = new Date(date);

        const formattedDate = `${originalDate.getFullYear()}-${(
            originalDate.getMonth() + 1
        )
            .toString()
            .padStart(2, "0")}-${originalDate
                .getDate()
                .toString()
                .padStart(2, "0")} ${originalDate
                    .getHours()
                    .toString()
                    .padStart(2, "0")}:${originalDate
                        .getMinutes()
                        .toString()
                        .padStart(2, "0")}`;

        return formattedDate;
    },
    getMessageDate: (date) => {
        const originalDate = new Date(date);

        const formattedDate = `${originalDate
            .getDate()
            .toString()
            .padStart(2, "0")}/${(originalDate.getMonth())
                .toString()
                .padStart(2, "0")}`;

        return formattedDate;
    },
};
