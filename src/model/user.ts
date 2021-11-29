export interface User {
  name: string;
  logoUrl: string;
}

export const currentUser: User = {
  name: "User",
  logoUrl: "/gb-react/user-solid.svg",
};

export const bot: User = {
  name: "Chatbot.exe",
  logoUrl: "/gb-react/robot-solid.svg",
};
