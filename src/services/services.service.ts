import { Injectable } from '@nestjs/common';
import { dtoServiceCreate } from './dto/create-services';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class ServicesService {
constructor( private prisma: PrismaService) {}

async create (data: dtoServiceCreate): Promise<dtoServiceCreate>{
    return await this.prisma.services.create({data})
}
async  getAllService(): Promise<dtoServiceCreate[]>{
    return await this.prisma.services.findMany()
}
async getIdService(id):Promise<dtoServiceCreate>{
    return await this.prisma.services.findUnique({
        where:{
            id
        }
    })
}
}
