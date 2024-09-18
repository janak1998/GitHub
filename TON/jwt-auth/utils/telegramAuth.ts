import crypto from "crypto";

interface User {
  id?: string;
  usernames?: string;
  [key: string]: any;
}

interface ValidatedData {
  [key: string]: string;
}

interface ValidationResult {
  validatedData: ValidatedData | null;
  user: User;
  message: string;
}

export function validateTelegramWebAppData(
  telegramInitData: string
): ValidationResult {
  const BOT_TOKEN =
    process.env.BOT_TOKEN || "7331476972:AAFSXESR7obA2jyZCMnQLb3GOCtas_gXVnM";

  let validatedData: ValidatedData | null = null;
  let user: User = {};
  let message = "";

  if (!BOT_TOKEN) {
    return { message: "BOT token is not set", validatedData: null, user: {} };
  }
  const initData = new URLSearchParams(telegramInitData);
  const hash = initData.get("hash");
  if (!hash) {
    return {
      message: "Hash is missing from initData",
      validatedData: null,
      user: {},
    };
  }

  initData.delete("hash");

  const authDate = initData.get("auth_date");

  if (!authDate) {
    return {
      message: "Auth date is missing from initData",
      validatedData: null,
      user: {},
    };
  }

  const authTimeStamp = parseInt(authDate, 10);
  const currentTimeStamp = Math.floor(Date.now() / 1000);
  const timeDifference = Math.abs(currentTimeStamp - authTimeStamp);
  const fiveMinutesInSeconds = 5 * 60;

  if (timeDifference > fiveMinutesInSeconds) {
    return {
      message: "Telegram data is older than 5 minutes",
      validatedData: null,
      user: {},
    };
  }

  const dataCheckString = Array.from(initData.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  // ... rest of the code

  const secretKey = crypto
    .createHmac("sha256", "WebAppData")
    .update(BOT_TOKEN)
    .digest();
  const calculatedHash = crypto
    .createHmac("sha256", secretKey)
    .update(dataCheckString)
    .digest("hex");

  if (calculatedHash === hash) {
    validatedData = Object.fromEntries(initData.entries());
    message = "Validation successful";
    const userString = validatedData["user"];
    if (userString) {
      try {
        user = JSON.parse(userString);
      } catch (error) {
        console.error("Error parsing user data: ", error);
        message = "Failed to parse user data";
        validatedData = null;
      }
    } else {
      message = "User data is missing from initData";
      validatedData = null;
    }
  } else {
    message = "Hash validation failed";
  }

  return { validatedData, user, message };
}
