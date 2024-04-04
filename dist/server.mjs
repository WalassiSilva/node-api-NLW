import {
  errorHandler
} from "./chunk-X6P5DCG4.mjs";
import {
  checkIn
} from "./chunk-D2AE6262.mjs";
import {
  createEvent
} from "./chunk-57ODPVCI.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeesBadge
} from "./chunk-JYIE4HOV.mjs";
import {
  getEvent
} from "./chunk-QQUUMW2O.mjs";
import {
  getEventAttendees
} from "./chunk-ZT6ISFBK.mjs";
import {
  registerForEvent
} from "./chunk-ULOSLLQ5.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-ZBDJRE5N.mjs";

// src/server.ts
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeesBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running on http://localhost:3333");
});
