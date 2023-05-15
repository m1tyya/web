import z from 'zod';

const isProduction = process.env.NODE_ENV === `production`;
const isDevelopment = process.env.NODE_ENV === `development`;
const isTest = process.env.NODE_ENV === `test`;

// -------------------
// Base env schema
// -------------------
const baseSchema = z
	.object({
		APP_ORIGIN: z.string(),
		development: z.boolean(),
		GOOGLE_API: z.string(),
		production: z.boolean(),
		test: z.boolean(),
	})
	.nonstrict();

// ----------------------
// Production env schema
// ----------------------
const productionEnvSchema = z.object({
	VERCEL_URL: z.string(),
});

let envSchema;
envSchema = isProduction
	? baseSchema.merge(productionEnvSchema)
	: baseSchema.merge(productionEnvSchema.partial());

export const env = envSchema.parse({
	...process.env,
	APP_ORIGIN: isProduction ? process.env[`VERCEL_URL`] : `http://localhost:3000`,
	development: isDevelopment,
	production: isProduction,
	test: isTest,
});
