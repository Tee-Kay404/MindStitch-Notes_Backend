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
    firstName: string

    @IsString()
    @MaxLength(32)
    @MinLength(3)
    @IsOptional()
    lastName?: string

    @IsEmail()
    @MaxLength(32)
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    @MinLength(6)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    {
      message: 'Minimun of Eight characters, one-number, one-letter and one special character'
    })
    password: string
} 
