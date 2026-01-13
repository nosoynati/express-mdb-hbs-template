import getData from '../utils/getdata.js';

export const home = (req, res) => {
  try{
    res.send('home')
  }catch(e){
    res.status(404).send('not-found')
  }
}

export const itemList = async(req, res) => {
  try{
    const id = req.params.id
    let query;
    if(!id){
      query = await getData()
      res.render('list', { data: query })
    }
  }catch(e){
    throw new Error(e)
  }
};