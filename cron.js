var cron = require("node-cron");

cron.schedule("*/60 * * * *", async () => {
    const currentDomain = process.env.VERCEL_URL || "http://localhost:3000";
    await fetch(currentDomain + "/api/cron", {
        headers: {
            "Content-Type": "application/json",
        },
    })
});
