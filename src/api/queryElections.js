import config from "./config.json";

export async function getElections() {

    try {
        // Make a GET request to fetch elections
        const response = await fetch(`${config.endpoint}/elections`);
        if (!response.ok) {
            throw new Error(`Failed to fetch elections: ${response.statusText}`);
        }

        // Parse the JSON response
        const elections = await response.json();
        return elections;
    } catch (error) {
        console.error("Error fetching elections:", error);
        throw error; // Re-throw the error so the caller knows something went wrong
    }
}