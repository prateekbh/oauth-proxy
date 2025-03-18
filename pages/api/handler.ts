import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const redirectURL = `https://accounts.google.com/o/oauth2/v2/auth${req.url?.substring(req.url.indexOf("?"))}`
  res.redirect(redirectURL);
}