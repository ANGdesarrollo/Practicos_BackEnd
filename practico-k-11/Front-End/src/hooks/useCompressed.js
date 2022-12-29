export const useCompressed = () => {
    const showCompressionPercentage = (original, compressed) => {
        return ((1 - compressed / original) * 100).toFixed(2);
    }

    return {
        showCompressionPercentage
    }
}
