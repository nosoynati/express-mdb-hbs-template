import { Router } from "express";
import getData from '../utils/getdata.js';

const router = Router();

router.get("/", (req, res) => {
  try {
    res.render("home");
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});
router.get("/list", async (req, res) => {
  let id = req?.params?.id
  let query;
  try {
    if (!id) {
      query = await getData();
      res.render("list", { data: query });
    }
  } catch (e) {
    console.error(e.message);
  }
});
export default router;
