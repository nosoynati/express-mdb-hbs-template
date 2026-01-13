import { Router } from "express";
import getData from '../utils/getdata.js';
import { home, itemList} from '../controller/main.controller.js';

const router = Router();

router.get("/", home);
router.get("/list", itemList);

export default router;
