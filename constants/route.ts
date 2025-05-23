const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  QUESTIONS: (id: string) => `/questions/${id}`,
  SIGN_IN_WITH_OAUTH: "/signin-with-oauth",
};

export default ROUTES;
