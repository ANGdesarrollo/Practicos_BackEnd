export const corsConfig = (corsOrigin) => {
    const cors = {
        origin: corsOrigin,
        methods: ['GET', 'POST'],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
    return cors
}

