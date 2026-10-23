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

// Check whether the current user is an administrator
// of a specific election.
async function isElectionAdmin(electionId) {
    try {
        const user = await getCurrentUser();

        if (!user || !electionId) {
            return false;
        }

        const { data, error } = await window.supabaseClient
            .from("election_admins")
            .select("id")
            .eq("user_id", user.id)
            .eq("election_id", electionId)
            .maybeSingle();

        if (error) {
            console.error("Error checking election admin access:", error);
            return false;
        }

        return !!data;
    } catch (error) {
        console.error("Unexpected error checking admin access:", error);
        return false;
    }
}

// Make the functions available to admin.html
window.isElectionAdmin = isElectionAdmin;
window.getCurrentUser = getCurrentUser;
window.logoutUser = logoutUser;

window.isElectionAdmin = async function (electionId) {
    try {
        const user = await window.getCurrentUser();

        if (!user || !electionId) {
            return false;
        }

        const { data, error } = await window.supabaseClient
            .from("election_admins")
            .select("id")
            .eq("user_id", user.id)
            .eq("election_id", electionId)
            .maybeSingle();

        if (error) {
            console.error("Error checking election admin:", error);
            return false;
        }

        return !!data;
    } catch (error) {
        console.error("Unexpected error checking election admin:", error);
        return false;
    }
};

// Check whether a user is currently logged in.
window.isLoggedIn = async function () {
    try {
        const { data, error } = await window.supabaseClient.auth.getUser();

        if (error) {
            console.error("Error checking login status:", error.message);
            return false;
        }

        return !!data.user;
    } catch (error) {
        console.error("Unexpected login check error:", error);
        return false;
    }
};
