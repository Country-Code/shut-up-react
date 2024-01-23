import { BiBell, BiMessageRoundedDetail, BiPhone } from "react-icons/bi";

export const SidebarData = [
    {
        id: 1,
        name: 'Activity',
        icon: <BiBell />,
        path: "#"
    },
    {
        id: 2,
        name: 'Conversation',
        icon: <BiMessageRoundedDetail />,
        path: "/conversation"
    },
    {
        id: 3,
        name: 'Calls',
        icon: <BiPhone />,
        path: "#"
    },
]
