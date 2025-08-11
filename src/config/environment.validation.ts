import * as Joi from 'joi';

export default Joi.object({
   NODE_ENV: Joi.string().valid('development', 'test', 'production', 'staging').default('development'),
   DB_HOST: Joi.string().required(),
   DB_PORT: Joi.number().default('5432'),
   DB_USERNAME: Joi.string().required(),
   DB_PASSWORD: Joi.string().required(),
   DB_NAME: Joi.string().required(),
   S3_BUCKET: Joi.string().required(),
   DB_SYNC: Joi.string().required(),
   DB_AUTOLOAD: Joi.string().required(),
   PROFILE_API_KEY: Joi.string().required(),
})