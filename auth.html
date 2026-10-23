<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Authentication Module Test</title>

</head>

<body>

    <h1>Authentication Module Test</h1>

    <button id="checkUserButton">
        Check Current User
    </button>

    <button id="logoutButton">
        Log Out
    </button>

    <p id="status">
        Checking session...
    </p>


    <!-- Supabase library -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

    <!-- Supabase configuration -->
    <script src="js/supabase.js"></script>

    <!-- Our authentication module -->
    <script src="js/auth.js"></script>


    <script>

        const status =
            document.getElementById("status");

        const checkUserButton =
            document.getElementById("checkUserButton");

        const logoutButton =
            document.getElementById("logoutButton");


        /*
         * Check the current session when
         * the page loads.
         */
        async function checkUser() {

            const user =
                await getCurrentUser();

            if (!user) {

                status.textContent =
                    "No user is currently logged in.";

                return;
            }

            status.textContent =
                "Logged in as: " + user.email;

            console.log("Current user:", user);
        }


        /*
         * Check user button
         */
        checkUserButton.addEventListener(
            "click",
            checkUser
        );


        /*
         * Logout button
         */
        logoutButton.addEventListener(
            "click",
            async () => {

                const success =
                    await logoutUser();

                if (success) {

                    status.textContent =
                        "Logged out successfully.";

                } else {

                    status.textContent =
                        "Logout failed.";
                }

            }
        );


        /*
         * Run automatically when page loads.
         */
        checkUser();

    </script>

</body>

</html>
