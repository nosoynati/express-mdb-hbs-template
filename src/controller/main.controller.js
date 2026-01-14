import getDocData from "../utils/getdata.js";
import data from '../data/data.json' with {type: 'json'}

export const home = (req, res) => {
  try {
    res.render("home");
  } catch (e) {
    res.status(404).send("not-found");
  }
};

export const itemList = async (req, res) => {
  let id = req?.params?.id;
  let query;
  try {
    if (!id) {
      query = data
      res.render("list", { data: query });
    }
  } catch (e) {
    res.status(404).render("not-found")
    console.error("hubo un error",e.message);
  }
};
