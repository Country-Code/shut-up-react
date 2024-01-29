const isToday = (dateObject) => {
    const today = new Date();
    return (
        today.getFullYear() === dateObject.getFullYear() &&
        today.getMonth() === dateObject.getMonth() &&
        today.getDate() === dateObject.getDate()
    );
};

const getFormatedTime = (dateObject) => {
    return `${dateObject.getHours().toString().padStart(2, "0")}:${dateObject
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
};

const getFormatedDate = (dateObject) => {
    let formattedDateMonth = (dateObject.getMonth() + 1)
        .toString()
        .padStart(2, "0");
    let formatedDateDay = dateObject.getDate().toString().padStart(2, "0");
    return `${formatedDateDay}/${formattedDateMonth}`;
};

export default {
    getConversationDate: (date) => {
        const originalDate = new Date(date);
        let formattedDate = "";
        if (isNaN(originalDate)) return formattedDate;

        if (isToday(originalDate)) {
            return getFormatedTime(originalDate);
        }
        return getFormatedDate(originalDate);
    },
    getMessageDate: (date) => {
        const originalDate = new Date(date);
        let formattedDate = "";
        if (isNaN(originalDate)) return formattedDate;

        if (isToday(originalDate)) {
            formattedDate = getFormatedTime(originalDate);
        } else {
            formattedDate = `${getFormatedDate(originalDate)} ${getFormatedTime(originalDate)}`;
        }
        return formattedDate;
    },
};
