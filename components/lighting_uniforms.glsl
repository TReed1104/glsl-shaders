// Object holding all of a light's attributes
struct Light {
    // General lighting attributes
    vec3 position; 
    vec3 direction;
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;

    // Spotlighting
    float cutOff;
    float outerCutOff;
    
    // Attenuation
    float constant;
    float linear;
    float quadratic;
};

uniform Light light;