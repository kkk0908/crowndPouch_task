module.exports = {
    CREATED: {
        status: 200,
        message: "Data Created Successfully!",
    },
    UPDATED: {
        status: 200,
        message: "Data Updated Successfully!",
    },
    DELETED: {
        status: 200,
        message: "Data Deleted Successfully!",
    },
    FETCHED: {
        status: 200,
        message: "Data Fetched Successfully!",
    },
    INVITED: {
        status: 200,
        message: "Invited Successfully!",
    },
    LOGIN: {
        status: 200,
        message: "Login Successfully!",
    },
    LOGOUT: {
        status: 200,
        message: "Logout Successfully!",
    },
    UPDATE_PASSWORD: {
        status: 200,
        message: "Password Updated Successfully!",
    },
    RESET_PASSWORD: {
        status: 200,
        message: `Success!
    A New Password Has Been Sent To Your Registered Email.
    Please Reset The Password`,
    },
    QUERY_SUCCESS: {
        status: 200,
        message: `Success!
Thank you for submitting your query. We will reply to you within 24 to 48 hours.
Thank you for your patience.`
    },
    COMMENT_SUCCESS: {
        status: 200,
        message: `Success!
        Thank you for submitting your comment. We will update your comment within 24 hours.
        Thank you for your patience.`
    },
    INTERNAL_SERVER_ERROR: {
        status: 500,
        message: "Internal Server Error",
    },
    BAD_REQUEST: {
        status: 400,
        message: "bad Request",
    },
    INVALID_PASSWORD: {
        status: 400,
        message: "Invalid Password!",
    },
    UNAUTHORIZED: {
        status: 401,
        message: "Unauthorized",
    },
    FORBIDDEN: {
        status: 403,
        message: "Forbidden",
    },
    NOT_FOUND: {
        status: 404,
        message: "Not Found",
    },
    TOO_MANY_REQUEST: {
        status: 429,
        message: "Too Many Request",
    },
    UNPROCESSABLE_ENTITY: {
        status: 422,
        message: "Unprocessable Entity",
    },
    PRECONDITION_FAILED: {
        status: 412,
        message: "Precondition Failed",
    },
};
