export const ROUTES = {
  CHARACTER: (characterId: string) =>
    `/?${new URLSearchParams({ characterId })}`,
  HOME: "/",
  REGISTER: "/register",
};
