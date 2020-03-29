const {
  COOKIE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  MONGODB_URI,
  NODE_ENV,
} = process.env;

if (!COOKIE_KEY) {
  throw new Error("COOKIE_KEY cannot be undefined");
}

if (!GOOGLE_CLIENT_ID) {
  throw new Error("GOOGLE_CLIENT_ID cannot be undefined");
}

if (!GOOGLE_CLIENT_SECRET) {
  throw new Error("GOOGLE_CLIENT_SECRET cannot be undefined");
}

if (NODE_ENV === "production") {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI cannot be undefined");
  }
}
