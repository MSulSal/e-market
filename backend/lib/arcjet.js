import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import "dotenv/config";
import { token } from "morgan";

// init arcjet
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],

  rules: [
    // protects app from common attacks such as SQL injections, XSS, CRSF attacks
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE",
      // blocks all bots except search engines
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    // rate limiting
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});
