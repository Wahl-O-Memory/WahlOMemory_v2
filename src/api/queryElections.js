import elections from "@/../data/elections.json"
export async function getElections() {
    // Simulate an API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                elections
            );
        }, 1); // Simulate a delay
    });
}