import { Inngest } from "inngest";
import { Resend } from "resend";

// Initialize the Inngest client
export const inngest = new Inngest({
  id: "splitr",
  name: "Splitr",
});

export const resend = (() => {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("Missing RESEND_API_KEY in environment");
  }
  return new Resend(key);
})();
