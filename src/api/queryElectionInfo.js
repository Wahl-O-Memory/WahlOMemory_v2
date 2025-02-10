import questionsLTW from "@/../data/thüU18ElectionData.json"
import questionsBTW from "@/../data/BTWElectionData.json"
import partiesLTW from "@/../data/thüU18Parties.json"
import partiesBTW from "@/../data/BTWParties.json"

export async function getElectionInfo(electionID) {
    if (electionID==="BTWU18_2025"){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    questionsBTW
                );
            }, 1); // Simulate a delay
        });
    }
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
                 questionsLTW
             );
         }, 1); // Simulate a delay
     });
 }

export async function getElectionParties(electionID) {
    if (electionID==="BTWU18_2025"){
        console.log("Unknown ElectionID:", electionID)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    partiesBTW
                );
            }, 1); // Simulate a 1-second delay
        });
    }
    if (electionID!=="ThüU18_2024"){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 1); // Simulate a 1-second delay
        });
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                partiesLTW
            );
        }, 1); // Simulate a delay
    });
}