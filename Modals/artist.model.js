import { sequelize } from "../Config/db.suquelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class ArtistModel extends Model {}

ArtistModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'Untitled'
    }
}, {
    sequelize,
    modelName: 'artist',
    freezeTableName:true,
    // underscored:true
    createdAt: 'created',
    updatedAt:false

})

export default ArtistModel