#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/texture_uniforms.glsl

#include glsl-shaders/components/lighting_uniforms.glsl

void main() {
    // Ambient calculations
    vec3 ambient = (ambientStrength * lightingColor);
    
    // Diffuse calculations
    vec3 lightDirection = normalize(lightingPosition - fragmentPosition);
    vec3 diffuse = max(dot(normalize(fragmentNormal), lightDirection), 0.0) * lightingColor;

    // Specular calculations
    vec3 viewDirection = normalize(iCameraPosition - fragmentPosition);
    vec3 reflectDirection = reflect(-lightDirection, fragmentNormal);
    float shininess = 32;
    vec3 specular = specularStrength * pow(max(dot(viewDirection, reflectDirection), 0.0), shininess) * lightingColor;  

    if (u_hasTexture) {
        outputColour = texture2D(u_textureSampler, fragmentUV)) * vec4(((ambient + diffuse + specular), 1.0);
    }
    else {
        // Calculate the fragment colour using the vertex colour, ambient, diffuse and specular lighting values
        outputColour = vec4(((ambient + diffuse + specular) * fragmentColour), 1.0);
    }
}