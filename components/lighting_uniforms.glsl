// Light Struct, encapsulates the light attributes
struct Light {
    // General lighting attributes
    vec3 position; 
    vec3 direction;

    // Colours and intensities
    vec3 ambientIntensity;
    vec3 diffuseColour;
    vec3 specularIntensity;

    // Spotlighting
    float spotlightCutOff;
    float spotlightCutOffOuter;
    
    // Attenuation
    float attenuationConstant;
    float attenuationLinear;
    float attenuationQuadratic;
};

uniform Light light;