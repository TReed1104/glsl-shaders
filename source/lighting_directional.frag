#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/lighting_uniforms.glsl

void main() {
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