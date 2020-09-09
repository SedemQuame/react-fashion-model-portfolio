const ease = [0.6, 0.05, -0.01, 0.9];

export const imageVariant = {
  moveLeft: {
    translateX: 0,
    transition: {
      ease,
    },
  },
  moveRight: {
    translateX: -320,
    transition: {
      ease,
    },
  },
};

export const textVariants = {
  fadeIn: {
    opacity: 1,
    transition: {
      ease,
      duration: 0.3,
    },
  },
  fadeOut: {
    opacity: 0,
    transition: {
      ease,
      duration: 0.3,
    },
  },
};
