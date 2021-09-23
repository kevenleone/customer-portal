export const initialInvite = (id) => {
    return {
        email: undefined,
        roleId: id
    };
};

export const initialDxpAdmin = () => {
    return {
        email: "",
        firstName: "",
        lastName: "",
        github: ""
    };
};