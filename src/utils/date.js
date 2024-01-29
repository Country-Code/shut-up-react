const isToday = (date) => {
    const today = new Date();

    return (
        today.getFullYear() === date.getFullYear() &&
        today.getMonth() === date.getMonth() &&
        today.getDate() === date.getDate()
    );
};

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
        let formattedDate = "";
        if (isNaN(originalDate)) return formattedDate;

        let formattedDateTime = `${originalDate
            .getHours()
            .toString()
            .padStart(2, "0")}:${originalDate
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;
        if (isToday(originalDate)) {
            formattedDate = formattedDateTime;
        } else {
            let formattedDateMonth = (originalDate.getMonth() + 1)
                .toString()
                .padStart(2, "0");
            let formattedDateDay = originalDate
                .getDate()
                .toString()
                .padStart(2, "0");
            formattedDate = `${formattedDateMonth}/${formattedDateDay} ${formattedDateTime}`;
        }
        return formattedDate;
    },
};
