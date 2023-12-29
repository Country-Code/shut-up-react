import { useEffect, useState } from "react";
import api from '../services/api/api';
import stateActions from '../services/state/stateActions';
import { useSelector } from "react-redux";

const useRessource = (ressource, stateType = "") => {
    const [repo, setRepo] = useState(null);
    const state = useSelector(state => state[ressource + stateType])
    useEffect(()=> {
        const ressourceApi = api[ressource]();
        setRepo(() => {
            let actions = stateActions[ressource](ressourceApi)
            return actions
        });
    }, [])

    return [state, repo];
};

export default useRessource;
