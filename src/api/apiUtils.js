export async function handleResponse(response) {
    if (response.ok) {
        const res = response.json();
        return res;
    }
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error('network response was not ok');
}

export function handleError(error) {
    throw error;
}