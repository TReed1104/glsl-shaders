#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/lighting2D_uniforms.glsl


void main() {
    vec3 ambient = (light.colour * light.ambientIntensity) * fragmentColour;
    vec3 diffuse = light.colour * fragmentColour;

    outputColour = vec4((ambient + diffuse), 1.0f);
}
}