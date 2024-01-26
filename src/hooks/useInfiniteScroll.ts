import { useEffect, useState } from "react";

const useInfiniteScroll = (isLoading: boolean, hasMoreData: boolean) => {
    const [page, setPage] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (hasMoreData) {
                const lastElement = document.querySelector(
                    ".vendors-list > :last-child",
                );

                if (lastElement) {
                    const rect = lastElement.getBoundingClientRect();
                    const scrolledToBottom = rect.bottom <= window.innerHeight;

                    if (scrolledToBottom && !isLoading && hasMoreData) {
                        setPage((prevPage) => prevPage + 1);
                    }
                }
            }
        };

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [isLoading, hasMoreData]);

    return { page };
};

export default useInfiniteScroll;
