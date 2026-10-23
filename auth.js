// Authentication helpers for the Online Voting System

/**
 * Returns the currently authenticated Supabase user.
 * Returns null if no user is logged in or the request fails.
 */
async function getCurrentUser() {
    try {
        const { data, error } = await window.supabaseClient.auth.getUser();

        if (error) {
            console.error("Error getting current user:", error.message);
            return null;
        }

        return data.user;
    } catch (error) {
        console.error("Unexpected authentication error:", error);
        return null;
    }
}

/**
 * Logs out the currently authenticated user.
 * Returns true if logout succeeds.
 */
async function logoutUser() {
    try {
        const { error } = await window.supabaseClient.auth.signOut();

        if (error) {
            console.error("Logout error:", error.message);
            return false;
        }

        return true;
    } catch (error) {
        console.error("Unexpected logout error:", error);
        return false;
    }
}
