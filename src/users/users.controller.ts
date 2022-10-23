import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModel } from './user.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Creating user' })
  @ApiResponse({ status: 200, type: UserModel })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }
  @ApiOperation({ summary: 'Function for getting all users' })
  @ApiResponse({ status: 200, type: [UserModel] })
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
