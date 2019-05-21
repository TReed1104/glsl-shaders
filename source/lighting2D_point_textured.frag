#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/texture_uniforms.glsl

#include glsl-shaders/components/lighting2D_uniforms.glsl

void main() {
    vec3 ambient = (light.colour * light.ambientIntensity) * texture(u_textureSampler, fragmentUV).rgb;
    vec3 diffuse = light.colour * texture(u_textureSampler, fragmentUV).rgb;

    outputColour = vec4((ambient + diffuse), texture(u_textureSampler, fragmentUV).a);
}