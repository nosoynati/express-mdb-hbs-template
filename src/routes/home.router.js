import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    res.render('home');

  }catch(e){
    res.status(500).json({
      error: e.message
    })
  }
});
export default router;