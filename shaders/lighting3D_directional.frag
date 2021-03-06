#version 330
// Generic In variables for a fragment shader
in vec3 fragmentPosition;
in vec3 fragmentColour;
in vec2 fragmentUV;
in vec3 fragmentNormal;

// Generic Out variables for a fragment shader
out vec4 outputColour;

// Universal uniforms, these match shadertoys
uniform vec3 iResolution;
uniform float iTime;
uniform vec4 iMouse;
uniform vec3 iCameraPosition;

// Light Struct, encapsulates the light attributes
struct Light3D {
    // General lighting attributes
    vec3 position; 
    vec3 direction;

    // Colours and intensities
    vec3 ambientColour;
    vec3 diffuseColour;
    vec3 specularColour;

    // Spotlighting
    float spotlightCutOff;
    float spotlightCutOffOuter;
    
    // Attenuation
    float attenuationConstant;
    float attenuationLinear;
    float attenuationQuadratic;
};

uniform Light3D light;

void main() {
    // Ambient
    vec3 ambient = light.ambientColour * fragmentColour;

    // Diffuse
    vec3 normal = normalize(fragmentNormal);
    vec3 lightDirection = normalize(-light.direction);
    vec3 diffuse = light.diffuseColour * max(dot(normal, lightDirection), 0.0) * fragmentColour;

    // Specular
    vec3 viewDirection = normalize(iCameraPosition - fragmentPosition);
    vec3 reflectdirection = reflect(-lightDirection, normal);
    float shininess = 32;
    vec3 specular = light.specularColour * pow(max(dot(viewDirection, reflectdirection), 0.0f), shininess) * fragmentColour;
    
    // Set the output colour
    outputColour = vec4((ambient + diffuse + specular), 1.0);
}