import { useEffect } from "react";

const Marketing = () => {
    useEffect(() => {
        window.location.replace("/marketing.html");
    }, []);

    return <div className="min-h-screen bg-background flex items-center justify-center text-foreground font-body">Loading...</div>;
};

export default Marketing;
