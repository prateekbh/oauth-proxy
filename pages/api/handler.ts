import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    
  res.status(200).json({
    // @ts-expect-error
    method: req.method,
    body: req.body,
    qs: req.query
  })
}