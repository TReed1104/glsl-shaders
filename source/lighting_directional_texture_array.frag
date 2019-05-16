#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/texture_array_uniforms.glsl

#include glsl-shaders/components/lighting_uniforms.glsl

void main() {
    if (u_hasTexture) {
        // Ambient
        vec3 ambient = light.ambient * texture(u_textureSampler, vec3(fragmentUV, u_textureArrayLayer)).rgb;

        // Diffuse
        vec3 normal = normalize(fragmentNormal);
        vec3 lightDirection = normalize(-light.direction);
        vec3 diffuse = light.diffuse * max(dot(normal, lightDirection), 0.0) * texture(u_textureSampler, vec3(fragmentUV, u_textureArrayLayer)).rgb;

        // Specular
        vec3 viewDirection = normalize(iCameraPosition - fragmentPosition);
        vec3 reflectdirection = reflect(-lightDirection, normal);
        vec3 specular = light.specular * pow(max(dot(viewDirection, reflectdirection), 0.0f), shininess) * texture(u_textureSampler, vec3(fragmentUV, u_textureArrayLayer)).rgbb;

        // Set the output colour
        outputColour = vec4((ambient + diffuse + specular), 1.0);
    }
    else {
        // Ambient
        vec3 ambient = light.ambient * fragmentColour;

        // Diffuse
        vec3 normal = normalize(fragmentNormal);
        vec3 lightDirection = normalize(-light.direction);
        vec3 diffuse = light.diffuse * max(dot(normal, lightDirection), 0.0) * fragmentColour;

        // Specular
        vec3 viewDirection = normalize(iCameraPosition - fragmentPosition);
        vec3 reflectdirection = reflect(-lightDirection, normal);
        vec3 specular = light.specular * pow(max(dot(viewDirection, reflectdirection), 0.0f), shininess) * fragmentColour;

        // Set the output colour
        outputColour = vec4((ambient + diffuse + specular), 1.0);
    }
}