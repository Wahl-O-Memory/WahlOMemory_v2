import questions from "@/../data/thüU18ElectionData.json"
import parties from "@/../data/thüU18Parties.json"

export async function getElectionInfo(electionID) {
    if (electionID!=="ThüU18_2024"){
        console.log("Unknown ElectionID:", electionID)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 1); // Simulate a delay
        });
    }
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve(
                 questions
             );
         }, 1); // Simulate a delay
     });
 }

export async function getElectionParties(electionID) {
    if (electionID!=="ThüU18_2024"){
        console.log("Unknown ElectionID:", electionID)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 1); // Simulate a 1-second delay
        });
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                parties
            );
        }, 1); // Simulate a delay
    });
}