// server/api/plaintext.get.ts

export default defineEventHandler((event) => {
  const { html } = getQuery(event);
  if (typeof html !== "string") {
    return { plaintext: "" };
  }
  const returnObj = {
    plaintext: html.replace(/<[^>]+>/g, ""),
  };
  return returnObj;
});
