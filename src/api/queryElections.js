import elections from "@/../data/elections.json"
export async function getElections() {
    // Simulate an API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                elections
            );
        }, 1000); // Simulate a 1-second delay
    });
}