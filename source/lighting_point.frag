#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/lighting_uniforms.glsl

void main() {
        // Ambient
        vec3 ambient = light.ambientIntensity * fragmentColour;

        // Diffuse
        vec3 normal = normalize(fragmentNormal);
        vec3 lightDirection = normalize(light.position - fragmentPosition);
        vec3 diffuse = light.diffuseColour * max(dot(normal, lightDirection), 0.0) * fragmentColour;

        // Specular
        vec3 viewDirection = normalize(iCameraPosition - fragmentPosition);
        vec3 reflectdirection = reflect(-lightDirection, normal);
        vec3 specular = light.specularIntensity * pow(max(dot(viewDirection, reflectdirection), 0.0f), shininess) * fragmentColour;

        // Attenuation
        float distanceFromLight = length(light.position - fragmentPosition);
        float attenuation = 1.0 / (light.constant + light.linear * distanceFromLight + light.quadratic * (distanceFromLight * distanceFromLight));  
        ambient *= attenuation;
        diffuse *= attenuation;
        specular *= attenuation;

        // Set the output colour
        outputColour = vec4((ambient + diffuse + specular), 1.0);
}