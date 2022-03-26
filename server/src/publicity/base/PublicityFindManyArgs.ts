/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PublicityWhereInput } from "./PublicityWhereInput";
import { Type } from "class-transformer";
import { PublicityOrderByInput } from "./PublicityOrderByInput";

@ArgsType()
class PublicityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PublicityWhereInput,
  })
  @Field(() => PublicityWhereInput, { nullable: true })
  @Type(() => PublicityWhereInput)
  where?: PublicityWhereInput;

  @ApiProperty({
    required: false,
    type: [PublicityOrderByInput],
  })
  @Field(() => [PublicityOrderByInput], { nullable: true })
  @Type(() => PublicityOrderByInput)
  orderBy?: Array<PublicityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PublicityFindManyArgs };