export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/languages",
    "/languages/lang",
    "/movie-detail/(.*)",
    "/person-detail/(.*)",
    "/tv-detail/(.*)",
  ],
};
