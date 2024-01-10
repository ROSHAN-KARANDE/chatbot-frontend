import moment from "moment";

export const analyze = (text) => {
  if (text.includes("hi") || text.includes("hai") || text.includes("hellow"))
    return "Hi , How can i help you?";
  else if (text.includes("date")) return moment().format("MMMM DO YYYY");
  else if (text.includes("time")) return moment().format("h:mm:ss a");
  else if (text.includes("google link")) return "https://www.google.com";
  else if (text.includes("interest")) return "Bank interest rate is 8.7";
  else if (text.includes("thank you"))
    return "Thanks for Contacting me. Have a nice Day";
  return "I cant,t get you .  Can you rephrase the message?";
};
