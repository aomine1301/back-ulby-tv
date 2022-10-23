import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'test@gmail.com', description: 'email address' })
  readonly email: string;
  @ApiProperty({ example: '12345qwerty', description: 'user password' })
  readonly password: string;
}
