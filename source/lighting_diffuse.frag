#version 330
#include glsl-shaders/components/fragment_in.glsl

#include glsl-shaders/components/fragment_out.glsl

#include glsl-shaders/components/global_uniforms.glsl

#include glsl-shaders/components/lighting_uniforms.glsl

void main() {
    // Ambient calculations
    vec3 ambient = (ambientStrength * lightingColor);
    
    // Diffuse calculations
    vec3 lightDirection = normalize(lightingPosition - gl_FragCoord);
    vec3 diffuse = max(dot(normalize(normal), lightDirection), 0.0) * lightingColor;

    // Calculate the fragment colour using the vertex colour, ambient and diffuse lighting values
    outputColour = vec4(((ambient + diffuse) * fragmentColour), 1.0);
}