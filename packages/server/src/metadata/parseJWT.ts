import * as isoBase64URL from "../helpers/isoBase64URL";

/**
 * Process a JWT into Javascript-friendly data structures
 */
export function parseJWT<T1, T2>(jwt: string): [T1, T2, string] {
  const parts = jwt.split('.');
  return [
    JSON.parse(base64url.toString(parts[0])) as T1,
    JSON.parse(base64url.toString(parts[1])) as T2,
    parts[2],
  ];
}
