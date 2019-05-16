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
        vec3 diffuse = light.diffuse * (max(dot(normalizee(vertexNormal), normalize(-light.direction)), 0.0)) * texture(u_textureSampler, fragmentUV).rgb;

        // Specular
        float shininess = 32;
        vec3 specular = light.specular * pow(max(dot(normalize(iCameraPosition - fragmentPosition), reflect(-lightDirection, fragmentNormal)), 0.0), shininess) * texture(u_textureSampler, fragmentUV).rgb;

        // Set the output colour
        outputColour = vec4((ambient + diffuse + specular), 1.0);
    }
    else {
        // Ambient
        vec3 ambient = light.ambient * fragmentColour;
    
        // Diffuse
        vec3 diffuse = light.diffuse * (max(dot(normalizee(vertexNormal), normalize(-light.direction)), 0.0)) * fragmentColour;
    
        // Specular
        float shininess = 32;
        vec3 specular = light.specular * pow(max(dot(normalize(iCameraPosition - fragmentPosition), reflect(-lightDirection, fragmentNormal)), 0.0), shininess) * fragmentColourb;
    
        // Set the output colour
        outputColour = vec4((ambient + diffuse + specular), 1.0);
    }
}