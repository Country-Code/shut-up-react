import { useEffect, useState } from "react";
import api from '../services/api/api';
import stateActions from '../services/state/stateActions';
import { useSelector } from "react-redux";

const useRessource = (ressource) => {
    const [repo, setRepo] = useState(null);
    const state = useSelector(state => state[ressource])
    useEffect(()=> {
        const ressourceApi = api[ressource]();
        console.log("ressourceApi : ", ressourceApi)
        setRepo(() => {
            let actions = stateActions[ressource](ressourceApi)
            console.log("ressourceActions : ", actions)
            return actions
        });
    }, [])

    return [state, repo];
};

export default useRessource;
