const Joi = require("joi");

const envVarsSchema = Joi.object()
  .keys({
    VITE_OPEN_WEATHER_API_KEY: Joi.string().required(),
  })
  .unknown();

(function() {
  const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: "key" } }).validate(import.meta.env);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  } else {
    console.log(`Env variables is ready`);
  }
})()
