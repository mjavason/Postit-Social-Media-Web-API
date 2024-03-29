const constants = {
    DATABASE_URI: process.env.DATABASE_URI,

    DATABASES: {
        POSTIT: "postit",
        COMMENT: "comment",
        USER: "user"
    },
    USER_TYPES: {
        USER: "user",
        ADMIN: "admin"
    },
    MESSAGES: {
        FETCHED: "Resource fetched successfully",
        UPDATED: "Resource updated successfully",
        ERROR: "Resource error",
        CREATED: "Resource created successfully",
        DELETED: "Resource deleted successfully",
        NOT_FOUND: "Resource not found",
        DEFAULT: "Request received successfully",
        AUTH_DEFAULT: "",
        LOGOUT: "Successfully logged out! Have a nice day.",
        LOGIN_FIRST: "Error! Login first",
        LOGGED_IN: "Successfully logged in",
        LOGIN_FAILURE: "Unable to login. Username or password incorrect"
    }
};

module.exports = constants;