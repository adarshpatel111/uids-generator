/**
 * Generate a Unique ID based on keyword input:
 * - "alphabet" → A–Z
 * - "number" → 0–9
 * - "alphanumeric" → A–Z + 0–9
 * Returns both ID and its length.
 */

function generateUniqueId(type, length = 12) {
  if (!type || typeof type !== "string") {
    throw new Error("Input type must be a string keyword.");
  }

  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const alphanumeric = alpha + numeric;

  let charset;

  const input = type.toLowerCase(); // normalize

  if (input === "alphabet") {
    charset = alpha;
  } else if (input === "number") {
    charset = numeric;
  } else if (input === "alphanumeric") {
    charset = alphanumeric;
  } else {
    throw new Error(
      'Invalid type: allowed values are "alphabet", "number", or "alphanumeric".'
    );
  }

  let id = "";
  for (let i = 0; i < length; i++) {
    id += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return {
    id,
    length: id.length,
    type: input,
  };
}

module.exports = { generateUniqueId };
module.exports.default = { generateUniqueId };
