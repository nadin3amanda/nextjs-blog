import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  return (
    {text: 'Helloooo', names: ['Nadine','Jian', 'Mischca']}
  )
};
