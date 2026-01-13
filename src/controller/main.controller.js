import getData from "../utils/getdata.js";

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
      query = await getData();
      res.render("list", { data: query });
    }
  } catch (e) {
    console.error(e.message);
  }
};
