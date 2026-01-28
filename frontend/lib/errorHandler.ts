export async function withErrorHandling<T>(
    handler: () => Promise<T>,
): Promise<T | { error: string; status: number }> {
    try {
        return await handler();
    } catch (error) {
        console.error('API 500 Error:', error);
        return { error: 'Internal Server Error', status: 500 };
    }
}