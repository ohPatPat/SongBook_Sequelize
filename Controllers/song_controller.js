import req from "express/lib/request";
import res from "express/lib/response";
import SongModel from "../Modals/song.model.js";


class SongController {
    constructor() { }

    list = async(req, res) = {
        const result = await SongModel.findAll({

        })
    res.json(result)
    }
    get = async(req, res) = {
        const result = await SongModel.findAll({
            where: { id: req.params.id }
        })
    res.json(...result)
    }

    create = async(req, res) = {
        const { title, content, artist_id } = req.body

    if(title && content && atist_id){
    const model = await SongModel.create(req.body)
    return res.json({ newid: model.id })
}
}

update = async(req, res) = {
    const { title, content, artist_id, id } = req.body

if(title && content && atist_id && id) {
    const model = await SongModel.update(req.body, { where: { id: id } })
    return res.json({ newid: model.id })
}
}

delete = async (req, res) => {
    try {
        await SongModel.destroy({ where: { id: req.params, id } })
        res.sendStatus(200)
    }
    catch (err) {
        res.send(err)
    }
}

}
export default SongController