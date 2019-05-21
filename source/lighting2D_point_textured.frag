#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/texture_uniforms.glsl

#include glsl-shaders/components/lighting2D_uniforms.glsl

void main() {
    // Calculate the distance to the light
    vec3 distanceFromLight = (light.position - fragmentPosition);
    
    // Calculate how bright the colour on the surface is depending on its surface normal in comparison to the light
    float surfaceBrightness = clamp(dot(normalize(distanceFromLight), fragmentNormal), 0.0, 1.0);
    
    // Reduce the intensity of the light on the surface dependant on its distance to the light
    float lightIntensity = surfaceBrightness * clamp(1.0 - (length(distanceFromLight) / light.radius), 0.0, 1.0);
    
    // Adjust the colour of the texture using the light colour and the calculated intensity
    vec3 pixelColour = light.colour * texture(u_textureSampler, fragmentUV).rgb * lightIntensity;
    
    // Set the output colour of the fragment
    outputColour = vec4(pixelColour, texture(u_textureSampler, fragmentUV).a);
}