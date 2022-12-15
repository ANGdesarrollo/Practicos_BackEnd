import logger from "pino";

const log = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            messageKey: 'message'
        },
    },
    messageKey: 'message'
});

export default log