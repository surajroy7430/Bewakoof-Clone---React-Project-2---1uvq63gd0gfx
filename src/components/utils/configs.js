const PROJECT_ID = "1uvq63gd0gfx";

export const getHeaderWithProjectId = () => {
    return {
        headers: { 
            projectId: PROJECT_ID 
        },
    };
};

export const getHeaderWithProjectIDAndBody = () => {
    return {
        headers: { 
            projectId: PROJECT_ID, 
            "Content-Type": "application/json" 
        },
    };
};

export const getAuthHeaderConfig = (authToken) => {
    return {
        headers: {
            projectID: PROJECT_ID,
            Authorization: `Bearer ${authToken}`,
        },
    };
};