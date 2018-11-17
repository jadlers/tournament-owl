const sizes = {
  phone: 768,
  tablet: 992,
  desktop: 1200,
};

const queries = {
  tiny: `@media (max-width: ${sizes.phone}px)`,
  phone: `@media (min-width: ${sizes.phone}px)`,
  tablet: `@media (min-width: ${sizes.tablet}px)`,
  desktop: `@media (min-width: ${sizes.desktop}px)`,
};

export { queries };
