module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define('User', {

        id:{
            type: DataTypes.INTEGER(11),
            field :'id',
            autoIncrement: true,
            primaryKey : true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING(250),
            field:'name'
        },
        password:{
            type:DataTypes.STRING(250),
            field:'password'
        }
    },
    {
        timestamps:true,
        tableName:'User'
    }
    )

    return User
}