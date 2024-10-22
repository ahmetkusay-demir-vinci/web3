import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const OpinionsContext = React.createContext(null);

const OpinionsProviderWrapper = (props) => {
    const [opinions, setOpinions] = useState([]);

    const addOpinion = (text) => {
        const newOpinion = {
            id: uuidv4(),
            text,
            votes: 1,
        };
        setOpinions([...opinions, newOpinion]);
    };

    const voteOpinion = (id) => {
        setOpinions(opinions.map(opinion =>
            opinion.id === id ? { ...opinion, votes: opinion.votes + 1 } : opinion
        ));
    };

    const sortedOpinions = [...opinions].sort((a, b) => b.votes - a.votes);

    const exposedValues = {
        opinions: sortedOpinions,
        addOpinion,
        voteOpinion,
    };

    return (
        <OpinionsContext.Provider value={exposedValues}>
            {props.children}
        </OpinionsContext.Provider>
    );
};

export { OpinionsContext, OpinionsProviderWrapper };
