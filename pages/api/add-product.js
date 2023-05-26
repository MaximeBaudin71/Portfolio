//pages/api/add-product.js
import { getXataClient } from '../../src/xata';

const xata = getXataClient();

const handler = async (req, res) => {
  const {Nom, Entreprise, Avis} = req.body;
  const result = await xata.db["Review"].create({Nom, Entreprise, Avis});
  res.send({result});
};
export default handler;