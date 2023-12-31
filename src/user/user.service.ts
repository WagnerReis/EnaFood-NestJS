import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll({ page, limit, sort }) {
    const users = this.userModel.find(
      {},
      {},
      { skip: page * limit, limit, sort },
    );
    return users;
  }

  findOne(id: string) {
    const user = this.userModel.findOne({
      _id: id,
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.userModel.findOne({
      email,
    });

    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: id }, { $set: updateUserDto });
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}
