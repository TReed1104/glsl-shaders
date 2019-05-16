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

// Texturing uniforms
uniform bool u_hasTexture;
uniform sampler2D u_textureSampler;

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

void main() {
    if (u_hasTexture) {
        // Ambient
        vec3 ambient = light.ambient * texture(u_textureSampler, fragmentUV).rgb;

        // Diffuse
        vec3 normal = normalize(fragmentNormal);
        vec3 lightDirection = normalize(light.position - fragmentPosition);
        vec3 diffuse = light.diffuse * max(dot(normal, lightDirection), 0.0) * texture(u_textureSampler, fragmentUV).rgb;

        // Specular
        vec3 viewDirection = normalize(iCameraPosition - fragmentPosition);
        vec3 reflectdirection = reflect(-lightDirection, normal);
        vec3 specular = light.specular * pow(max(dot(viewDirection, reflectdirection), 0.0f), shininess) * texture(u_textureSampler, fragmentUV).rgb;

        // Attenuation
        float distanceFromLight = length(light.position - fragmentPosition);
        float attenuation = 1.0 / (light.constant + light.linear * distanceFromLight + light.quadratic * (distanceFromLight * distanceFromLight));  
        ambient *= attenuation;
        diffuse *= attenuation;
        specular *= attenuation;

        // Set the output colour
        outputColour = vec4((ambient + diffuse + specular), 1.0);
    }
    else {
        // Ambient
        vec3 ambient = light.ambient * fragmentColour;

        // Diffuse
        vec3 normal = normalize(fragmentNormal);
        vec3 lightDirection = normalize(light.position - fragmentPosition);
        vec3 diffuse = light.diffuse * max(dot(normal, lightDirection), 0.0) * fragmentColour;

        // Specular
        vec3 viewDirection = normalize(iCameraPosition - fragmentPosition);
        vec3 reflectdirection = reflect(-lightDirection, normal);
        vec3 specular = light.specular * pow(max(dot(viewDirection, reflectdirection), 0.0f), shininess) * fragmentColour;

        // Attenuation
        float distanceFromLight = length(light.position - fragmentPosition);
        float attenuation = 1.0 / (light.constant + light.linear * distanceFromLight + light.quadratic * (distanceFromLight * distanceFromLight));  
        ambient *= attenuation;
        diffuse *= attenuation;
        specular *= attenuation;

        // Set the output colour
        outputColour = vec4((ambient + diffuse + specular), 1.0);
    }
}