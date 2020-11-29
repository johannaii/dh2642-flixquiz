import React, { useEffect, useState } from "react";

const DataAdder = ({database}) => {

    const [highscore, setHighscore] = useState(0)
    const [userID, setUserID] = useState(1)

    const handleScoreChange = (e) => {
        setHighscore(e.target.value)
    }

    const handleUserChange = (e) => {
        setUserID(e.target.value)
    }

    const createInput = () => {
        database.ref(`highscore/1/5`).set({"score": highscore, "user": userID});
        /* Exempelkod från Firebase
        const uid = this.state.user.uid;
        const { content } = this.state;
        const note_id = `note-${Date.now()}`;

        db.ref(`all_notes/${uid}/${note_id}`)
            .set({
                content,
                note_id,
                uid
            })
            .then(_ => {
                this.setState({ content: "" });
            });*/
    }

    return(<div>
        User
        <input
            onChange={handleUserChange}
        />
        Score
        <input
            onChange={handleScoreChange}
        />
        <button onClick={createInput}>
            Create highscore
        </button>
    </div>)
}

export default DataAdder