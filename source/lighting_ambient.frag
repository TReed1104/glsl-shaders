#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/lighting_uniforms.glsl

void main() {
    // Ambient calculations
    vec3 ambient = (ambientStrength * lightingColor);

    // Calculate the fragment colour using the vertex colour and ambient lighting values
    outputColour = vec4((ambient * fragmentColour), 1.0);
}