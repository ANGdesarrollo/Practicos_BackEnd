export const useValidations = () => {
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateField = (el) => {
        console.log(el)
        if(!el) {
            return false;
        } else {
            return true
        }
    }

    function validateImageUrl(url) {
        const re = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|bmp|tiff)$/;
        return re.test(url);
    }

    return {
        validateEmail,
        validateField,
        validateImageUrl
    }
}
