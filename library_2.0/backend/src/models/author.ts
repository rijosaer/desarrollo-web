import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export interface AuthorI {
            id?: number;
            name: string;
            sstatus: "ACTIVE" | "INACTIVE";
}

export class Author extends Model {
    public id! : number;
    public name! : string;
    public status!: "ACTIVE" | "INACTIVE";
}

Author.init(
    {
    name: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE",
    },
    },
    {
    sequelize,
    modelName: "Author",
    tableName: "Authors",
    timestamps: false,
  }
)