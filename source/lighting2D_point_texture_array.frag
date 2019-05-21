#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/texture_array_uniforms.glsl

#include glsl-shaders/components/lighting2D_uniforms.glsl

void main() {
    vec3 ambient = (light.colour * light.ambientIntensity) * texture(u_textureSampler, vec3(fragmentUV, u_textureArrayLayer)).rgb;
    vec3 diffuse = light.colour * texture(u_textureSampler, vec3(fragmentUV, u_textureArrayLayer)).rgb;

    outputColour = vec4((ambient + diffuse), texture(u_textureSampler, vec3(fragmentUV, u_textureArrayLayer)).a);
}