import req from "express/lib/request";
import res from "express/lib/response";
import ArtistModel from "../Modals/artist.model.js";


class ArtistModel {
    constructor() { }

    list = async(req, res) = {
        const result = await ArtistModel.findAll({

        })
    res.json(result)
    }
    get = async(req, res) = {
        const result = await ArtistModel.findAll({
            where: { id: req.params.id }
        })
    res.json(...result)
    }

    create = async(req, res) = {
        const { name } = req.body

    if(name){
    const model = await ArtistModel.create(req.body)
    return res.json({ newid: model.id })
}
}

update = async(req, res) = {
    const { name} = req.body

if(name) {
    const model = await ArtistModel.update(req.body, { where: { id: id } })
    return res.json({ newid: model.id })
}
}

delete = async (req, res) => {
    try {
        await ArtistModel.destroy({ where: { id: req.params, id } })
        res.sendStatus(200)
    }
    catch (err) {
        res.send(err)
    }
}

}
export default ArtistController