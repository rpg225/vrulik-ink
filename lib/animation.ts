export const fadeUp = {
    hidden : {},
    visbile : {
        opacity: 1,
        y : 0, 
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};