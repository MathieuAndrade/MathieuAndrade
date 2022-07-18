import { useEffect } from "react";

const Scroll = (onScroll: () => void) => {
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, [onScroll]);

    return null;
}

export default Scroll;
