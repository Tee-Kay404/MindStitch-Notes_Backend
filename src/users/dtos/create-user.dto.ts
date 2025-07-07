import { 
    IsEmail, 
    IsNotEmpty, 
    IsOptional, 
    IsString, 
    Matches, 
    MaxLength, 
    MinLength
} from "class-validator"

export class CreateUserDto{
    @IsString()
    @MaxLength(32)
    @MinLength(3)
    @IsNotEmpty()
    firstname: string

    @IsString()
    @MaxLength(32)
    @MinLength(3)
    @IsOptional()
    lastname?: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    {
      message: 'Minimun of Eight characters, one-number, one-letter and one special character'
    })
    password: string
} 
