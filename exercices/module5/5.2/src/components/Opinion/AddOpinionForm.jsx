import React, { useContext, useState } from 'react';
import { OpinionsContext } from 'contexts/OpinionsContext';

const AddOpinionForm = () => {
  const [newOpinion, setNewOpinion] = useState("");
  const { addOpinion } = useContext(OpinionsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newOpinion.trim()) {
      addOpinion(newOpinion);
      setNewOpinion("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newOpinion}
        onChange={(e) => setNewOpinion(e.target.value)}
        placeholder="Add your opinion"
      />
      <button type="submit">Add Opinion</button>
    </form>
  );
};

export default AddOpinionForm;
