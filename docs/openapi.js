module.exports = {
    openapi: "3.0.3",
    info: {
        title: "Mi primera API en express",
        version: "1.0.0",
        description: "Backend Developer Web"
    },

    paths: {
        "/api/saludo": {
            get: {
                tags: ["General"],
                summary: "Devuelve un saludo",
                description: "Devuelve un saludo",
                responses: {
                    200: {
                        description: "Saludo devuelto correctamente",
                        content: {
                            "application/json": {
                                example: {
                                    mensaje: "Hola desde mi API"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/yo": {
            get: {
                tags: ["General"],
                summary: "Devuelve mi nombre y carrera",
                description: "Devuelve el nombre y la carrera del autor de la API",
                responses: {
                    200: {
                        description: "Información devuelta correctamente",
                        content: {
                            "application/json": {
                                example: {
                                    nombre: "Ardey",
                                    carrera: "Ingeniería de Software"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/edad/{anio}": {
            get: {
                tags: ["General"],
                summary: "Calcula la edad a partir del año de nacimiento",
                description: "Recibe el año de nacimiento como parámetro y devuelve la edad actual",
                parameters: [
                    {
                        name: "anio",
                        in: "path",
                        required: true,
                        description: "Año de nacimiento de la persona",
                        schema: {
                            type: "integer",
                            minimum: 1900,
                            maximum: new Date().getFullYear()
                        },
                        example: 2000
                    }
                ],
                responses: {
                    200: {
                        description: "Edad calculada correctamente",
                        content: {
                            "application/json": {
                                example: {
                                    "año": 2000,
                                    edad: 26
                                }
                            }
                        }
                    },
                    400: {
                        description: "Año de nacimiento inválido",
                        content: {
                            "application/json": {
                                example: {
                                    error: "El año de nacimiento debe ser un número válido"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
