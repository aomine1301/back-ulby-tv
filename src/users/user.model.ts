import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttr {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, UserCreationAttr> {
  @ApiProperty({ example: '1', description: 'unique modifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'test@gmail.com', description: 'email address' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '12345qwerty', description: 'user password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'false', description: 'banned user or not' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: 'spam relay other users',
    description: 'reason banned',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;
}
