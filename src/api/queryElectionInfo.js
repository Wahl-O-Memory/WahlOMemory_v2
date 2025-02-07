import parties from "@/../data/thüU18Parties.json"
import config from "./config.json";

export async function getElectionInfo(electionID) {
    if (!electionID) {
        console.log("Missing ElectionID");
        return null;
    }

    try {
        const response = await fetch(`${config.endpoint}/election?id=${encodeURIComponent(electionID)}`);

        if (!response.ok) {
            console.error("Failed to fetch election info:", response.statusText);
            return null;
        }

        const electionInfo = await response.json();
        return electionInfo;
    } catch (error) {
        console.error("Error fetching election info:", error);
        return null;
    }
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