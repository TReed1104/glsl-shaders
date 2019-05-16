// Object holding all of a light's attributes
struct Light {
    // General lighting attributes
    vec3 position; 
    vec3 direction;
    vec3 ambientIntensity;
    vec3 diffuseColour;
    vec3 specularIntensity;

    // Spotlighting
    float cutOff;
    float outerCutOff;
    
    // Attenuation
    float attenuationConstant;
    float attenuationLinear;
    float attenuationQuadratic;
};

uniform Light light;