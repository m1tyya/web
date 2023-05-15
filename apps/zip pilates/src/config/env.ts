import z from 'zod';

const is_production = process.env.NODE_ENV == `production`;

const base_schema = z
	.object({
		GOOGLE_API: z.string(),
	})
	.nonstrict();

const production_schema = z.object({});

const env_schema = is_production
	? base_schema.merge(production_schema)
	: base_schema.merge(production_schema.partial());

export const env = env_schema.parse(process.env);
