import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './search-input.css';
import useRessource from "../../../../../hooks/useRessource";

const SearchInput = () => {
    const [chatRequestState, chatRepo] = useRessource("chats", "Request");
    const [searchRequestState, searchRepo] = useRessource("search", "Request")
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const [authState] = useRessource("auth");
    const dispatch = useDispatch();

    //handle click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.className !== "message-input-text") {
                setShowSearchResults(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleSearch = async (e) => {
        await dispatch(searchRepo.searchUsers(e.target.value))
    }

    useEffect(() => {
        if (searchRequestState.searchUsers?.data?.users) {
            setSearchResults(searchRequestState.searchUsers.data.users)
        }
    }, [searchRequestState])

    const handleCreateNewChat = async (id) => {
        console.log(id);
        console.log(authState.user?._id);
        await dispatch(chatRepo.createGroup([authState.user?._id, id], searchResults.find(user => user._id === id).fullname))
        await dispatch(chatRepo.getAllChats())
        dispatch(chatRepo.newChat(false))
    }

    return (
        <>
            <div className="search-input">
                <input
                    type="text"
                    className="message-input-text"
                    placeholder="Search"
                    onFocus={() => setShowSearchResults(true)}
                    onChange={handleSearch}
                />
                {showSearchResults &&
                    searchResults &&
                    searchResults.length > 0 && (
                        <div className="search-results">
                            {searchResults.map((user) => (
                                <div
                                    className="search-result"
                                    key={user._id}
                                    onClick={() =>
                                        handleCreateNewChat(user._id)
                                    }
                                >
                                    <img src={user.image} alt="" />
                                    <span>{user.fullname}</span>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </>
    );
};

export default SearchInput;
